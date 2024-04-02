export function ReactProjects(){

    return  (
        `
            <div class="project-card news-card" data-link-gitHub="https://github.com/AugustoSoria/JPA-Ecommerce">
                <img src="img/projects/JPA_Ecommerce.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="tech-img-container">
                        <img style="width: 30px;" src="img/skills/react.png"/>
                        <img style="width: 30px;" src="img/skills/java.png"/>
                        <img style="width: 30px;" src="img/skills/spring.png"/>
                        <img style="width: 30px;" src="img/skills/mysql.png"/>
                    </div>
                    <p class="card-text translatable" id="jpaEcommerceDescription">E-Commerce el cual hace uso de las especificaciones de JPA para el filtrado de datos.</p>
                </div>
            </div>
            <div class="project-card news-card" data-link-web="https://ssr-news-challenge.herokuapp.com/" data-link-gitHub="https://github.com/AugustoSoria/SSR-NewsApp">
                <img src="img/projects/ssr-news-challenge.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="tech-img-container">
                        <img style="width: 30px;" src="img/skills/react.png"/>
                        <img style="width: 30px;" src="img/skills/node.png"/>
                    </div>
                    <p class="card-text translatable" id="ssrNewsAppDescription">Responsivo Server Side Rendering challenge hecho con React, React-Router, Express y Node. From scratch.</p>
                </div>
            </div>
        `
    )
}