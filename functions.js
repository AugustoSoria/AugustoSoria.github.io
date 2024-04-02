import { ReactProjects } from './projects/React-projects.js'
import { AngularProjects } from './projects/Angular-projects.js'
import { NodeProjects } from './projects/Node-projects.js'
import translations from './translations.js'

const navbarUlContainer = document.querySelector('.navbar-ul-container')
const modal = portfolio.querySelector(".modal-links")
const projectsContainer = document.querySelector('.projects-container')
const projectBtnDivs = document.querySelectorAll('div.portfolio-btns div')

let language = "español";

function removeModals(evt) {
    if(evt.target.className == 'navbar-ul-container open' || 
        evt.target.children[0]?.className == "border-effect") return;
    
    navbarUlContainer.classList.remove('open');
    document.documentElement.classList.remove('block-scroll')

    modal.style.opacity = '0';
    modal.style.left = `-300%`
}

function openMobileMenu(evt) {
    navbarUlContainer.classList.toggle('open');
    document.documentElement.classList.toggle('block-scroll')
    evt.stopPropagation()
}

function showProject(evt, $div) {
    let btn_ids = ['react-btn', 'angular-btn', 'node-btn']
    if(btn_ids.indexOf(evt.target.parentElement.id) == -1) return;

    const filterValues = {
        "react-btn": "hue-rotate(340deg)",
        "angular-btn": "hue-rotate(197deg)",
        "node-btn": "hue-rotate(85deg)"
    }

    projectBtnDivs.forEach(div => {
        let img = div.firstElementChild
        if(div.id === evt.target.parentElement.id) {
            div.classList.remove('noActive')
            img.style.filter = "hue-rotate(360deg)"
        } else {
            div.classList.add('noActive')
            img.style.filter = filterValues[div.id]
        }
    })
    
    if(evt.target.parentElement.id === btn_ids[0]) $div.innerHTML = ReactProjects()
    if(evt.target.parentElement.id === btn_ids[1]) $div.innerHTML = AngularProjects()
    if(evt.target.parentElement.id === btn_ids[2]) $div.innerHTML = NodeProjects()
    
    $div.classList.add('show')
    projectsContainer.innerHTML = ""
    projectsContainer.appendChild($div);

    translate()
    projectsAnimations()
}

function openModalProjectsLinks(evt) {
    evt.preventDefault()

    const path = evt.composedPath()
    let clickedImgCard = path.find(e => /\bcard-img-top\b/.test(e.className));
    let clickedProjectCard = path.find(e => /\bproject-card\b/.test(e.className));
    if(!clickedImgCard) return;

    evt.stopPropagation();

    let webIcon = modal.querySelector('a[title="web deploy"]');
    let gHIcon = modal.querySelector('a[title="github repositorio"]');

    modal.style.left = `${evt.pageX + 15}px`;
    modal.style.top = `${evt.pageY - 54}px`;

    clickedProjectCard.dataset.linkWeb ? webIcon.href = clickedProjectCard.dataset.linkWeb : 
        webIcon.removeAttribute('href');

    clickedProjectCard.dataset.linkGithub ? gHIcon.href = clickedProjectCard.dataset.linkGithub : 
        gHIcon.removeAttribute('href');

    /^https:\/\//.test(clickedProjectCard.dataset.linkWeb)? webIcon.style.cursor = 'pointer' : webIcon.style.cursor = 'not-allowed';
    /^https:\/\//.test(clickedProjectCard.dataset.linkGithub)? gHIcon.style.cursor = 'pointer' : gHIcon.style.cursor = 'not-allowed';

    modal.style.opacity = '1';
}

function GSAPAnimations() {
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
}

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

function translate() {
    const translatableElements = document.querySelectorAll(".translatable")
    translatableElements.forEach(e => {
        if(e.id === "resumeAnchor") {return e.href = translations[language][e.id]}
        e.innerHTML = translations[language][e.id]
    })
}

function changeLanguage(evt) {
    language = evt.target.checked ? "english" : "español"
    translate()
}

export {
    removeModals,
    openMobileMenu,
    showProject,
    openModalProjectsLinks,
    GSAPAnimations,
    translate,
    changeLanguage
}