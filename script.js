let menuVisible = false;
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
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    restartAnimation()
    efectoHabilidades();
}
window.onload = function () {
    var banner = document.querySelector('.contenido-banner');
    banner.classList.add('active');
};

// Obtener el elemento de la superposición de luz
const light = document.querySelector('.light');

// Función para reiniciar la animación
function restartAnimation() {
    light.style.animation = 'none';
    void light.offsetWidth; // Truco para reiniciar la animación
    light.style.animation = 'light 2s ease-out forwards';
}

// Detectar el evento de desplazamiento y reiniciar la animación
//window.addEventListener('scroll', restartAnimation);