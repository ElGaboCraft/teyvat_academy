// Código para el efecto de sombra en el navbar al hacer scroll
var lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('shadow-bottom');
    } else {
        navbar.classList.remove('shadow-bottom');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});

// Código para el desplazamiento suave al hacer clic en enlaces del navbar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const topPos = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 60;
                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });
            }
        });
    });
});
