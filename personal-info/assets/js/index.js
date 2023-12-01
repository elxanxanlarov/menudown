let form=document.querySelector(".step1__form"),
    nameInput=form.querySelector(".name__input"),
    step1NameError=form.querySelector(".step1__name__error"),
    emailInput=form.querySelector(".email__input"),
    numberInput=form.querySelector(".number__input"),
    step1EmailError=form.querySelector(".step1__email__error"),
    step1NumberError=form.querySelector(".step1__number__error");
    //! step1 
    let stepInfo=document.querySelectorAll('.infostep'),
    step1Cricle=document.querySelectorAll('.step__circle'),
    step1False=false;
    //! step2
    let step2ChangeButton=document.querySelector('.step2__change__button__box')

//! Step 1 start
form.addEventListener("submit", function(e){
    e.preventDefault()
    //! Error input 
    let nameInputRegex=/^[a-zA-Z]+ [a-zA-z]+$/
    if(nameInputRegex.test(nameInput.value)){
        step1False=true;
        step1NameError.textContent="";
    }else{
        step1NameError.textContent="Name is not true "  
        step1False=false;

    }
    let emailInputRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailInputRegex.test(emailInput.value)){
        step1EmailError.textContent="";
        step1False=true;

    }else{
        step1EmailError.textContent="Name is not true "  
        step1False=false;


    }
    let numberInputRegex=/(\+\d{1})(\d{3})(\d{3})(\d{3})/
    if(nameInputRegex.test(nameInput.value)){
        step1NumberError.textContent="";
        step1False=true;

    }else{
        step1NumberError.textContent="Name is not true "  
        step1False=false;


    }
//! nextstep1
if(step1False=true){
    step1Cricle[1].classList.add('circle__bg__check')

    stepInfo[0].classList.add('dp__none')
    stepInfo[1].classList.remove('dp__none')
}

})

//! Step 1 end
//! Step 2 start
step2ChangeButton.addEventListener('click', function(e){
    console.log(e);
})
//! Step 2 end
