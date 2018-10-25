const navList = document.querySelector('.nav__list')

/* nav */
document.querySelectorAll('.nav__hamburger, .nav-list-item-close').forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector('.nav__list').classList.toggle('hidden')
    })
})

// nav hover effect
document.querySelectorAll('.nav__list-item').forEach(elem => {
    elem.addEventListener('mouseover', function () {
        const elemRect = this.getBoundingClientRect()
        navList.style.setProperty('--left', `${elemRect.left.toFixed()}px`)
        navList.style.setProperty('--width', `${elemRect.right.toFixed() - elemRect.left.toFixed()}px`)
    })
})

// scrolling on click
document.querySelectorAll('[data-scroll-to]').forEach(elem => {
    elem.addEventListener('click', function () {
        window.scroll({
            top: document.querySelector(`.${elem.getAttribute('data-scroll-to')}`).offsetTop - document.querySelector('.nav').offsetHeight,
            left: 0,
            behavior: 'smooth'
        })
        navList.classList.add('hidden')
    })
})

/* section 'portfolio' */
const pfButtons = document.querySelectorAll('.portfolio__categories-button')
const pfProjects = document.querySelectorAll('.portfolio__project')

pfProjects.forEach(elem => {
    if (window.innerWidth < 1200) elem.addEventListener('click', function () {
        this.classList.toggle('active')
    })
})

pfButtons.forEach(elem => {
    elem.addEventListener('click', function () {
        pfButtons.forEach(elem => {
            elem.classList.remove('active')
        })
        this.classList.toggle('active')
        const filterType = this.getAttribute('data-filter')
        pfProjects.forEach(elem => {
            elem.style.display = 'none'
            if (elem.getAttribute('data-filter') === 'all' || filterType === 'all' || elem.getAttribute('data-filter') === filterType) elem.style.display = 'block'
        })
    })
})

/* counter in section 'team' */
const counterWrapper = document.querySelector('.counter')
const countedElems = document.querySelectorAll('.counter__number')
let countingExecuted = false
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight - counterWrapper.offsetHeight / 2 > counterWrapper.offsetTop && window.scrollY - counterWrapper.offsetHeight / 2 < counterWrapper.offsetTop) {
        counterWrapper.classList.add('visible')
        if (!countingExecuted) {
            setTimeout(() => {
                countedElems.forEach(elem => {
                    let options = {
                        useEasing: true,
                        useGrouping: true,
                        separator: '',
                        decimal: '.'
                    }
                    let demo = new CountUp(elem, 0, elem.getAttribute('data-count-to'), 0, 5, options)
                    if (!demo.error) demo.start()
                    else console.error(demo.error)
                })
            }, 1500)
        }
        countingExecuted = true
    }
})

/* section 'testimonials' */
document.querySelectorAll('.testimonials__image-wrapper').forEach(image => {
    image.addEventListener('click', function () {
        document.querySelectorAll('.testimonials__image-wrapper, .testimonials__name-wrapper, .testimonials__quote').forEach(elem => {
            elem.classList.remove('active')
        })
        const thisId = this.getAttribute('data-id')
        document.querySelectorAll(`.testimonials__image-wrapper:nth-of-type(${thisId}), .testimonials__name-wrapper:nth-of-type(${thisId}), .testimonials__quote:nth-of-type(${thisId})`).forEach(elem => {
            elem.classList.add('active')
        })
    })
})

/* mobile effects clear */
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
        document.querySelector('.main-container').classList.remove('active')
        document.querySelector('.nav__list').classList.add('hidden')
        pfProjects.forEach(elem => {
            elem.classList.remove('active')
        })
    }
})