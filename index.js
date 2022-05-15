let buttons = document.querySelectorAll('.ratingButton');
 
 

 
for (let i=0; i<buttons.length; ++i) {
    buttons[i].addEventListener('click', function(){
        buttons[i].style.backgroundColor = '#7C8798';
        buttons[i].style.color="#FFFFFF"
       let val = document.getElementById('lname');
       val.value = this.name
    });
}
