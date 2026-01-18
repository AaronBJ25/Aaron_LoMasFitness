(() => {
// Constantes
const MENU_BTN = document.getElementById('menuBtn'); // Seleccionamos el botón que nos permite abrir el menú
const MENU = document.getElementById('menuLinks'); // Seleccionamos el menú de navegación
const CLOSE_BTN = document.getElementById('closeBtn'); // Seleccionamos el botón que nos permite cerrar el menú
const BLACK_LAYER = document.getElementById('blackLayer'); // Seleccionamos la capa que oscurecerá el resto de la página al abrir el menú y el carrito
const BODY = document.querySelector('body'); // Seleccionamos el body del documento
const CART_PREVIEW = document.getElementById('cartPreview'); // Seleccionamos el carrito desplegable
const CART_RED_DOT = document.querySelector('.red-dot') // Seleccionamos el punto rojo que aparecerá al añadir algo al carrito
const CART_PREVIEW_CARDS = document.querySelector('.cart-preview__cards'); // Seleccionamos el bloque que contiene cada producto en el carrito
const CART_PREVIEW_BTN = document.getElementById('cartBtn'); // Seleccionamos el botón que nos permite abrir el carrito
const CLOSE_CART_BTN = document.getElementById('closeCartBtn'); // Seleccionamos el botón que nos permite cerrar el carrito
const REMOVE_CARD_PREVIEW_ITEM = document.getElementById('removeCardPreviewItem'); // Seleccionamos el botón que borrará los elementos del carrito

// Funciones
MENU_BTN.addEventListener('click', () => { // Al hacer click en el botón de abrir el menú
    MENU.classList.add('show') // Mostrar el menú de navegación
    BLACK_LAYER.classList.add('show') // Mostrar la capa oscura
    BODY.style.overflowY = 'hidden' // Bloqueamos el scroll
    
})

function closeMenu() { // Función para cerrar el menú
    MENU.classList.remove('show') // Ocultamos el menú de navegación
    BLACK_LAYER.classList.remove('show') // Quitamos la capa oscura
    BODY.style.overflowY = 'scroll'; // Desbloqueamos el scroll
    
}

CLOSE_BTN.addEventListener('click', () => { // Al hacer click en el botón de cerrar el menú
    closeMenu() // Ejecutamos la función para cerrar el menú
})

CART_PREVIEW_BTN.addEventListener('click', () => { // Al hacer click en el botón de abrir el carrito
    CART_RED_DOT.style.display = 'none' // Se quitará el circulo rojo al lado del carrito
    CART_PREVIEW.classList.add('show') // Mostrar el carrito
    BLACK_LAYER.classList.add('show') // Mostrar la capa oscura
    BODY.style.overflowY = 'hidden' // Bloqueamos el scroll
    
})

function closeCart() { // Función para cerrar el carrito
    CART_PREVIEW.classList.remove('show') // Ocultamos el carrito
    BLACK_LAYER.classList.remove('show') // Quitar la capa oscura
    BODY.style.overflowY = 'scroll' // Desbloqueamos el scroll
    
}

CLOSE_CART_BTN.addEventListener('click', () => { // Al hacer click en el botón de cerrar el carrito
    closeCart() // Ejecutamos la función para cerrar el carrito
})

BLACK_LAYER.addEventListener('click', () => { // Al hacer click en la capa oscurecida
    closeMenu() // Ejecutamos la función para cerrar el menú
    closeCart() // Ejecutamos la función para cerrar el carrito
})


function updateCart() { // Función que actualiza el carrito
    let cartInfo = JSON.parse(localStorage.getItem('cart')) || [] // Cargamos la información del carrito obtenida al hacer click en "Añadir a la cesta". Si no existe se crea un array vacío
    const CART_PREVIEW_CARDS = document.querySelector('.cart-preview__cards'); // Seleccionamos el bloque que contiene cada producto en el carrito
    if(cartInfo.length === 0) { // Si no hay nada en el carrito
        CART_PREVIEW_CARDS.innerHTML = '<div class="flex-column"><span class="text--sm">El carrito está vacío</span> <span><i class="ri-close-circle-line"></i></span></div>' // Se mostrará este mensaje
        return // Sale de la función
    }
    CART_PREVIEW_CARDS.innerHTML = '' // Limpiamos el contenido
    cartInfo.forEach((product, index) => { // Por cada iteración (con los parámetros product e index)
        let cartPreviewElement = document.createElement('div') // Variable: Creamos un div
        cartPreviewElement.classList.add('cart-preview__card', 'grid-container') // Le añadimos dos clases
        cartPreviewElement.innerHTML = ` 
        <span class="body">${product.id}</span>
        <span class="body">${product.price}</span>
        <span class="body">${product.quantity}</span>
        <button class="link delete-item" title="Eliminar producto del carrito" data-index="${index}"><i class="ri-delete-bin-2-line"></i></button>
        ` /* Añadimos la siguiente información:
                - Un span con el nombre del producto añadido
                - Un span con el precio del producto añadido
                - Un span con la cantidad del producto añadido
                - Un botón que eliminará el producto. El index le dice cual producto borrar
          */ 
        CART_PREVIEW_CARDS.appendChild(cartPreviewElement) // Le asignamos al contenedor padre (CART_PREVIEW_CARDS), el elemnto hijo recién creado (cartPreviewElement)
    });
}

updateCart() // Ejecutamos la función que actualiza el carrito
window.updateCart = updateCart // Hacemos que la función de actualizar el carrito se pueda usar en cualquier script asignándola como propiedad de window

CART_PREVIEW_CARDS.addEventListener('click', e => { // Evento generado por IA. Explicado a profundidad en la memoria
    const DELETE_BTN = e.target.closest('.delete-item') // Constante: Guardamos el elemento más cercano(.closest), al elemento que acabamos de clickar(e.target), en este caso un button con la clase 'delete-item'.
    const PROD_INDEX = DELETE_BTN.dataset.index // Constante: Guardamos el data-index del button
    let cartInfo = JSON.parse(localStorage.getItem('cart')) || [] // Cargamos la información del carrito obtenida al hacer click en "Añadir a la cesta". Si no existe se crea un array vacío
    cartInfo.splice(PROD_INDEX, 1) // Eliminamos un elemento en la posición 'PROD_INDEX'
    localStorage.setItem('cart', JSON.stringify(cartInfo)) // Guardamos el array en localStorage en formato JSON

    updateCart() // Ejecutamos la función que actualiza el carrito
})

})()