
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
});