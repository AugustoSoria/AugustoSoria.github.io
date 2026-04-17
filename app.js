import { NextProjects } from './projects/Next-projects.js'
import { removeModals, showProject, openModalProjectsLinks, changeLanguage, router, initializeCarousel } from './functions.js'

const translateBtn = document.querySelector("#translateBtn")
const projectsContainer = document.querySelector('.projects-container')
const projectBtns = document.querySelector('div.portfolio-btns')
const $form = document.querySelector('#form')
const $inputEmail = document.querySelector('#email')
const $textarea = document.querySelector('#message')
const mailto = document.querySelector('#mailto')

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

// Initialize carousel after projects are loaded
setTimeout(() => {
    initializeCarousel()
}, 100)

// -------------------------------- CSS animations --------------------------------
// GSAP eliminado - las animaciones ahora usan CSS

// -------------------------------- E-mail contact --------------------------------
$form.addEventListener('submit', (e) => {
    e.preventDefault()

    mailto.setAttribute('href', `mailto:augustosoria@hotmail.es?subject=mensaje de: ${$inputEmail.value}&body=${$textarea.value}`)
    mailto.click()
})