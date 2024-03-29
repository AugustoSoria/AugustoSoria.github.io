import { ReactProjects } from './projects/React-projects.js'
import { removeModals, openMobileMenu, showProject, openModalProjectsLinks, GSAPAnimations, changeLanguage } from './functions.js'

const menuBtn = document.querySelector('.material-symbols-outlined')
const translateBtn = document.querySelector("#translateBtn")
const projectsContainer = document.querySelector('.projects-container')
const projectBtns = document.querySelector('div.portfolio-btns')
const $form = document.querySelector('#form')
const $inputEmail = document.querySelector('#email')
const $textarea = document.querySelector('#message')
const mailto = document.querySelector('#mailto')

document.documentElement.addEventListener('click', removeModals)

// -------------------------------- navbar -------------------------------- 
menuBtn.addEventListener('click', openMobileMenu)
translateBtn.addEventListener('click', changeLanguage)

// -------------------------------- projects section --------------------------------
let $divProjectCardsContainer = document.createElement("div")
$divProjectCardsContainer.classList.add('project-cards-container')
$divProjectCardsContainer.innerHTML = ReactProjects()
projectsContainer.appendChild($divProjectCardsContainer);

projectBtns.addEventListener('click', (evt) => showProject(evt, $divProjectCardsContainer))

projectsContainer.addEventListener('click', openModalProjectsLinks)

// -------------------------------- GSAP animations --------------------------------
GSAPAnimations()

// -------------------------------- E-mail contact --------------------------------
$form.addEventListener('submit', (e) => {
    e.preventDefault()

    mailto.setAttribute('href', `mailto:augustosoria@hotmail.es?subject=mensaje de: ${$inputEmail.value}&body=${$textarea.value}`)
    mailto.click()
})