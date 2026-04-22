export function NextProjects(){

    return  (
        `
            <div class="project-card news-card" data-link-web="https://cineears.vercel.app/" data-link-gitHub="">
                <img src="img/projects/cineears.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="tech-img-container">
                        <img style="width: 30px;" src="img/skills/nextjsw.png"/>
                        <img style="width: 30px;" src="img/skills/python.png"/>
                        <img style="width: 30px;" src="img/skills/fastapi.png"/>
                    </div>
                    <p class="card-text translatable" id="cineearsDescription">Next.js 14 con SSR para inglés listening. Clippy como widget/microfrontend conectado a microservicio Python/FastAPI.</p>
                </div>
            </div>
        `
    )
}
