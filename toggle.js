document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelectorAll('.nav-items');
    const header = document.querySelector('#main-header');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navItems.forEach(menu => menu.classList.toggle('active'));
            hamburger.classList.toggle('active');
            // Update ARIA attribute for accessibility
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.classList.remove('transparent');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent');
        }
    });
});