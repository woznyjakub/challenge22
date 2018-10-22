const navList = document.querySelector('.nav__list')

document.querySelectorAll('.nav__hamburger, .nav-list-item-close').forEach((elem) => {
    elem.addEventListener('click', () => {
        document.querySelector('.nav__list').classList.toggle('hidden')
        // document.querySelector('.main-container').classList.toggle('active')
    })
})


// nav hover effect
document.querySelectorAll('.nav__list-item').forEach((elem) => {
    elem.addEventListener('mouseover', function () {
        const elemRect = this.getBoundingClientRect()
        // const leftEdge = elemRect.left
        // console.log(leftEdge);
        // console.log(document.querySelector('.nav__list::after'));
        let leftEdge = elemRect.left
        let rightEdge = elemRect.right
        let elemWidth = this.offsetWidth
        // console.log(leftEdge.toFixed() + "  " + elemWidth);

        // navList.setAttribute('data-pos-left', leftEdge.toFixed() + 'px')
        // navList.setAttribute('data-pos-right', rightEdge.toFixed() + 'px')
        // navList.setAttribute('data-width-start', rightEdge.toFixed() + 'px')

        navList.style.setProperty('--left', leftEdge.toFixed() + 'px', '')
        // navList.style.setProperty('--right', rightEdge.toFixed() + 'px', '')
        navList.style.setProperty('--width', rightEdge.toFixed() - leftEdge.toFixed() + 'px', '')


    })
})

// nav smaller padding when sticky
// const nav = document.querySelector('.nav')
// window.addEventListener('scroll', () => {
//     if (window.scrollY == nav.offsetTop) nav.classList.add('smaller-padding')
//     else nav.classList.remove('smaller-padding')
// })

/* section 'portfolio' */
const sectionPortfolio = document.querySelector('.portfolio')
const pfButtons = document.querySelectorAll('.portfolio__categories-button')
const pfProjects = document.querySelectorAll('.portfolio__project')

pfProjects.forEach((elem) => {
    if (window.innerWidth < 1200) elem.addEventListener('click', function () {
        this.classList.toggle('active')
    })
})

pfButtons.forEach((elem) => {
    elem.addEventListener('click', function () {
        pfButtons.forEach((elem) => {
            elem.classList.remove('active')
        })
        this.classList.toggle('active')
        const filterType = this.getAttribute('data-filter')
        console.log(filterType);
        // const setFilter = () => {
        pfProjects.forEach((elem) => {
            elem.style.display = 'none'
            // if (elem.getAttribute('data-filter') === 'all') elem.style.display = 'block'
            // else if (filterType === 'all') elem.style.display = 'block'
            // else if (elem.getAttribute('data-filter') === filterType) elem.style.display = 'block'
            if (elem.getAttribute('data-filter') === 'all' || filterType === 'all' || elem.getAttribute('data-filter') === filterType) elem.style.display = 'block'
        })
        // }
        // setFilter()
    })
})

/* section 'testimonials' */
document.querySelectorAll('.testimonials__image-wrapper').forEach((image) => {
    image.addEventListener('click', function () {
        document.querySelectorAll('.testimonials__image-wrapper, .testimonials__name-wrapper, .testimonials__quote').forEach((elem) => {
            elem.classList.remove('active')
        })
        const thisId = this.getAttribute('data-id')
        document.querySelectorAll(`.testimonials__image-wrapper:nth-of-type(${thisId}), .testimonials__name-wrapper:nth-of-type(${thisId}), .testimonials__quote:nth-of-type(${thisId})`).forEach((elem) => {
            elem.classList.add('active')
        })
    })
})



/* mobile effects clear */
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
        document.querySelector('.main-container').classList.remove('active')
        document.querySelector('.nav__list').classList.add('hidden')
        pfProjects.forEach((elem) => {
            elem.classList.remove('active')
        })
    }
})