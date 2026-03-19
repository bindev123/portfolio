document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    new WOW().init();

    stickyNav();
});

function stickyNav() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));

            this.classList.add('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        });
    });
}