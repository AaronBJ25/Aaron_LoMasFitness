// Constantes
const SERVICES = document.getElementById('services'); // Seleccionamos la sección de servicios
const SERVICES_BTN = document.getElementById('servicesBtn'); // Seleccionamos el enlace de servicios en el menú de navegación
const REVIEWS = document.getElementById('reviews'); // Seleccionamos la sección de reseñas
const REVIEWS_BTN = document.getElementById('reviewsBtn'); // Seleccionamos el enlace de reseñas en el menú de navegación

//Funciones
SERVICES_BTN.addEventListener('click', () => { // Al hacer click en el enlace de servicios en el menú de navegación
    closeMenu(); // Ejecutamos la función para cerrar el menú
    SERVICES.scrollIntoView() // Hacemos scroll hasta la sección de servicios
})

REVIEWS_BTN.addEventListener('click', () => { // Al hacer click en el enlace de reseñas en el menú de navegación
    closeMenu(); // Ejecutamos la función para cerrar el menú
    REVIEWS.scrollIntoView() // Hacemos scroll hasta la sección de reseñas
})
