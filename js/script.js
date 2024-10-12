//Burger Button

const burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay'),
    menu = document.querySelector('.menu'),
    exit_btn = document.querySelector('.exit__btn'),
    menu_item = document.querySelectorAll('.menu-item');

burger.addEventListener('click', () => {
    overlay.style.display = 'block';
    menu.classList.remove('hide');
    menu.classList.add('show');
})

exit_btn.addEventListener('click', () => {
    overlay.style.display = 'none';
    menu.classList.remove('show');
    menu.classList.add('hide');
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        overlay.style.display = 'none';
        menu.classList.remove('show');
        menu.classList.add('hide');
    });
});

overlay.addEventListener('click', () => {
    if (overlay.style.display == 'block') {
        overlay.style.display = 'none';
        menu.classList.remove('show');
        menu.classList.add('hide');
        submit_from.style.display = 'none';
    };
});


//Submit Form

const send_btn = document.querySelector('.send-btn'),
      submit_from = document.querySelector('.submit-form');

send_btn.addEventListener('click', () => {
    overlay.style.display = 'block';
    submit_from.style.display = 'block';
    // document.body.style.overflow = 'hidden';

});


AOS.init();
