// Control de velocidad del video
const video = document.getElementById('medusa');

// Cambiar velocidad de reproducción (0.5 = mitad de velocidad, 2 = doble velocidad)
video.playbackRate = 0.75; // Cambia este valor al que quieras

// Opcional: Crear controles para cambiar la velocidad dinámicamente
function setSpeed(speed) {
    video.playbackRate = speed;
}

// Ejemplos de uso:
// setSpeed(0.25);  // Cuarto de velocidad
// setSpeed(0.5);   // Mitad de velocidad  
// setSpeed(1);     // Velocidad normal
// setSpeed(1.5);   // 1.5x velocidad
// setSpeed(2);     // Doble velocidad
