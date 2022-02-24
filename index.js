// E-mail contact
const $form = document.querySelector('#form')
const $inputName = document.querySelector('#name')
const $inputEmail = document.querySelector('#email')
const $textarea = document.querySelector('#message')
const mailto = document.querySelector('#mailto')
$form.addEventListener('submit', (e) => {
    e.preventDefault()

    mailto.setAttribute('href', `mailto:augustosoria@hotmail.es?subject=mensaje de: ${$inputEmail.value}&body=${$textarea.value}`)
    mailto.click()
})

//GSAP animations

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

gsap.to('.ecommerce-card', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '630px 400px',
        end: '700px 300px'
    },
    duration: 1, opacity: 1, y:30
})

gsap.to('.jobs-card', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '630px 400px',
        end: '700px 300px'
    },
    duration: 1.6, opacity: 1, y:30
})

gsap.to('.news-card', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '630px 400px',
        end: '700px 300px'
    },
    duration: 1.8, opacity: 1, y:30
})

gsap.to('.weather-card', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '650px 400px',
        end: '700px 300px'
    },
    duration: 2, opacity: 1, y:30
})

gsap.to('.todolist-card', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '650px 400px',
        end: '700px 300px'
    },
    duration: 2.2, opacity: 1, y:30
})

gsap.to('.trans4', {
    scrollTrigger: {
        trigger: '.trans2',
        start: '1100px 400px',
        end: '1200px 300px'
    },
    duration: 1, opacity: 1
})