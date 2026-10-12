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
            <div class="project-card" data-link-web="https://d23eskyaokxzzr.cloudfront.net/" data-link-gitHub="https://github.com/AugustoSoria/articulos_resumidor">
                <img src="img/projects/articulos-resumidor.png" class="card-img-top" alt="Resumidor de artículos">
                <div class="card-body">
                    <div class="tech-img-container">
                        <img style="width: 30px;" src="img/skills/nextjsw.png"/>
                        <img style="width: 30px;" src="img/skills/aws.svg"/>
                    </div>
                    <p class="card-text translatable" id="resumidorDescription">Resumidor con IA: Next.js en S3/CloudFront, API serverless (Lambda, API Gateway, DynamoDB) y Claude en Bedrock. Infra con SAM.</p>
                </div>
            </div>
        `
    )
}
