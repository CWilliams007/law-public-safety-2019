"use strict";

window.addEventListener('load', sSInit);

function sSInit() {
	var imgs = ["<div class='numbertext'>1 / 6</div> \
    <img src='../img/Security.jpg' style='width:100%'> \
    ", "<div class='numbertext'>2 / 6</div> \
    <img src='../img/Police.jpg' style='width:100%'> \
    ", "<div class='numbertext'>3 / 6</div> \
    <img src='../img/gallery.jpg' style='width:100%'> \
    ", "<div class='numbertext'>4 / 6</div> \
    <img src='../gallery1.jpg' style='width:100%'> \
    ","<div class='numbertext'>5 / 6</div> \
    <img src='../gallery2.jpg' style='width:100%'> \
    ", "<div class='numbertext'>6 / 6</div> \
    <img src='../gallery3.jpg' style='width:100%'> \
    "];
    var mSF = document.getElementsByClassName('mySlides');
    console.log(imgs);
    console.log(mSF);
    for (var i = 0; i < mSF.length; i++) {
    	mSF[i].innerHTML = imgs[i];
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var i = 0;
setInterval( function() {
  i++
  currentSlide(i);

  if (i == 6) {
    i = 0;
  }
}, 4000);


