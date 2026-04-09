import { ReactProjects } from './projects/React-projects.js'
import { AngularProjects } from './projects/Angular-projects.js'
import { NodeProjects } from './projects/Node-projects.js'
import translations from './translations.js'

const navbarUlContainer = document.querySelector('.navbar-ul-container')
const modal = portfolio.querySelector(".modal-links")
const projectsContainer = document.querySelector('.projects-container')
const projectBtnDivs = document.querySelectorAll('div.portfolio-btns div')
const carouselDots = document.getElementById('carouselDots')

let language = "español";

// SPA Router System - Simple approach
const router = {
    sections: null,
    navLinks: null,
    
    init() {
        this.sections = document.querySelectorAll('.section-content');
        this.navLinks = document.querySelectorAll('.navbar-ul a[href*="#"]');
        
        this.setupNavigation();
        this.handleBrowserNavigation();
        this.loadInitialSection();
    },
    
    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const sectionName = href.replace('#', '') || 'home';
                // Si es "inicio", no hacer nada (presentación siempre visible)
                if (sectionName === 'home' || sectionName === '') {
                    return;
                }
                
                this.navigateTo(sectionName);
            });
        });
    },
    
    navigateTo(sectionName) {
        this.showSection(sectionName);
        this.updateURL(sectionName);
    },
    
    showSection(sectionId) {
        let found = false;
        
        this.sections.forEach(section => {
            if (section.dataset.section === sectionId) {
                section.classList.add('active');
                found = true;
            } else {
                section.classList.remove('active');
            }
        });
        
        // Fallback to home if section not found
        if (!found && sectionId !== 'home') {
            this.showSection('home');
        }
    },
    
    updateURL(path) {
        const url = path === 'home' ? '/#' : `/#${path}`;
        history.pushState({ section: path }, '', url);
    },
    
    handleBrowserNavigation() {
        window.addEventListener('popstate', (e) => {
            const section = e.state?.section || 'home';
            this.showSection(section);
        });
        
        // Escuchar cambios de hash
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.replace('#', '') || 'about';
            this.showSection(hash);
        });
    },
    
    loadInitialSection() {
        const hash = window.location.hash.replace('#', '') || 'about';
        const section = hash === 'home' || hash === '' ? 'about' : hash;
        
        this.showSection(section);
    }
};

function removeModals(evt) {
    if(evt.target.className == 'navbar-ul-container open' || 
        evt.target.children[0]?.className == "border-effect") return;
    
    navbarUlContainer.classList.remove('open');
    document.documentElement.classList.remove('block-scroll')

    modal.style.opacity = '0';
    modal.style.left = `-300%`
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
    
    // Reset carousel when switching projects
    setTimeout(() => {
        resetCarousel()
    }, 100)
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
    // GSAP eliminado - las animaciones ahora usan CSS
    // Los elementos .trans2, .trans3, .trans4 ya tienen opacity: 1 por CSS
}

function projectsAnimations() {
    // GSAP eliminado - las project cards ahora usan CSS
    // Los elementos .project-card ya tienen opacity: 1 por CSS
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

// Carousel Functions
function initializeCarousel() {
    const projectCardsContainer = document.querySelector('.project-cards-container');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!projectCardsContainer || !dotsContainer) return;
    
    // Remove existing scroll listener to prevent duplicates
    projectCardsContainer.removeEventListener('scroll', updateActiveDot);
    
    const projectCards = projectCardsContainer.querySelectorAll('.project-card');
    const dotCount = projectCards.length;
    
    // Clear existing dots
    dotsContainer.innerHTML = '';
    
    // Create dots
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => scrollToProject(i));
        dotsContainer.appendChild(dot);
    }
    
    // Add scroll event listener to update active dot
    projectCardsContainer.addEventListener('scroll', updateActiveDot);
    
    // Reset to first position
    projectCardsContainer.scrollLeft = 0;
    
    // Update active dot immediately after reset
    setTimeout(() => updateActiveDot(), 50);
}

function scrollToProject(index) {
    const projectCardsContainer = document.querySelector('.project-cards-container');
    if (!projectCardsContainer) return;
    
    const projectCards = projectCardsContainer.querySelectorAll('.project-card');
    if (index >= 0 && index < projectCards.length) {
        const targetCard = projectCards[index];
        const containerWidth = projectCardsContainer.clientWidth;
        const cardWidth = targetCard.offsetWidth;
        const gap = 16; // 1em gap
        const padding = 32; // 2em padding
        
        // Calculate scroll position to center the card
        const scrollPosition = (cardWidth + gap) * index - (containerWidth - cardWidth) / 2 + padding;
        
        projectCardsContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveDot() {
    const projectCardsContainer = document.querySelector('.project-cards-container');
    if (!projectCardsContainer) return;
        
    const projectCards = projectCardsContainer.querySelectorAll('.project-card');
    const dots = carouselDots.querySelectorAll('.carousel-dot');
        
    if (projectCards.length === 0 || dots.length === 0) return;
        
    const containerWidth = projectCardsContainer.clientWidth;
    const scrollLeft = projectCardsContainer.scrollLeft;
    const cardWidth = projectCards[0].offsetWidth;
    const gap = 16; // 1em gap
    const padding = 32; // 2em padding

    // Better calculation: find which card is most visible in viewport
    let cardIndex = 0;
    let maxVisibility = 0;
        
    projectCards.forEach((card, index) => {
        const cardLeft = index * (cardWidth + gap) + padding;
        const cardRight = cardLeft + cardWidth;
        const viewportLeft = scrollLeft;
        const viewportRight = scrollLeft + containerWidth;
            
        // Calculate how much of this card is visible
        const visibleLeft = Math.max(cardLeft, viewportLeft);
        const visibleRight = Math.min(cardRight, viewportRight);
        const visibleWidth = Math.max(0, visibleRight - visibleLeft);
        const visibility = visibleWidth / cardWidth;
            
        if (visibility > maxVisibility) {
            maxVisibility = visibility;
            cardIndex = index;
        }
    });
        
    // Update active dot
    dots.forEach((dot, index) => {
        const shouldBeActive = index === cardIndex;
        dot.classList.toggle('active', shouldBeActive);
    });
}

function resetCarousel() {
    const projectCardsContainer = document.querySelector('.project-cards-container');
    if (projectCardsContainer) {
        projectCardsContainer.scrollLeft = 0;
    }
    initializeCarousel();
}

// Initialize router when DOM is ready
router.init();

export {
    removeModals,
    showProject,
    openModalProjectsLinks,
    translate,
    changeLanguage,
    router,
    initializeCarousel,
    resetCarousel
}