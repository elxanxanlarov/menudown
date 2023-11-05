const head__from=document.querySelector('.head__from');
const head__input__child=head__from.querySelector('.head__input--child');


const new__list__container=document.querySelector('.new__list__container')

const last__list=new__list__container.querySelector('.last__list')
const last__list__first__num=last__list.querySelector('.last__list__first--num')

const new__list=document.querySelector('.new__list')
let listItems=[];
let count=0;
head__from.addEventListener('submit', function(event){
    event.preventDefault();
    count++;
    let listItem=create( head__input__child.value,count);
    new__list__container.insertAdjacentHTML('afterbegin',listItem);
    listItem.value="";
    listItems.push({id:count,listItem})
    last__list__first__num.textContent=count


    if(count!=0){
      last__list.classList.remove('hidden')
    }
})

function getElment(element){
  if(!(element.firstElementChild.classList.contains('checked'))){
    element.firstElementChild.classList.add('checked');

        let img=document.createElement('img');
        img.src='./assets/images/select-img.svg';
        img.alt='checked';
        element.firstElementChild.appendChild(img);
      }else{
        element.firstElementChild.classList.remove('checked');
  element.firstElementChild.firstElementChild.remove();
  }
}



function create(inputvalue, todoId){
  return `  <li onclick="getElment(this)" class="new__list id=${todoId}">
  <p class="new__list--text">
  <p class="circle"></p>
    ${inputvalue}
  </p>
</li>`
}
