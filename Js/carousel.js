let slideIndex = 1;

function matchLargeScreen(x) {
     if (x.matches) { // If media query matches
          showSlides(slideIndex);
     }
   }

let smallDevice = window.matchMedia("(max-width: 767px)");
let largeDevice = window.matchMedia("(min-width: 912px) and (max-width: 1500px)");
largeDevice.addEventListener('change', matchLargeScreen);
document.addEventListener('DOMContentLoaded', function(){
     matchLargeScreen(largeDevice) // Call listener function at run time
});
function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "" );
     }
     slides[slideIndex-1].style.display = "flex";
     //dots[slideIndex-1].className += " active";
}
// function showSecondSlides(n) {
//      let i;
//      let slides = document.getElementsByClassName("mentor");
//      let dots = document.getElementsByClassName("dot");
//      if (n > slides.length) {slideIndex = 1}
//      if (n < 1) {slideIndex = slides.length}
//      for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//      }
//      for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace(" active", "" );
//      }
//      slides[slideIndex-1].style.display = "flex";
//      //dots[slideIndex-1].className += " active";
// }
// // Next/previous controls
// function plusSlides(n) {
//      showSlides(slideIndex += n);

//    }
function plusSlides(n){
     showSlides(slideIndex +=n);
}
   
   // Thumbnail image controls
   function currentSlide(n) {
     showSlides(slideIndex = n);
   }