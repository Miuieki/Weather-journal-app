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

// build the nav and scroll to anchor ID using scrollIntoView event

function createNav() {
    for (let item of sections) {
        let section = document.createElement("li");
        section.className = "menu__link";
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        navbarMenu.appendChild(section);
        section.addEventListener("click", function(event){
            event.preventDefault();
            item.scrollIntoView({behavior: "smooth"});
        })
    };
};

createNav();

// Add class 'active' to section when near top of viewport and highlight the navbar 
function activeSection() {
    for(let i = 0; i < sections.length; i++) {
        const position = sections[i].getBoundingClientRect();
        const nav = document.getElementsByTagName("li");
        if (position.top <= 150 && position.bottom >= 150) {
            sections[i].classList.add('your-active-class');
            nav[i].classList.add('active');
        } else {
            sections[i].classList.remove('your-active-class');
            nav[i].classList.remove('active');
        }; 
    };
};

activeSection();

window.addEventListener('scroll', activeSection);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


