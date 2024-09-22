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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const navBar = document.getElementById('navbar__list')
const allSections = document.getElementsByTagName('section')
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSectionsToNav() {
    for (const section of allSections) {
        const navItem = document.createElement('li')
        navItem.innerText = section.dataset.nav
        navItem.classList.add('menu__link')
        navBar.append(navItem)
    }
}

addSectionsToNav()

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


