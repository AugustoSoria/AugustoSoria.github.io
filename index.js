import { ReactProjects } from './projects/React-projects.js'
import { AngularProjects } from './projects/Angular-projects.js'
import { VueProjects } from './projects/Vue-projects.js'

const menuBtn = document.querySelector('.material-symbols-outlined')
const navbarUlContainer = document.querySelector('.navbar-ul-container')

const projectsContainer = document.querySelector('.projects-container')
const portfolio = document.querySelector('section#portfolio')

const $form = document.querySelector('#form')
const $inputEmail = document.querySelector('#email')
const $textarea = document.querySelector('#message')
const mailto = document.querySelector('#mailto')

// -------------------------------- navbar -------------------------------- 
menuBtn.addEventListener('click', (e) => {
    navbarUlContainer.classList.toggle('open');
    document.documentElement.classList.toggle('block-scroll')
    e.stopPropagation()
})
document.documentElement.addEventListener('click', (e) => {
    if(e.target.className == 'navbar-ul-container open' || 
        e.target.children[0]?.className == "border-effect") return;
    
    navbarUlContainer.classList.remove('open');
    document.documentElement.classList.remove('block-scroll')
})


// -------------------------------- projects section --------------------------------
let $div = document.createElement("div")
$div.classList.add('project-cards-container')
$div.innerHTML = ReactProjects()
projectsContainer.appendChild($div);

portfolio.addEventListener('click', evt => {
    let btn_ids = ['react-btn', 'angular-btn', 'vue-btn']
    if(btn_ids.indexOf(evt.target.id) == -1) return

    if(evt.target.id === btn_ids[0]) $div.innerHTML = ReactProjects()
    if(evt.target.id === btn_ids[1]) $div.innerHTML = AngularProjects()
    if(evt.target.id === btn_ids[2]) $div.innerHTML = VueProjects()
    
    $div.classList.add('show')
    projectsContainer.innerHTML = ""
    projectsContainer.appendChild($div);

    projectsAnimations()
})

// -------------------------------- GSAP animations --------------------------------
gsap.to('.trans1', {
    duration: 2.5,
    delay: 0.5,
    opacity: 1
})

gsap.registerPlugin(ScrollTrigger)

gsap.to('.trans2', {
    scrollTrigger: {
        trigger: '.trans2',
        start: 'top 400px',
        end: '200px 300px'
    },
    duration: 1, opacity: 1
})

gsap.to('.trans3', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '600px 400px',
        end: '700px 300px'
    },
    duration: 1, opacity: 1
})

projectsAnimations()

gsap.to('.trans4', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '1100px 400px',
        end: '1200px 300px'
    },
    duration: 1, opacity: 1
})

function projectsAnimations() {
    return (
        gsap.to('.projects-container div.project-card', {
            scrollTrigger: {
                trigger: '.trans2',
                start: '630px 400px',
                end: '700px 300px'
            },
            duration: 1, opacity: 1, y:30
        })
    )
}

// -------------------------------- E-mail contact --------------------------------
$form.addEventListener('submit', (e) => {
    e.preventDefault()

    mailto.setAttribute('href', `mailto:augustosoria@hotmail.es?subject=mensaje de: ${$inputEmail.value}&body=${$textarea.value}`)
    mailto.click()
})
