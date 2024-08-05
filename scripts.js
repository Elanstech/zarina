document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init();

    // Initialize jarallax
    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.5
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
