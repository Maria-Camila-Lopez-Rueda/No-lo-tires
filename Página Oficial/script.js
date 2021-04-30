//Boton subir

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//AOS

AOS.init();

/* PRELOADER */

 $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

// Menú
$(document).ready(main);

var contador = 1;

function main () {
    $('.burger').click(function(){
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    // Mostramos y ocultamos submenus

const burger = document.getElementById('burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('show-x');
    });
        
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });

    $("ul").click(function(p){
        
    })
}

let ubicacionPrincipal = window.pageYOffset

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top ="0px";
    }else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})

 /* Typewriter FRASE */

 let app = document.getElementById('typewriter');

 let typewriter = new Typewriter(app, {
     loop: true,
     delay: 75,
 });
 
 typewriter
     .pauseFor(2500)
     .typeString('"Somos los mejores en nuestra profesión"')
     .pauseFor(5000)
     .deleteChars(10)
     .start();


// Slider servicios

const slider =document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next()
});

btnLeft.addEventListener('click', function(){
    Prev()
});

//Slider automático

setInterval(function(){
    Next();
}, 10000);

/* Valores */

var item = $(".valor");

item.hover(function() {
item.not($(this)).addClass('blur');

}, function() {
item.removeClass('blur');
});

/* POP UP VIDEO */

function toggle(){
    let trailer = document.querySelector(".trailer")
    let video = document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
    }   

/* POP UP NOTICIAS */

const images = document.querySelectorAll('.img');
const hoverImages = document.querySelectorAll('.hover-img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const button = document.querySelector('.buttonntc');
const link = document.querySelector('.link');
const linkntc = document.querySelector('.linkntc');
const closeModal = document.querySelector('.xntc');

images.forEach(image =>{
    image.addEventListener('click', () =>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'),image.getAttribute('longDesc'))
    })
})

 const addImage = (srcImage, altImage, longDescImage)=> {
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    imageContainer.longDesc = longDescImage
    copy.classList.toggle('show');
    copy.innerHTML = altImage;
    link.href = longDescImage;
 }

closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    copy.classList.toggle('show');
 })