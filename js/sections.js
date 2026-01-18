(() => {
// Constantes
const SERVICES = document.getElementById('services'); // Seleccionamos la sección de servicios
const SERVICES_BTN = document.getElementById('servicesBtn'); // Seleccionamos el enlace de servicios en el menú de navegación
const REVIEWS = document.getElementById('reviews'); // Seleccionamos la sección de reseñas
const REVIEWS_BTN = document.getElementById('reviewsBtn'); // Seleccionamos el enlace de reseñas en el menú de navegación
const MENU = document.getElementById('menuLinks'); // Seleccionamos el menú de navegación
const BLACK_LAYER = document.getElementById('blackLayer'); // Seleccionamos la capa que oscurecerá el resto de la página al abrir el menú y el carrito
const BODY = document.querySelector('body'); // Seleccionamos el body del documento

//Funciones
function closeMenu() { // Función para cerrar el menú
    MENU.classList.remove('show') // Ocultamos el menú de navegación
    BLACK_LAYER.classList.remove('show') // Quitamos la capa oscura
    BODY.style.overflowY = 'scroll'; // Desbloqueamos el scroll    
}

SERVICES_BTN.addEventListener('click', () => { // Al hacer click en el enlace de servicios en el menú de navegación
    closeMenu(); // Ejecutamos la función para cerrar el menú
    SERVICES.scrollIntoView() // Hacemos scroll hasta la sección de servicios
})

REVIEWS_BTN.addEventListener('click', () => { // Al hacer click en el enlace de reseñas en el menú de navegación
    closeMenu(); // Ejecutamos la función para cerrar el menú
    REVIEWS.scrollIntoView() // Hacemos scroll hasta la sección de reseñas
})
})()