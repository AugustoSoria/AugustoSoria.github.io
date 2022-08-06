import { ReactProjects } from './projects/React-projects.js'
import { AngularProjects } from './projects/Angular-projects.js'
import { NodeProjects } from './projects/Node-projects.js'

const navbarUlContainer = document.querySelector('.navbar-ul-container')
const modal = portfolio.querySelector(".modal-links")
const projectsContainer = document.querySelector('.projects-container')

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
    if(btn_ids.indexOf(evt.target.id) == -1) return

    if(evt.target.id === btn_ids[0]) $div.innerHTML = ReactProjects()
    if(evt.target.id === btn_ids[1]) $div.innerHTML = AngularProjects()
    if(evt.target.id === btn_ids[2]) $div.innerHTML = NodeProjects()
    
    $div.classList.add('show')
    projectsContainer.innerHTML = ""
    projectsContainer.appendChild($div);

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

    webIcon.href = clickedProjectCard.dataset.linkWeb;
    gHIcon.href = clickedProjectCard.dataset.linkGithub;

    /^\/$/.test(clickedProjectCard.dataset.linkWeb) ? webIcon.style.cursor = 'not-allowed' : webIcon.style.cursor = 'pointer';
    /^\/$/.test(clickedProjectCard.dataset.linkGithub) ? gHIcon.style.cursor = 'not-allowed' : gHIcon.style.cursor = 'pointer';

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

export {
    removeModals,
    openMobileMenu,
    showProject,
    openModalProjectsLinks,
    GSAPAnimations
}