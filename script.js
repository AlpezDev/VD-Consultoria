let menuVisible = false;
var bandera = true;
var distancia_skills;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

var boton = document.getElementById('descargar');

boton.onclick = function () {
    var archivo = 'docs/Confecciones.pdf';
    var enlace = document.createElement('a');

    enlace.href = archivo;
    enlace.target = '_blank';

    document.body.appendChild(enlace);

    enlace.click();

    document.body.removeChild(enlace);
};

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
var cont = 0;
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300 && distancia_skills <= 1300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[0].classList.remove("javascript2");

        habilidades[1].classList.add("htmlcss");
        habilidades[1].classList.remove("htmlcss2");

        habilidades[2].classList.add("photoshop");
        habilidades[2].classList.remove("photoshop2");

        habilidades[3].classList.add("wordpress");
        habilidades[3].classList.remove("wordpress2");

        habilidades[4].classList.add("drupal");
        habilidades[4].classList.remove("drupal2");

        habilidades[5].classList.add("comunicacion");
        habilidades[5].classList.remove("comunicacion2");

        habilidades[6].classList.add("trabajo");
        habilidades[6].classList.remove("trabajo2");

        habilidades[7].classList.add("creatividad");
        habilidades[7].classList.remove("creatividad2");

        habilidades[8].classList.add("dedicacion");
        habilidades[8].classList.remove("dedicacion2");

        habilidades[9].classList.add("proyect");
        habilidades[9].classList.remove("proyect2");
        //distancia_skills = 0;
    } else if (distancia_skills < 300 || distancia_skills > 1300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript2");
        habilidades[0].classList.remove("javascript");

        habilidades[1].classList.add("htmlcss2");
        habilidades[1].classList.remove("htmlcss");

        habilidades[2].classList.add("photoshop2");
        habilidades[2].classList.remove("photoshop");

        habilidades[3].classList.add("wordpress2");
        habilidades[3].classList.remove("wordpress");

        habilidades[4].classList.add("drupal2");
        habilidades[4].classList.remove("drupal");

        habilidades[5].classList.add("comunicacion2");
        habilidades[5].classList.remove("comunicacion");

        habilidades[6].classList.add("trabajo2");
        habilidades[6].classList.remove("trabajo");

        habilidades[7].classList.add("creatividad2");
        habilidades[7].classList.remove("creatividad");

        habilidades[8].classList.add("dedicacion2");
        habilidades[8].classList.remove("dedicacion");

        habilidades[9].classList.add("proyect2");
        habilidades[9].classList.remove("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {

    efectoHabilidades();
}
window.onload = function () {
    var banner = document.querySelector('.contenido-banner');
    banner.classList.add('active');
};


/*---CARDS----*/

const toggleCards = document.querySelector('.toggle-cards');
const cardContainer = document.querySelector('.card-container');

toggleCards.addEventListener('click', () => {
    cardContainer.classList.toggle('show');
});


/** -----------------CARD PRUEBA ------------------------------ */
(function () {

    var slideContainer = $('.slide-container');

    slideContainer.slick();

    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);

    // On before slide change
    slideContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.clash-card img').fadeOut(1000);
    });

    // On after slide change
    slideContainer.on('afterChange', function (event, slick, currentSlide) {
        $('.slick-active').find('.clash-card img').fadeIn(200);
    });

})();
