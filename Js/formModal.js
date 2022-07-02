document.addEventListener('DOMContentLoaded', () => {
     document.querySelectorAll('.register').forEach(element => {
          element.addEventListener('click', () => {
               document.getElementById('dropDownModal').classList.toggle('hide');
          })
     })
     document.getElementById('closeModalIcon').addEventListener('click', function(){
          document.getElementById('dropDownModal').classList.toggle('hide')
     })
})