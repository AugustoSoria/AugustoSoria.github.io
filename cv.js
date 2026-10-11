import { ui, profile, experience, skills, education, certCategories, certifications, inProgress, languages } from './cv-data.js'

const $cv = document.querySelector('#cv-content')

let lang = 'es'
let certFilter = 'all'

// -------------------------------- helpers --------------------------------

// Devuelve el texto en el idioma actual; acepta strings o { es, en }
const t = value => typeof value === 'string' ? value : value[lang]

const months = {
    es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

function formatDate(date) {
    if (!date) return t(ui.present)
    const [year, month] = date.split('-')
    return month ? `${months[lang][month - 1]} ${year}` : year
}

const period = (start, end) => `${formatDate(start)} – ${formatDate(end)}`

const tags = items => `<ul class="cv-tags">${items.map(i => `<li>${t(i)}</li>`).join('')}</ul>`

const section = (id, title, content) => `
    <section class="cv-section" id="${id}">
        <h2>${t(title)}</h2>
        ${content}
    </section>`

// -------------------------------- secciones --------------------------------

function renderHeader() {
    return `
        <header class="cv-header">
            <h1>${profile.name}</h1>
            <p class="cv-subtitle">${profile.title}</p>
            <p class="cv-location">${t(profile.location)}</p>
            <ul class="cv-contact">
                <li><a href="mailto:${profile.email}">${profile.email}</a></li>
                ${profile.links.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`).join('')}
            </ul>
        </header>`
}

function renderSummary() {
    return section('profile', ui.profileTitle, t(profile.summary).map(p => `<p>${p}</p>`).join(''))
}

function renderExperience() {
    const jobs = experience.map(job => `
        <article class="cv-item">
            <div class="cv-item-head">
                <h3>${job.role} · <span class="cv-accent">${job.company}</span></h3>
                <span class="cv-date">${period(job.start, job.end)}</span>
            </div>
            <p class="cv-muted">${t(job.mode)}</p>
            <p>${t(job.intro)}</p>
            <ul class="cv-bullets">${t(job.bullets).map(b => `<li>${b}</li>`).join('')}</ul>
            ${tags(job.tech)}
        </article>`).join('')
    return section('experience', ui.experienceTitle, jobs)
}

function renderSkills() {
    const groups = skills.map(s => `
        <div class="cv-skill-group">
            <h3>${t(s.group)}</h3>
            ${tags(s.items)}
        </div>`).join('')
    return section('skills', ui.skillsTitle, `<div class="cv-skills">${groups}</div>`)
}

function renderEducation() {
    const items = education.map(e => `
        <article class="cv-item">
            <div class="cv-item-head">
                <h3>${t(e.title)} · <span class="cv-accent">${e.institution}</span></h3>
                <span class="cv-date">${period(e.start, e.end)}</span>
            </div>
            <p class="cv-muted">${t(e.detail)}</p>
        </article>`).join('')
    return section('education', ui.educationTitle, items)
}

function renderCertifications() {
    const filters = [{ id: 'all', label: ui.all }, ...certCategories].map(c => {
        const count = c.id === 'all' ? certifications.length : certifications.filter(cert => cert.category === c.id).length
        return `<button type="button" class="cv-filter${certFilter === c.id ? ' active' : ''}" data-filter="${c.id}">${t(c.label)} <span>${count}</span></button>`
    }).join('')

    const certs = certifications
        .filter(c => certFilter === 'all' || c.category === certFilter)
        .map(c => `
            <li class="cv-cert">
                <div>
                    <p class="cv-cert-name">${t(c.name)}</p>
                    <p class="cv-muted">${c.issuer} · ${formatDate(c.date)}${c.id ? ` · ${t(ui.credentialId)}: ${c.id}` : ''}</p>
                </div>
                ${c.url ? `<a href="${c.url}" target="_blank" rel="noopener" class="cv-link">${t(ui.credential)}</a>` : ''}
            </li>`).join('')

    return section('certifications', ui.certificationsTitle, `
        <div class="cv-filters">${filters}</div>
        <ul class="cv-certs">${certs}</ul>`)
}

function renderInProgress() {
    const courses = inProgress.map(c => {
        const name = c.url ? `<a href="${c.url}" target="_blank" rel="noopener">${t(c.name)}</a>` : t(c.name)
        return `
            <li class="cv-course">
                <p class="cv-cert-name">${name}</p>
                <p class="cv-muted">${c.issuer}</p>
            </li>`
    }).join('')
    return section('in-progress', ui.inProgressTitle, `<ul class="cv-courses">${courses}</ul>`)
}

function renderLanguages() {
    const items = languages.map(l => `<li><strong>${t(l.name)}</strong> <span class="cv-muted">· ${t(l.level)}</span></li>`).join('')
    return section('languages', ui.languagesTitle, `<ul class="cv-languages">${items}</ul>`)
}

// -------------------------------- render --------------------------------

function render() {
    $cv.innerHTML = [
        renderHeader(),
        renderSummary(),
        renderExperience(),
        renderSkills(),
        renderEducation(),
        renderCertifications(),
        renderInProgress(),
        renderLanguages(),
    ].join('')

    const $certs = $cv.querySelector('.cv-certs')
    $certs.addEventListener('scroll', () => updateScrollHints($certs))
    updateScrollHints($certs)
}

// Muestra los degradados de la lista de certificaciones solo hacia donde queda contenido
function updateScrollHints($list) {
    const { scrollTop, scrollHeight, clientHeight } = $list
    $list.classList.toggle('can-scroll-up', scrollTop > 2)
    $list.classList.toggle('can-scroll-down', scrollTop + clientHeight < scrollHeight - 2)
}

// Sigue el botón de traducción del sitio (changeLanguage en functions.js dispara el evento)
document.addEventListener('languagechange', evt => {
    lang = evt.detail === 'english' ? 'en' : 'es'
    render()
})

$cv.addEventListener('click', evt => {
    const filter = evt.target.closest('.cv-filter')
    if (!filter) return
    certFilter = filter.dataset.filter
    render()
})

render()
