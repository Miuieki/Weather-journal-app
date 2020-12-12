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
 * Define Global Variables
 * 
*/
const navbarMenu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

const navElements = navbarMenu.getElementsByClassName("menu__link");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNav() {
    for (let item of sections) {
        let section = document.createElement("li");
        section.className = "menu__link";
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        navbarMenu.appendChild(section);
    };
};

createNav();

// Add class 'active' to section when near top of viewport
function activateSection() {
// Create a loop that will iterate over all the sections.
    for (let item of sections) {
    // Calculate each section's position
        const position = item.getBoundingClientRect();
    // Compare the section position with a specific range to decide whether this section is actually in the viewport or not
        if (position.top <= 150 && position.bottom >= 150) {
            item.classList.add('your-active-class');
        } else {
            item.classList.remove('your-active-class');
    }; 
};
activateSection();

// Scroll to anchor ID using scrollTO event

navElements.addEventListener("click", function() {
    
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


