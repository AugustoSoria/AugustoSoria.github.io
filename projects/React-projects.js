export function ReactProjects(){

    return  (
        `
        <div class="project-card news-card" data-link-web="https://ssr-news-challenge.herokuapp.com/" data-link-gitHub="https://github.com/AugustoSoria/SSR-NewsApp">
            <img src="img/projects/ssr-news-challenge.png" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="tech-img-container">
                    <img style="width: 30px;" src="img/skills/react.png"/>
                    <img style="width: 30px;" src="img/skills/node.png"/>
                </div>
                <p class="card-text translatable" id="ssrNewsAppDescription">Responsivo Server Side Rendering challenge hecho con React, React-Router, Express y Node. En proceso.</p>
            </div>
        </div>
        <div class="project-card news-card" data-link-web="/" data-link-gitHub="https://github.com/AugustoSoria/News-app">
            <img src="img/projects/news-app.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="tech-img-container">
                    <img style="width: 30px;" src="img/skills/react.png"/>
                    <img style="width: 30px;" src="img/skills/nextjs.png"/>
                </div>
                <p class="card-text translatable" id="newsAppDescription">Aplicación sobre noticias hecha con ReactJs y NextJs, consumiendo la api Newsapi.org.</p>
            </div>
        </div>
        <div class="project-card weather-card" data-link-web="https://weatherapp-776be.web.app" data-link-gitHub="https://github.com/AugustoSoria/Weather-App">
            <img src="img/projects/weather-screen.png" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="tech-img-container">
                    <img style="width: 30px;" src="img/skills/react.png"/>
                </div>
                <p class="card-text translatable" id="weatherAppDescription">Aplicación que indica el clima hecha con ReactJs, consumiendo la api WeatherApi.</p>
            </div>
        </div>
        <div class="project-card todolist-card" data-link-web="https://to-do-list-app-ce91a.web.app" data-link-gitHub="https://github.com/AugustoSoria/To-Do-List-App">
            <img src="img/projects/To-Do-App.png" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="tech-img-container">
                    <img style="width: 30px;" src="img/skills/react.png"/>
                </div>
                <p class="card-text translatable" id="toDoAppDescription">Aplicación To-Do-List responsive hecha con ReactJs.</p>
            </div>
        </div>`
    )
}