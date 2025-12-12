/*
 * SITE 1101 Personal Website Project
 * JavaScript: script.js
 * Focus: Mobile menu functionality for responsive design.
 */

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // Mobile Menu Toggle: Required for responsive navigation
    // -----------------------------------------------------
    
    // NOTE: This JS assumes you add a button to your HTML navbar 
    // for mobile users (e.g., a "hamburger" icon).
    // Example HTML for the button (place inside <nav>): 
    // <button class="menu-toggle" aria-expanded="false" aria-controls="nav-links">
    //     ☰
    // </button>

    const navLinks = document.querySelector('.nav-links');
    // Assuming you add a toggle button with the class 'menu-toggle'
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggles the 'active' class on the navigation links. 
            // The CSS media query will show/hide the menu based on this class.
            navLinks.classList.toggle('active');

            // Accessibility update
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // -----------------------------------------------------
    // Optional: Add other dynamic features here
    // -----------------------------------------------------
    // Example: Highlight the current page link in the navbar
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage) {
            item.style.fontWeight = 'bold'; // Simple styling for current page
            item.style.textDecoration = 'underline';
        }
    });
});