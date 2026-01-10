// Constantes
const PROD_BLOCK = document.querySelectorAll('.product-block') // Seleccionamos todos los bloques de productos
const PROD_SECTION = document.querySelectorAll('.product-section') // Seleccionamos todas las secciones de productos

const PRODUCTS__DATA = [ // Estructura preguntada a la IA. Explicado en la memoria.
    {
        sectionName: 'protein',
        products: [
            {
                source: 'media/protein_xsmall.webp', image: 'media/protein_xsmall.jpg', alt: 'Bote de proteína de 250 gramos',
                name: 'Proteína 250g', price: '10,99 €', href: 'protein_xsmall.html' 
            },
            {
                source: 'media/protein_small.webp', image: 'media/protein_small.jpg', alt: 'Bote de proteína de 500 gramos',
                name: 'Proteína 500g', price: '19,99 €', href: 'protein_small.html' 
            },
            {
                source: 'media/protein_medium.webp', image: 'media/protein_medium.jpg', alt: 'Bote de proteína de 1 kilogramo',
                name: 'Proteína 1kg', price: '30,99 €', href: 'protein_medium.html' 
            },
            {
                source: 'media/protein_large.webp', image: 'media/protein_large.jpg', alt: 'Bote de proteína de 2 kilogramos',
                name: 'Proteína 2kg', price: '60,99 €', href: 'protein_large.html' 
            },
            {
                source: 'media/protein_xlarge.webp', image: 'media/protein_xlarge.jpg', alt: 'Bote de proteína de 5 kilogramos',
                name: 'Proteína 5kg', price: '124,99 €', href: 'protein_xlarge.html' 
            }
        ] 
    },
    {
        sectionName: 'creatine',
        products: [
            {
                source: 'media/creatine_xsmall.webp', image: 'media/creatine_xsmall.jpg', alt: 'Bote de creatina de 250 gramos', 
                name: 'Creatina 250g', price: '13,99 €', href: 'creatine_xsmall.html'
            },
            {
                source: 'media/creatine_small.webp', image: 'media/creatine_small.jpg', alt: 'Bote de creatina de 500 gramos',
                name: 'Creatina 500g', price: '23,99 €', href: 'creatine_small.html' 
            },
            {
                source: 'media/creatine_medium.webp', image: 'media/creatine_medium.jpg', alt: 'Bote de creatina de 1 kilogramo',
                name: 'Creatina 1kg', price: '44,99 €', href: 'creatine_medium.html' 
            },
            {
                source: 'media/creatine_large.webp', image: 'media/creatine_large.jpg', alt: 'Bote de creatina de 2 kilogramos',
                name: 'Creatina 2kg', price: '85,99 €', href: 'creatine_large.html' 
            },
            {
                source: 'media/creatine_xlarge.webp', image: 'media/creatine_xlarge.jpg', alt: 'Bote de creatina de 5 kilogramos',
                name: 'Creatina 5kg', price: '174,99 €', href: 'creatine_xlarge.html' 
            }
        ] 
    },
    {
        sectionName: 'merchandising',
        products: [
            {
                source: 'media/cap.webp', image: 'media/cap.jpg', alt: 'Gorra de LoMás Fitness', 
                name: 'Gorra LoMás Fitness', price: '14,99 €', href: 'cap.html'
            },
            {
                source: 'media/hoodie.webp', image: 'media/hoodie.jpg', alt: 'Sudadera de LoMás Fitness',
                name: 'Sudadera LoMás Fitness', price: '49,99 €', href: 'hoodie.html' 
            },
            {
                source: 'media/t-shirt.webp', image: 'media/t-shirt.jpg', alt: 'Shaker de LoMás Fitness',
                name: 'Camiseta LoMás Fitness', price: '24,99 €', href: 't-shirt.html' 
            },
            {
                source: 'media/straps.webp', image: 'media/straps.jpg', alt: 'Straps de LoMás Fitness',
                name: 'Straps LoMás Fitness', price: '29,99 €', href: 'straps.html' 
            },
            {
                source: 'media/shaker.webp', image: 'media/shaker.jpg', alt: 'Shaker de LoMás Fitness',
                name: 'Shaker LoMás Fitness', price: '19,99 €', href: 'shaker.html' 
            },
        ] 
    }
    
]



// Variables

// Funciones

PRODUCTS__DATA.forEach(section => {
    
    const SECTION_NAME = document.querySelector(`.${section.sectionName}`)

    const SLIDER = SECTION_NAME.querySelector('.slider__block')

    section.products.forEach(product => {
        let newProduct = document.createElement('div')
        newProduct.classList.add('slide')
        newProduct.innerHTML = `
        <a href="${product.href}" class="flex-column" title="${product.alt}">
            <picture>
                <source srcset="${product.source}" type="image/webp">
                <img src="${product.image}" loading="lazy" alt="${product.alt}">
            </picture>
            <span class="body slide__name">${product.name}</span>
            <span class="body slide__price">${product.price}</span>
        </a>`

        SLIDER.appendChild(newProduct)
    })
    
    
})

PROD_BLOCK.forEach(section => {
    let sliderCounter = 0;

    const SLIDER = section.querySelector('.slider__block') // Seleccionamos el slider de productos
    const PREV_BTN = section.querySelector('.prevBtn') // Seleccionamos el botón de la flecha izquierda en el slider
    const NEXT_BTN = section.querySelector('.nextBtn') // Seleccionamos el botón de la flecha derecha en el slider
    const SLIDES = SLIDER.querySelectorAll('.slide')
    
    function getSlideWidth() {
        return SLIDES[0].getBoundingClientRect().width;
    } // Generado por IA. Explicado en la memoria.

    function moveSlider() {
        const SLIDER_MOVEMENT = sliderCounter * getSlideWidth()
        SLIDER.style.transform = `translateX(-${SLIDER_MOVEMENT}px)`
    }

    NEXT_BTN.addEventListener('click', () => {
        sliderCounter++ 
        if (sliderCounter >= SLIDES.length) {
            sliderCounter = 0 
        }
        moveSlider()
    });

    PREV_BTN.addEventListener('click', () => {
        sliderCounter--

        if(sliderCounter < 0) {
            sliderCounter = SLIDES.length-2
        }

        moveSlider()
    });
});




