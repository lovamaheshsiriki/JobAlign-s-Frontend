//
// JobAlign Script
// -----------------
// Handles interactive elements and SPA-style navigation.
//

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navbar Toggle Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobileNav');
    const closeMenu = document.querySelector('.close-menu');

    const openMobileNav = () => {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileNav = () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', openMobileNav);
    closeMenu.addEventListener('click', closeMobileNav);
    
    // 2. Inline Page Navigation Logic
    const navLinks = document.querySelectorAll('.nav__link, .nav__link--mobile');
    const pageSections = document.querySelectorAll('.page-section');

    const handleNavClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.dataset.target;

        // Hide all sections
        pageSections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }

        // Update active state for all nav links
        // We select by data-target to update both desktop and mobile links
        document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('nav__link--active'));
        const activeDesktopLink = document.querySelector(`.nav__link[data-target="${targetId}"]`);
        if(activeDesktopLink) {
            activeDesktopLink.classList.add('nav__link--active');
        }

        // Close mobile navigation if it's open
        if (mobileNav.classList.contains('open')) {
            closeMobileNav();
        }

        // Scroll to the top of the page on new section view
        window.scrollTo(0, 0);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // 3. Set Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 4. Placeholder Click Handlers for Buttons
    const handleButtonClick = (action) => {
        console.log(`Action triggered: ${action}`);
        alert(`You clicked: ${action}. This is a placeholder action.`);
    };

    
});