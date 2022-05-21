$(window).on('load', function(e){
     let floatOffSet = $('.float-btn').offset().top;
     $(window).scroll(function(){
          let scroll = $(window).scrollTop();
          if(scroll > 20){
               $('.float-btn').css({
                    'display': 'block'
               });
          }
          else{
               $('.float-btn').css({
                    'display': 'none'
               });
          }
     });
     // $(document).ready(function myFunction(){
     //      if (x.matches) { // If media query matches
     //           document.getElementById('demo').carousel('dispose')
     //           console.log('it matches')
     //      } else {
     //           console.log('it does not match')
     //      }
     // })
     function myFunction(x) {
          if (x.matches) { // If media query matches
               $('#demo').carousel('dispose')
               document.getElementById('demo').removeAttribute('data-ride')
               document.getElementById('demo').classList.remove('carousel')
               document.getElementById('carouselPrev'). removeAttribute('data-slide')
               document.getElementById('carouselNext'). removeAttribute('data-slide')
               const mentors = document.getElementsByClassName('mentor');
               
               for (var i = 0; i < mentors.length; i++) {
                    mentors[i].removeAttribute('data-aos')
               }
   
               // console.log('it matches')
          } else {
               // console.log('it does not match')
          }
     }
        
        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x) // Call listener function at run time
        x.addEventListener('change', myFunction) // Attach listener function on state changes

}




);
