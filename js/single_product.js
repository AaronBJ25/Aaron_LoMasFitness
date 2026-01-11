// Constantes
const CART_BTN = document.getElementById('cartBtn')
const ADD_PRODUCT_BTN = document.getElementById('addProductBtn')
const HEADER = document.querySelector('.header')

// Variables
let counter = 1
let rotation

// Funciones

ADD_PRODUCT_BTN.addEventListener('click', () => {
    rotation = counter * 360
    HEADER.scrollIntoView()
    CART_BTN.style.transition = '1s'
    CART_BTN.style.rotate = `${rotation}deg`
    counter++
})