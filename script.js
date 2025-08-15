document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('is-active');
        mobileNav.classList.toggle('is-active');
        body.classList.toggle('no-scroll');
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNavToggle.classList.remove('is-active');
            mobileNav.classList.remove('is-active');
            body.classList.remove('no-scroll');
        });
    });

    // Hide header on scroll down, show on scroll up
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll Down
            header.style.top = '-100px';
        } else {
            // Scroll Up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // --- Исправленный блок анимации ---
    // Fade-in effect for sections on scroll
    const elementsToAnimate = document.querySelectorAll('.hero-content, .about-content, .portfolio-grid, .contact');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если элемент появляется в области видимости
            if (entry.isIntersecting) {
                // Добавляем класс 'visible', чтобы запустить анимацию появления
                entry.target.classList.add('visible');
                // Прекращаем отслеживать элемент после того, как он стал видимым
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Назначаем начальный класс для анимации и начинаем отслеживать каждый элемент
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in'); // Этот класс делает элемент невидимым изначально
        observer.observe(el);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
