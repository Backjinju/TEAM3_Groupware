const id_box = document.querySelector('.login_id');
const id = document.querySelector('#login_id_input');
const id_input = /^[a-zA-Z0-9]*$/; 
const id_icon = document.querySelector('.login_id > i');

const pw_box = document.querySelector('.login_pw')
const pw = document.querySelector('#login_pw_input');
const pw_input = /(?=.*\d)+(?=.*[~`!@#$%\^&*()-+=])+(?=.*[a-z])(?=.*[A-Z])+.{1,}$/;

const submit_btn = document.querySelector('.login_submit');

 

submit_btn.addEventListener("click", function(){
    if(id.value.length == 0){
        
        id_icon.style.color = 'red';
    }


})












