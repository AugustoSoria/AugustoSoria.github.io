export function AngularProjects(){

    return (
        `<div class="project-card ecommerce-card" data-link-web="https://e-commerce-app-dfeff.web.app" data-link-gitHub="https://github.com/AugustoSoria/E-commerce">
            <img src="img/projects/e-commerce-screen.png" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="tech-img-container">
                    <img style="width: 30px;" src="img/skills/angular.png"/>
                    <img style="width: 30px;" src="img/skills/rxjs.png"/>
                    <img style="width: 30px;" src="img/skills/ngrx.png"/>
                    <img style="width: 30px;" src="img/skills/node.png"/>
                    <img style="width: 30px;" src="img/skills/express.png"/>
                    <img style="width: 30px;" src="img/skills/mysql.png"/>
                </div>
                <p class="card-text translatable" id="eCommerceDescription">Aplicación E-Commerce hecha con Angular 13, NgRx, Node Js, Express Js, MySql, JWT.</p>
            </div>
        </div>
        <div class="project-card jobs-card" data-link-web="https://search-offers-job-app.web.app/" data-link-gitHub="https://github.com/AugustoSoria/Job-Searcher-App">
            <img src="img/projects/jobs-screen.png" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="tech-img-container">
                    <img style="width: 30px;" src="img/skills/angular.png"/>
                    <img style="width: 30px;" src="img/skills/rxjs.png"/>
                </div>
                <p class="card-text translatable" id="jobsProjectDescription">Aplicación sobre ofertas laborales hecha con Angular 13, consumiendo la api Remotive.io.</p>
            </div>
        </div>`
    )
}