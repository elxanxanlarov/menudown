let section=document.querySelector(".section");
let container=section.querySelector(".container");
let input__container=container.querySelector(".input__container");
let input__password__contianer= input__container.querySelector(".input__password--contianer");
let incon__lock = input__password__contianer.querySelector(".incon__lock");
let input__password = input__password__contianer.querySelector(".input__password");


incon__lock.addEventListener('click',function(e){
    if(input__password.type =='password' ){
        input__password.type ='text' 
    }
    else{input__password.type ='password'}
})