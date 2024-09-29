// ini bagian header
let slideIndex = 0;
showSlides();

function chooseSlide(x) {
    slideIndex = x;
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {
    slideIndex = 1
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}
//ini bagian header

var modal = document.getElementsByClassName("aboutUsModal")[0];
var close = document.getElementsByClassName("closebtn")[0];
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
//

let slideIndexP = 1;
showSlidesP(slideIndexP);

function plusSlidesP(n) {
  showSlidesP(slideIndexP += n);
}

function currentSlideP(n) {
  showSlidesP(slideIndexP = n);
}

function showSlidesP(n) {
  let i;
  let slidesP = document.getElementsByClassName("mySlidesProduct");
  let dots = document.getElementsByClassName("demo");
  if (n > slidesP.length) {slideIndexP = 1}
  if (n < 1) {slideIndexP = slidesP.length}
  for (i = 0; i < slidesP.length; i++) {
    slidesP[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesP[slideIndexP-1].style.display = "block";
  dots[slideIndexP-1].className += " active";
}

var modalp = document.getElementsByClassName("productsModal")[0];
var closep = document.getElementsByClassName("closebtnp")[0];
function openModalp() {
    modalp.style.display = "block";
}
function closeModalp() {
    modalp.style.display = "none";
}

let slideIndexP2 = 1;
showSlidesP2(slideIndexP);

// Next/previous controls
function plusSlides2(n) {
  showSlidesP2(slideIndexP2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlidesP2(slideIndexP2 = n);
}

function showSlidesP2(n) {
  let i;
  let slidesP = document.getElementsByClassName("mySlidesProduct2");
  let dots = document.getElementsByClassName("demo2");
//   let captionText = document.getElementById("caption");
  if (n > slidesP.length) {slideIndexP2 = 1}
  if (n < 1) {slideIndexP2 = slidesP2.length}
  for (i = 0; i < slidesP.length; i++) {
    slidesP[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesP[slideIndexP2-1].style.display = "block";
  dots[slideIndexP2-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
}

var modalp2 = document.getElementsByClassName("productsModal2")[0];
var closep2 = document.getElementsByClassName("closebtnp2")[0];
function openModalp2() {
    modalp2.style.display = "block";
}
function closeModalp2() {
    modalp2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modalp2) {
      modalp2.style.display = "none";
    } else if(event.target == modalp) {
      modalp.style.display = "none";
    } else if(event.target == modal) {
      modal.style.display = "none";
    }
}

// GALLERY
let slideIndexG = 1;
showSlidesG(slideIndexG);

function plusSlides(n) {
  showSlidesG(slideIndexG += n);
}

function currentSlide(n) {
  showSlidesG(slideIndexG = n);
}

function showSlidesG(n) {
  let i;
  let slidesG = document.getElementsByClassName("mySlidesGallery");
  let dots = document.getElementsByClassName("demog");
  if (n > slidesG.length) {slideIndexG = 1}
  if (n < 1) {slideIndexG = slidesG.length}
  for (i = 0; i < slidesG.length; i++) {
    slidesG[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesG[slideIndexG-1].style.display = "block";
  dots[slideIndexG-1].className += " active";
}

function openWa() {
  window.open("https://wa.me/+6285103300100")
}

function openEmail() {
  window.open("primagondola@yahoo.com")
}

function openLoc() {
  window.open("https://goo.gl/maps/4db54FYMUsMqGi9x5");
}

function scrollHome() {
  window.scrollTo(0, 100);
}