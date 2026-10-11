import { NextProjects } from './projects/Next-projects.js'
import './cv.js'
import { removeModals, showProject, openModalProjectsLinks, changeLanguage, router, initializeCarousel } from './functions.js'

const translateBtn = document.querySelector("#translateBtn")
const projectsContainer = document.querySelector('.projects-container')
const projectBtns = document.querySelector('div.portfolio-btns')

document.documentElement.addEventListener('click', removeModals)

// -------------------------------- navbar -------------------------------- 
translateBtn.addEventListener('click', changeLanguage)

// -------------------------------- projects section --------------------------------
let $divProjectCardsContainer = document.createElement("div")
$divProjectCardsContainer.classList.add('project-cards-container')
$divProjectCardsContainer.innerHTML = NextProjects()
projectsContainer.appendChild($divProjectCardsContainer);

projectBtns.addEventListener('click', (evt) => showProject(evt, $divProjectCardsContainer))

projectsContainer.addEventListener('click', openModalProjectsLinks)

// Restaura el idioma elegido (también traduce la sección CV)
try {
    if (localStorage.getItem('lang') === 'english') {
        translateBtn.checked = true
        changeLanguage({ target: translateBtn })
    }
} catch {}

// Initialize carousel after projects are loaded
setTimeout(() => {
    initializeCarousel()
}, 100)

// -------------------------------- CSS animations --------------------------------
// GSAP eliminado - las animaciones ahora usan CSS
