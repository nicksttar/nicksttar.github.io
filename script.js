document.addEventListener('DOMContentLoaded', () => {
    const nav_btn = document.querySelector('.nav-btn');
    const home_page = document.querySelector('.home-wrapper');
    const nav_page = document.querySelector('.nav-page');
    const home_link = document.querySelector('.home-link');
    const resume_link = document.querySelector('.resume-link');
    const resume_page = document.querySelector('.resume');
    const portfolio_link = document.querySelector('.portfolio-link');
    const portfolio_page = document.querySelector('.portfolio');
    const contact_link = document.querySelector('.contact-link');
    const contact_page = document.querySelector('.contact');

    let page_state = 0;

    const navToggle = (p) => {
        nav_btn.classList.toggle('change');
        nav_page.classList.toggle('hidden');
        switch (page_state) {
            case 0:
                home_page.classList.toggle('hidden');
                break;
            case 1:
                resume_page.classList.toggle('hidden');
                break;
            case 2:
                portfolio_page.classList.toggle('hidden');
                break;
            case 3:
                contact_page.classList.toggle('hidden');
        }
    }

    const showHome = () => {
        page_state = 0
        navToggle();
    }

    const showResume = () => {
        page_state = 1;
        navToggle();
    }

    const showPortfolio = () => {
        page_state = 2;
        navToggle();
    }

    const showContact = () => {
        page_state = 3;
        navToggle();
    }


    nav_btn.addEventListener('click', navToggle);
    home_link.addEventListener('click', showHome);
    resume_link.addEventListener('click', showResume);
    portfolio_link.addEventListener('click', showPortfolio);
    contact_link.addEventListener('click', showContact);
});
