// Constantes
const PRODUCTS_ARRAY = [
    {
        source: 'media/creatine_small.webp', img: 'media/creatine_small.jpg', desc: 'Bote de creatina de 500g', alt: 'Bote de creatina de 500 gramos'
    },
    {
        source: 'media/protein_medium.webp', img: 'media/protein_medium.jpg', desc: 'Bote de proteina de 1kg', alt: 'Bote de proteina de 1 kilogramo'
    },
    {
        source: 'media/shaker.webp', img: 'media/shaker.jpg', desc: 'Shaker LoMás Fitness', alt: 'Shaker de LoMás Fitness'
    }
]

const ROTATIVE_IMG = document.getElementById('rotativeImage')
const ROTATIVE_SOURCE = document.getElementById('rotativeSource')
const ROTATIVE_DESC = document.getElementById('rotativeDesc')
const TIME = 2500

// Variables
let sourceArray = ['media/creatine_small.webp', 'media/protein_medium.webp', 'media/shaker.webp']
let sourceIndex = 0
let sourceInterval
let imgArray = ['media/creatine_small.jpg', 'media/protein_medium.jpg', 'media/shaker.jpg']
let imgIndex = 0
let imgInterval
let descArray = ['Bote de creatina de 500g', 'Bote de proteina de 1kg', 'Shaker LoMás Fitness']
let descIndex = 0
let descInterval
let altArray = ['Bote de creatina de 500 gramos', 'Bote de proteina de 1 kilogramo', 'Shaker de LoMás Fitness']
let altIndex = 0
let altInterval


// Funciones

function carrouselImage() { 
    ROTATIVE_IMG.style.opacity = '0'
    setTimeout(() => {
        imgIndex++
        if (imgIndex >= imgArray.length) {
            imgIndex = 0
        }
        ROTATIVE_IMG.src = imgArray[imgIndex]
        ROTATIVE_IMG.style.opacity = '1'
    }, 400)
}
function carrouselSource() { 
    setTimeout(() => {
        sourceIndex++
        if (sourceIndex >= sourceArray.length) {
            sourceIndex = 0
        }
        ROTATIVE_SOURCE.srcset = sourceArray[sourceIndex]
    }, 400)
}

function carrouselDesc() {
    ROTATIVE_DESC.style.opacity = '0'
    setTimeout(() => {
        descIndex++
        if (descIndex >= descArray.length) {
            descIndex = 0
        }
        ROTATIVE_DESC.innerText = descArray[descIndex]
        ROTATIVE_DESC.style.opacity = '1'
    }, 400)
}

function carrouselAlt() { 
    setTimeout(() => {
        altIndex++
        if (altIndex >= altArray.length) {
            altIndex = 0
        }
        ROTATIVE_IMG.alt = altArray[altIndex]
    }, 400)
}

function startCarrousel() {
    imgInterval = setInterval(carrouselImage, TIME)
    sourceInterval = setInterval(carrouselSource, TIME)
    descInterval = setInterval(carrouselDesc, TIME)
    altInterval = setInterval(carrouselAlt, TIME)
}

startCarrousel()