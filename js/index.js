//Constantes
const MENU__BTN = document.getElementById('menuBtn')
const MENU = document.getElementById('menuLinks')
const CLOSE__BTN = document.getElementById('closeBtn')
const BODY = document.querySelector('body')
//Variables


//Funciones
MENU__BTN.addEventListener('click', () => {
    MENU.classList.add('show')
    BODY.style.overflow = 'hidden'
})

CLOSE__BTN.addEventListener('click', () => {
    MENU.classList.remove('show')
    BODY.style.overflow = 'scroll'
})