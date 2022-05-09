document.addEventListener('DOMContentLoaded', function(){
     document.getElementById('bars').addEventListener('click', function(){
          document.getElementById('dropDown').classList.toggle('hide')
          
     });

     document.getElementById('closeIcon').addEventListener('click', function(){
          document.getElementById('dropDown').classList.toggle('hide')
     })

     document.getElementById('aboutUs').addEventListener('click', function(){
          document.getElementById('dropdownMenu__jumbotron').style.backgroundImage = "url('./images/dropdown__about.png')"
          document.getElementById('aboutSubmenu').classList.remove('hide');
          document.getElementById('programSubmenu').classList.add('hide');
          document.getElementById('dropdownBars').classList.remove('hide');
     })
     document.getElementById('programs').addEventListener('click', function(){
          document.getElementById('dropdownMenu__jumbotron').style.backgroundImage = "url('./images/dropdown__program.png')"
          document.getElementById('aboutSubmenu').classList.add('hide');
          document.getElementById('programSubmenu').classList.remove('hide');
          document.getElementById('dropdownBars').classList.remove('hide');
     })
     document.getElementById('ourInitiatives').addEventListener('click', function(){
          document.getElementById('dropdownMenu__jumbotron').classList.toggle('hide')
          document.getElementById('aboutSubmenu').classList.add('hide');
          document.getElementById('programSubmenu').classList.add('hide');
          // document.getElementById('dropdownBars').classList.remove('hide');
     })
     document.getElementById('contactUs').addEventListener('click', function(){
          document.getElementById('dropdownMenu__jumbotron').classList.toggle('hide')
          document.getElementById('aboutSubmenu').classList.add('hide');
          document.getElementById('programSubmenu').classList.add('hide');
          // document.getElementById('dropdownBars').classList.remove('hide');
     })
     document.getElementById('contribute').addEventListener('click', function(){
          document.getElementById('dropdownMenu__jumbotron').classList.toggle('hide')
          document.getElementById('aboutSubmenu').classList.add('hide');
          document.getElementById('programSubmenu').classList.add('hide');
          // document.getElementById('dropdownBars').classList.remove('hide');
     })
});