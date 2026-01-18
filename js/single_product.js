// Constantes
const ADD_PRODUCT_BTN = document.getElementById('addProductBtn') // Seleccionamos el botón de añadir a la cesta
const HEADER = document.querySelector('.header') // Seleccionamos el header
const PROD__NAME = document.querySelector('.product__name').innerHTML // Seleccionamos el nombre del producto
const PROD__PRICE = document.querySelector('.product__price').innerHTML // Seleccionamos el precio del producto
const RED_DOT = document.querySelector('.red-dot') // Seleccionamos el punto rojo que aparecerá al añadir algo al carrito

// Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [] // Cargamos la información del carrito obtenida al hacer click en "Añadir a la cesta". Si no existe se crea un array vacío

// Funciones

ADD_PRODUCT_BTN.addEventListener('click', () => { // Al hacer click en el botón de añadir a la cesta
   
    RED_DOT.style.display = 'block' // Se mostrará el punto rojo que nos indica que se ha añadido algo al carrito
    HEADER.scrollIntoView() // Nos dirige al header en caso de que no esté visible para ver el indicador de que se ha añadido el producto

    let productExists = cart.find(product => product.id === PROD__NAME) // Variable: Comprobamos si el producto está ya añadido en la cesta viendo si encuentra algún nombre igual al del producto que queremos añadir
    if(productExists) { // Si lo está
        productExists.quantity += 1 // Incrementamos en uno la cantidad del producto
    } else { // Sinó
        cart.push({ // Añadimos al array del carrito
            id: PROD__NAME, // El nombre del producto
            price: PROD__PRICE, // El precio del producto
            quantity: 1 // Y asignamos la cantidad a uno
        })
    }
   
    localStorage.setItem('cart', JSON.stringify(cart)) // Guardamos el array en localStorage en formato JSON

    window.updateCart(cart) // Ejecutamos la función que actualiza el carrito con los datos del array
})
