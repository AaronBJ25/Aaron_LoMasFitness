//Constantes
const MENU__BTN = document.getElementById('menuBtn');
const MENU = document.getElementById('menuLinks');
const CLOSE__BTN = document.getElementById('closeBtn');
const SERVICES__BTN = document.getElementById('servicesBtn');
const REVIEWS__BTN = document.getElementById('reviewsBtn');
const BODY = document.querySelector('body');
//Variables


//Funciones
MENU__BTN.addEventListener('click', () => {
    MENU.classList.add('show');
    BODY.style.overflowY = 'hidden';
});

function closeMenu() {
    MENU.classList.remove('show');
    BODY.style.overflowY = 'scroll';
}

CLOSE__BTN.addEventListener('click', () => {
    closeMenu();
});

SERVICES__BTN.addEventListener('click', () => {
    closeMenu();
});

REVIEWS__BTN.addEventListener('click', () => {
    closeMenu();
});