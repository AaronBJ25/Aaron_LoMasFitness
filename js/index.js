//Constantes
const MENU__BTN = document.getElementById('menuBtn'); // Seleccionamos el botón que nos permite abrir el menú
const MENU = document.getElementById('menuLinks'); // Seleccionamos el menú de navegación
const CLOSE__BTN = document.getElementById('closeBtn'); // Seleccionamos el botón que nos permite cerrar el menú
const SERVICES__BTN = document.getElementById('servicesBtn'); // Seleccionamos el enlace de servicios en el menú de navegación
const REVIEWS__BTN = document.getElementById('reviewsBtn'); // Seleccionamos el enlace de reseñas en el menú de navegación
const BODY = document.querySelector('body'); // Seleccionamos el body del documento


//Variables


//Funciones
MENU__BTN.addEventListener('click', () => { // Al hacer click en el botón de abrir el menú
    MENU.classList.add('show'); // Mostrar el menú de navegación
    BODY.style.overflowY = 'hidden'; // Bloqueamos el scroll
});

function closeMenu() { // Función para cerrar el menú
    MENU.classList.remove('show'); // Ocultamos el menú de navegación
    BODY.style.overflowY = 'scroll'; // Desbloqueamos el scroll
}

CLOSE__BTN.addEventListener('click', () => { // Al hacer click en el botón de cerrar el menú
    closeMenu(); // Ejecutamos la función para cerrar el menú
});

SERVICES__BTN.addEventListener('click', () => { // Al hacer click en el enlace de servicios en el menú de navegación
    closeMenu(); // Ejecutamos la función para cerrar el menú
});

REVIEWS__BTN.addEventListener('click', () => { // Al hacer click en el enlace de reseñas en el menú de navegación
    closeMenu(); // Ejecutamos la función para cerrar el menú
});
