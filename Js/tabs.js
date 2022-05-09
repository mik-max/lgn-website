document.addEventListener('DOMContentLoaded', function (){
     document.getElementById('tab1').addEventListener('click', function(){
          document.getElementById('tab1').classList.add('active__tabs');
          document.getElementById('tab2').classList.remove('active__tabs');
          document.getElementById('tab3').classList.remove('active__tabs');
     });
     document.getElementById('tab2').addEventListener('click', function(){
          document.getElementById('tab1').classList.remove('active__tabs');
          document.getElementById('tab2').classList.add('active__tabs');
          document.getElementById('tab3').classList.remove('active__tabs');
     });

     document.getElementById('tab3').addEventListener('click', function(){
          document.getElementById('tab1').classList.remove('active__tabs');
          document.getElementById('tab2').classList.remove('active__tabs');
          document.getElementById('tab3').classList.add('active__tabs');
     });
     
});