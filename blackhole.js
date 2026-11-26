// Fondo WebGL: agujero negro con lente gravitacional (ray marching) + brillo tipo líquido,
// bloom y aberración cromática con three.js (se carga desde un CDN vía el importmap de index.html).
// Ajustes rápidos: ver CONFIG.

import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { SavePass } from 'three/addons/postprocessing/SavePass.js'

const CONFIG = {
    angle: 0.3,          // inclinación en pantalla (positivo = el disco sube hacia la derecha)
    inclination: 0.14,   // altura de la cámara sobre el plano del disco (radianes; 0 = de canto)
    diskOuter: 40,       // radio exterior del disco (en radios de Schwarzschild; la sombra mide ~2,6)
    // Para alargar el disco sin que se vea más grueso: subir diskOuter y bajar inclination
    // en la misma proporción (el grosor aparente ~ diskOuter × inclination)
    size: 0.085,         // radio aparente de la sombra respecto del alto de la ventana
    spin: 0.4,           // velocidad de giro del disco
    doppler: 1.2,        // diferencia de brillo entre el lado que se acerca y el que se aleja (real ~3-4)
    gain: 4.5,           // brillo del disco
    steps: 180,          // pasos máximos por rayo (menos = más rápido, menos preciso cerca de la sombra)
    bloom: { strength: 0.9, radius: 0.55, threshold: 0.7 },
    aberration: 0.08,   // separación de colores en los bordes
    relief: 9.0,         // relieve del brillo tipo líquido (más alto = más reflejos)
    edgeSoftness: 6,     // ancho (px) de la transición entre el resplandor y el centro negro
    sheen: 1.0,          // intensidad de los reflejos tipo líquido
    textDim: 0.4,        // brillo en la zona del texto (mitad izquierda, solo desktop)
    mobileDim: 0.55,
    fps: 30,
    pixelRatio: 1,       // multiplicador sobre la densidad de la pantalla (tope 1,5)
    mobilePixelRatio: 0.6,
}

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isMobile = () => window.innerWidth <= 768

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
renderer.domElement.id = 'blackhole'
renderer.domElement.setAttribute('aria-hidden', 'true')
document.body.prepend(renderer.domElement)

// ---------- escena: un rectángulo que cubre la pantalla, todo pasa en el shader ----------
// Distancia de la cámara al agujero (radios de Schwarzschild): proporcional al disco, para que
// el borde cercano no pase por debajo de la cámara y se deforme
const D = CONFIG.diskOuter * 1.7
const material = new THREE.ShaderMaterial({
    uniforms: {
        uRes: { value: new THREE.Vector2() },
        uCenter: { value: new THREE.Vector2() },
        uTime: { value: 0 },
        uAngle: { value: CONFIG.angle },
        uIncl: { value: CONFIG.inclination },
        uFov: { value: 1 },
        uDoppler: { value: CONFIG.doppler },
        uGain: { value: CONFIG.gain },
    },
    vertexShader: `
        void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: `
        uniform vec2 uRes, uCenter;
        uniform float uTime, uAngle, uIncl, uFov, uDoppler, uGain;

        float hash(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
        }
        float noise(vec2 p) {
            vec2 i = floor(p), f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                       mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
        }
        float fbm(vec2 p) {
            float v = 0.0, a = 0.5;
            // 3 octavas (antes 4): la cuarta casi no se veía y es la mitad del costo de cada veta extra
            for (int i = 0; i < 3; i++) { v += a * noise(p); p = p * 2.03 + 7.1; a *= 0.5; }
            return v;
        }
        vec2 rot(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }

        // negro -> violeta -> rojo -> naranja -> amarillo -> blanco
        vec3 ramp(float x) {
            vec3 c = mix(vec3(0.0), vec3(0.32, 0.08, 0.45), smoothstep(0.0, 0.14, x));
            c = mix(c, vec3(0.75, 0.12, 0.12), smoothstep(0.12, 0.24, x));
            c = mix(c, vec3(1.0, 0.45, 0.2), smoothstep(0.22, 0.34, x));
            c = mix(c, vec3(1.0, 0.82, 0.35), smoothstep(0.32, 0.45, x));
            c = mix(c, vec3(0.97, 0.95, 0.98), smoothstep(0.45, 0.6, x));
            return c;
        }

        const float RIN = 3.0;    // órbita estable más interna
        const float ROUT = ${CONFIG.diskOuter.toFixed(1)};

        // Emisión del disco en un punto de su plano: vetas largas que giran según Kepler
        float diskEmission(vec2 xz) {
            float r = length(xz);
            float profile = smoothstep(RIN - 0.1, RIN + 0.8, r) * pow(RIN / r, 1.6)
                          * (1.0 - smoothstep(ROUT * 0.65, ROUT, r));
            vec2 q = rot(xz, uTime * pow(r, -1.5) * 3.0);
            float streaks = fbm(vec2(r * 2.8 + 1.3 * fbm(q * 0.18), r * 0.15));
            float fine = fbm(vec2(r * 9.0 + 0.8 * fbm(q * 0.32 + 3.0), 1.0));
            // Zonas más y menos brillantes a lo largo de la órbita: sin esto el disco es casi
            // simétrico (anillos concéntricos) y el giro no se nota
            float clumps = fbm(q * 0.5 + 5.0);
            return profile * (0.3 + 1.1 * streaks * streaks + 0.4 * fine) * (0.25 + 1.6 * clumps * clumps);
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - uCenter) / uRes.y;
            uv = rot(uv, -uAngle);

            // Cámara sobre el plano del disco (y = arriba), mirando al agujero
            vec3 camPos = vec3(0.0, sin(uIncl), -cos(uIncl)) * ${D.toFixed(1)};
            vec3 fwd = normalize(-camPos);
            vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));
            vec3 up = cross(fwd, right);
            vec3 dir = normalize(fwd + (uv.x * right + uv.y * up) * uFov);

            // Trayectoria del fotón: aproximación de Schwarzschild, a = -1,5 h² x / r^5
            vec3 pos = camPos;
            vec3 vel = dir;
            vec3 hv = cross(pos, vel);
            float h2 = dot(hv, hv);

            // Descarte temprano: un rayo que pasa lejos del agujero casi no se curva (desvío ~ 2/b).
            // Si además en línea recta no toca el disco, no puede tocar nada: queda negro sin calcular.
            // B_LENS: hasta qué distancia la curvatura todavía puede llevar el rayo al disco de atrás
            // (cruza el plano a ~b²/2 del centro) -> b < sqrt(2·ROUT), con margen.
            const float B_LENS = ${(Math.sqrt(2 * CONFIG.diskOuter) * 1.5).toFixed(2)};
            if (h2 > B_LENS * B_LENS) {
                float t = -camPos.y / dir.y;
                bool missesDisk = dir.y >= 0.0 || length((camPos + dir * t).xz) > ROUT * 1.15;
                if (missesDisk) { gl_FragColor = vec4(0.0); return; }
            }

            vec3 col = vec3(0.0);
            float alpha = 0.0;
            float hole = 0.0;   // cuánto se ve el horizonte en este píxel (va al canal alfa)
            for (int i = 0; i < ${CONFIG.steps}; i++) {
                float r = length(pos);
                // Paso adaptativo: fino cerca del agujero (donde la luz se curva), largo lejos (casi recta)
                float dt = clamp(r * mix(0.08, 0.25, smoothstep(4.0, 20.0, r)), 0.03, 15.0);
                vel += -1.5 * h2 * pos / pow(r, 5.0) * dt;
                vec3 next = pos + vel * dt;

                // Cruce del plano del disco
                if (pos.y * next.y < 0.0) {
                    vec3 hit = mix(pos, next, pos.y / (pos.y - next.y));
                    float rh = length(hit.xz);
                    if (rh > RIN - 0.2 && rh < ROUT) {
                        float I = diskEmission(hit.xz);
                        // Doppler: el lado que viene hacia la cámara brilla más
                        vec3 vdisk = normalize(vec3(-hit.z, 0.0, hit.x));
                        float beta = sqrt(0.5 / rh);
                        float gamma = inversesqrt(1.0 - beta * beta);
                        float dop = 1.0 / (gamma * (1.0 - beta * dot(vdisk, -normalize(vel))));
                        I *= pow(dop, uDoppler) * sqrt(1.0 - 1.0 / rh);
                        float x = 1.0 - exp(-I * uGain);
                        vec3 emit = ramp(0.6 * x) * (0.5 + 2.2 * x * x);   // >1 en lo más brillante: alimenta el bloom
                        float a = clamp(x * 1.3, 0.0, 0.95);
                        col += (1.0 - alpha) * emit * a;
                        alpha += (1.0 - alpha) * a;
                        if (alpha > 0.98) break;
                    }
                }
                if (length(next) < 1.0) { hole = 1.0 - alpha; alpha = 1.0; break; }               // cae en el horizonte
                if (r > ${(D + 4).toFixed(1)} && dot(pos, vel) > 0.0) break;   // se escapa
                pos = next;
            }
            gl_FragColor = vec4(col, hole);
        }`,
})
const scene = new THREE.Scene()
scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material))
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

// ---------- postprocesado ----------
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
// Brillo tipo líquido (como liquid-gl.js), en pantalla: el brillo de la imagen se usa como relieve,
// su pendiente da una normal y la normal da reflejos blanco-celestes
const sheenPass = new ShaderPass({
    uniforms: {
        tDiffuse: { value: null },
        uTexel: { value: new THREE.Vector2() },
        uRelief: { value: CONFIG.relief },
        uSheen: { value: CONFIG.sheen },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 uTexel;
        uniform float uRelief, uSheen;
        varying vec2 vUv;
        float lum(vec2 uv) { return dot(texture2D(tDiffuse, uv).rgb, vec3(0.3, 0.5, 0.2)); }
        void main() {
            vec3 col = texture2D(tDiffuse, vUv).rgb;
            vec2 e = uTexel * 5.0;   // ~5 px: sigue las formas grandes, no el ruido fino
            float h = lum(vUv);
            float hx = lum(vUv + vec2(e.x, 0.0)) - lum(vUv - vec2(e.x, 0.0));
            float hy = lum(vUv + vec2(0.0, e.y)) - lum(vUv - vec2(0.0, e.y));
            vec3 n = normalize(vec3(-hx * uRelief, -hy * uRelief, 1.0));
            vec3 r = reflect(vec3(0.0, 0.0, -1.0), n);
            float spec = pow(max(dot(r, normalize(vec3(-0.5, 0.6, 0.5))), 0.0), 20.0)
                       + pow(max(dot(r, normalize(vec3(0.6, -0.35, 0.5))), 0.0), 40.0) * 0.7;
            float hl = clamp(spec, 0.0, 1.0) * smoothstep(0.05, 0.3, h);
            vec3 tint = mix(vec3(1.0, 0.97, 0.95), vec3(0.45, 0.65, 1.0), smoothstep(0.3, 0.9, hl));
            gl_FragColor = vec4(col + tint * hl * 1.4 * uSheen, texture2D(tDiffuse, vUv).a);   // conserva la máscara del horizonte
        }`,
})
composer.addPass(sheenPass)
// Guarda la imagen (con la máscara del horizonte en alfa) antes del bloom, que la mezcla con el entorno
const savePass = new SavePass()
composer.addPass(savePass)
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256),
    CONFIG.bloom.strength, CONFIG.bloom.radius, CONFIG.bloom.threshold)
composer.addPass(bloom)
// Aberración cromática radial desde el centro del agujero + atenuación en la zona del texto
const finalPass = new ShaderPass({
    uniforms: {
        tDiffuse: { value: null },
        uCenter: { value: new THREE.Vector2(0.68, 0.5) },
        uAmount: { value: CONFIG.aberration },
        uTextDim: { value: CONFIG.textDim },
        uMobile: { value: 0 },
        tMask: { value: null },   // se asigna después: ShaderPass clona los uniforms y no puede clonar texturas de render targets
        uTexel: { value: new THREE.Vector2() },
        uSoft: { value: CONFIG.edgeSoftness },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `
        uniform sampler2D tDiffuse, tMask;
        uniform vec2 uCenter, uTexel;
        uniform float uAmount, uTextDim, uMobile, uSoft;
        varying vec2 vUv;
        void main() {
            vec2 d = vUv - uCenter;
            float r = texture2D(tDiffuse, vUv - d * uAmount).r;
            float g = texture2D(tDiffuse, vUv).g;
            float b = texture2D(tDiffuse, vUv + d * uAmount).b;
            vec3 col = vec3(r, g, b);
            col = col / (1.0 + max(max(col.r, col.g), col.b) * 0.15);   // comprime suave lo que pasa de 1
            // Centro negro: donde se ve el horizonte se descarta el resplandor que se metió (borde suavizado)
            // Máscara desenfocada en dos anillos (radio uSoft px): el negro entra de a poco
            float hole = texture2D(tMask, vUv).a * 2.0;
            for (int i = 0; i < 8; i++) {
                float ang = float(i) * 0.785398;
                vec2 o = vec2(cos(ang), sin(ang)) * uTexel * uSoft;
                hole += texture2D(tMask, vUv + o * 0.45).a + texture2D(tMask, vUv + o).a;
            }
            hole /= 18.0;
            col *= 1.0 - smoothstep(0.0, 1.0, hole);
            float dim = uMobile > 0.5 ? uTextDim : mix(uTextDim, 1.0, smoothstep(0.25, 0.6, vUv.x));
            gl_FragColor = vec4(col * dim, 1.0);
        }`,
})
finalPass.uniforms.tMask.value = savePass.renderTarget.texture
composer.addPass(finalPass)

// ---------- tamaño ----------
const size = new THREE.Vector2()
const resize = () => {
    const mobile = isMobile()
    const pr = Math.min(window.devicePixelRatio || 1, 1.5) * (mobile ? CONFIG.mobilePixelRatio : CONFIG.pixelRatio)
    renderer.setPixelRatio(pr)
    renderer.setSize(window.innerWidth, window.innerHeight, false)
    composer.setPixelRatio(pr)
    composer.setSize(window.innerWidth, window.innerHeight)
    renderer.getDrawingBufferSize(size)

    const cx = mobile ? 0.5 : 0.68, cy = mobile ? 0.55 : 0.5
    material.uniforms.uRes.value.copy(size)
    material.uniforms.uCenter.value.set(cx * size.x, cy * size.y)
    finalPass.uniforms.uCenter.value.set(cx, cy)
    sheenPass.uniforms.uTexel.value.set(1 / size.x, 1 / size.y)
    finalPass.uniforms.uTexel.value.set(1 / size.x, 1 / size.y)
    finalPass.uniforms.uMobile.value = mobile ? 1 : 0
    finalPass.uniforms.uTextDim.value = mobile ? CONFIG.mobileDim : CONFIG.textDim
    // La sombra mide ~2,6 radios: se elige el campo de visión para que ocupe CONFIG.size del alto
    const shadow = mobile ? 0.1 * Math.min(size.x, size.y) / size.y : CONFIG.size
    material.uniforms.uFov.value = (2.6 / D) / shadow
    if (reduced) composer.render()
}
resize()
window.addEventListener('resize', resize)

// ---------- loop ----------
let time = 0, last = 0, acc = 0, running = false
const loop = (now) => {
    if (!running) return
    requestAnimationFrame(loop)
    const dt = Math.min((now - last) / 1000 || 0, 0.1)
    last = now
    acc += dt
    if (acc < 1 / CONFIG.fps) return
    time += acc
    acc = 0
    material.uniforms.uTime.value = time * CONFIG.spin
    material.uniforms.uAngle.value = CONFIG.angle + 0.03 * Math.sin(time * 0.1)
    composer.render()
}
const start = () => { running = true; last = performance.now(); requestAnimationFrame(loop) }
if (reduced) {
    composer.render()
} else {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) running = false
        else if (!running) start()
    })
    start()
}
