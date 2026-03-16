//  color barra
const navbar = document.querySelector('nav'); 
const body = document.body; // 

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// nav 
const secciones = document.querySelector("#secciones");
const abrir = document.querySelector("#open"); 
const cerrar = document.querySelector("#close");

if (abrir && cerrar) {
    abrir.addEventListener("click", () => {
        secciones.classList.add("visible");

        navbar.classList.add("menu-open"); 
        body.classList.add("no-scroll");
    });

    cerrar.addEventListener("click", () => {
        secciones.classList.remove("visible");
        navbar.classList.remove("menu-open");
        body.classList.remove("no-scroll");
    });
}


let currentSectionIndex = 0;
const steps = document.querySelectorAll('.step');
const container = document.getElementById('main-container');
let isScrolling = false; 

function goToSection(index) {

    if (index < 0 || index >= steps.length) return;
    
    currentSectionIndex = index;

    container.style.transform = `translateY(-${currentSectionIndex * 100}vh)`;
    
    steps.forEach(step => step.classList.remove('active'));
    steps[currentSectionIndex].classList.add('active');
    

    if (index > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }


    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 1000); 
}


window.addEventListener('wheel', (e) => {
    if (isScrolling) return; 

    if (e.deltaY > 0) {

        goToSection(currentSectionIndex + 1);
    } else {
        goToSection(currentSectionIndex - 1);
    }
});
