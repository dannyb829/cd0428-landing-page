/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navBar = document.getElementById('navbar__list')
const allSections = document.getElementsByTagName('section')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// helper function iterator
function iterateOverSections (callBack){
    for(const section of allSections){
        callBack(section)
    }
}

function getDistanceFromTop(){
    return document.body.getBoundingClientRect().top
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSectionsToNav() {
    //iterate over sections
    iterateOverSections(section => {
        const menuLink = document.createElement('li')
        menuLink.innerText = section.dataset.nav
        menuLink.id = section.dataset.nav
        menuLink.classList.add('menu__link')
        // click to scroll to anchor in section
        menuLink.addEventListener('click', () => scrollToAnchor(section.dataset.nav))
        navBar.append(menuLink)
        //create individual menu link for each section extracting name from dataset
        // slap it on the DOM
    }

    )
}

addSectionsToNav()

// Add class 'active' to section when near top of viewport

function makeSectionActive() {
    iterateOverSections(section => {
        //grab section relative position for reference when scrolling
        const box = section.getBoundingClientRect();
        //grab nav li 
        const menuLink = document.getElementById(section.dataset.nav)
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
        //apply active state on current section and corresponding Nav link
        section.classList.add('your-active-class')
        //alter nav to show active
        menuLink.classList.add('active-li')
        
    } else {
        //Remove active state from other section and corresponding Nav link
        section.classList.remove('your-active-class')
        //alter nav to show inactive
        menuLink.classList.remove('active-li')
        }
    })
}

window.addEventListener('scroll', () =>{
    makeSectionActive()
    showNavOnScroll()
})

// Scroll to anchor ID using scrollTO event
//finds section based on injected data in menu links, scroll smoothly into view
// function applied to eventlistener on nav above
function scrollToAnchor(identifier) {
    const anchor = document.querySelector(`[data-nav= "${identifier}"]`)
    anchor.scrollIntoView({behavior:"smooth"})
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// hide nav festure
// only show for a moment on scroll
// if scrolled to top stay on

function showNavOnScroll(){
    const nav = document.getElementById('nav-header')
    nav.classList.add('show-on-scroll')

    if (getDistanceFromTop() > 0){
        return
    } 
    else if (nav.classList.contains('show-on-scroll')){
        setTimeout(()=>{
            nav.classList.remove('show-on-scroll')
        },5000)
    }
}

//scroll to top button 
const scrollToTopArrow = document.createElement('div')
scrollToTopArrow.innerHTML = '<span>↑ Back to top</span>'
scrollToTopArrow.id = 'back-to-top'

const lastSection = allSections[allSections.length - 1]
lastSection.append(scrollToTopArrow)

scrollToTopArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
} 
)
