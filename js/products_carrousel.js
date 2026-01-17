// Constantes
const PRODUCTS_ARRAY = [ // Array con la información de cada producto del carrousel
    { // Información primer producto
        source: 'media/creatine_small.webp', img: 'media/creatine_small.jpg', desc: 'Bote de creatina de 500g', alt: 'Bote de creatina de 500 gramos'
    },
    { // Información segundo producto
        source: 'media/protein_medium.webp', img: 'media/protein_medium.jpg', desc: 'Bote de proteina de 1kg', alt: 'Bote de proteina de 1 kilogramo'
    },
    { // Información tercer producto
        source: 'media/shaker.webp', img: 'media/shaker.jpg', desc: 'Shaker LoMás Fitness', alt: 'Shaker de LoMás Fitness'
    }
]

const ROTATIVE_IMG = document.getElementById('rotativeImage') // Seleccionamos la imagen que va a cambiar
const ROTATIVE_SOURCE = document.getElementById('rotativeSource') // Seleccionamos el atributo "source" que va a cambiar
const ROTATIVE_DESC = document.getElementById('rotativeDesc') // Seleccionamos el texto que va a cambiar
const TIME = 2500 // Definimos el tiempo que se usará en los "setInterval"

// Variables
let sourceArray = ['media/creatine_small.webp', 'media/protein_medium.webp', 'media/shaker.webp'] // Array de los "source" que irán cambiando
let sourceIndex = 0 // Index de los "source"
let sourceInterval // Declaramos un intervalo que se usará como "setInterval"
let imgArray = ['media/creatine_small.jpg', 'media/protein_medium.jpg', 'media/shaker.jpg'] // Array de las imágenes que irán cambiando
let imgIndex = 0 // Index de las imágenes
let imgInterval // Declaramos un intervalo que se usará como "setInterval"
let descArray = ['Bote de creatina de 500g', 'Bote de proteina de 1kg', 'Shaker LoMás Fitness'] // Array de los textos que irán cambiando
let descIndex = 0 // Index de los textos
let descInterval // Declaramos un intervalo que se usará como "setInterval"
let altArray = ['Bote de creatina de 500 gramos', 'Bote de proteina de 1 kilogramo', 'Shaker de LoMás Fitness'] // Array de los textos alternativos irán cambiando
let altIndex = 0 // Index de los textos alternativos
let altInterval // Declaramos un intervalo que se usará como "setInterval"


// Funciones

function carrouselImage() { // Función que hará que la imagen cambie
    ROTATIVE_IMG.style.opacity = '0' // Antes de cambiar desaparecerá por un breve periodo de tiempo
    setTimeout(() => { // Después de un retraso de 400 milisegundos 
        imgIndex++ // El índice de la imagen incrementa
        if (imgIndex >= imgArray.length) { // Si el índice de la imagen es mayor o igual a la longitud del array de imágenes, es decir, pasa la imagen final
            imgIndex = 0 // EL índice será 0, es decir, vuelve a la primera imagen
        }
        ROTATIVE_IMG.src = imgArray[imgIndex] // El valor del atributo "src" de la imagen pasará a ser el de la posición del índice en el array de imágenes
        ROTATIVE_IMG.style.opacity = '1' // La imagen es totalmente visible
    }, 400)
}
function carrouselSource() { // Función que hará que el atributo "source" cambie
    setTimeout(() => { // Después de un retraso de 400 milisegundos 
        sourceIndex++ // El índice del "source" incrementa
        if (sourceIndex >= sourceArray.length) { // Si el índice del "source" es mayor o igual a la longitud del array de los "source", es decir, pasa el último "source"
            sourceIndex = 0 // El índice será 0, es decir, vuelve al primer "source"
        }
        ROTATIVE_SOURCE.srcset = sourceArray[sourceIndex] // El valor del atributo "source" de la imagen pasará a ser el de la posición del índice en el array de los "source"
    }, 400)
}

function carrouselDesc() { // Función que hará que el texto cambie
    ROTATIVE_DESC.style.opacity = '0' // Antes de cambiar desaparecerá por un breve periodo de tiempo
    setTimeout(() => { // Después de un retraso de 400 milisegundos 
        descIndex++ // El índice del texto incrementa
        if (descIndex >= descArray.length) { // Si el índice del texto es mayor o igual a la longitud del array de los textos, es decir, pasa el último texto
            descIndex = 0 // El índice será 0, es decir, vuelve al primer texto
        }
        ROTATIVE_DESC.innerText = descArray[descIndex] // El texto pasará a ser el de la posición del índice en el array de los textos
        ROTATIVE_DESC.style.opacity = '1' // El texto es totalmente visible
    }, 400)
}

function carrouselAlt() { // Función que hará que el texto alternativo cambie
    setTimeout(() => { // Después de un retraso de 400 milisegundos
        altIndex++ // El índice del texto alternativo incrementa
        if (altIndex >= altArray.length) { // Si el índice del texto alternativo es mayor o igual a la longitud del array de los textos alternativos, es decir, pasa el último texto alternativo
            altIndex = 0 // El índice será 0, es decir, vuelve al primer texto alternativo
        }
        ROTATIVE_IMG.alt = altArray[altIndex] // El texto alternativo pasará a ser el de la posición del índice en el array de los textos alternativos
    }, 400)
}

function startCarrousel() { // Función que inicia el carrousel
    // Inicializamos las variables que teníamos declaradas usando un "setInterval", que cada 2500 milisegundos(tiempo almacenado en la constante TIME), ejecutará las funciones de carrousel
    imgInterval = setInterval(carrouselImage, TIME)
    sourceInterval = setInterval(carrouselSource, TIME)
    descInterval = setInterval(carrouselDesc, TIME)
    altInterval = setInterval(carrouselAlt, TIME)
}

startCarrousel() // Ejecutamos la función que inicia el carrousel