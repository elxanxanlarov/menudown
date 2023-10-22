let category=document.querySelector('.category');
let head=category.querySelector('.head');
let headText=head.querySelector('.head-text')
let options=category.querySelector('.options');
let option=options.querySelectorAll('.option');

head.addEventListener('click',function(e){
    category.classList.toggle('active')
});


option.forEach((option1)=>{
    option1.addEventListener('click',function(e){
        headText.innerText=e.target.textContent
        console.log(e.target.textContent);
    })
})
    
