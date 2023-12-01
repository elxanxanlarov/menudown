const main=document.querySelector('.main');
const body=document.querySelector('body');
const changeButton=document.querySelector('.dark__change__input');
const searchInput=document.querySelector('.section__input__title');
const locationInput=document.querySelector=('.section__input__location');
console.log(locationInput);
let result=[];



const data=[

    {
    id:1,
    title:'Senior Software Engineer',
    img:"./assets/images/main__content1.svg",
    time:'5h ago',
    workType:'Full Time',
    company:'Scoot',
    location:'United Kingdom'

    },
    {
    id:2,
    title:'Haskell and PureScript Dev',
    img:"./assets/images/content2.svg",
    time:'20h ago',
    workType:'Part Time',
    company:'Blogr',
    location:'United States'

    },
    {
    id:3,
    title:'Midlevel Back End Engineer ',
    img:"./assets/images/content3.svg",
    time:'1d ago',
    workType:'Part Time',
    company:'Vector',
    location:'Russia'

    },
    {
    id:4,
    title:'Senior Application Engineer',
    img:"./assets/images/content4.svg",
    time:'2d ago',
    workType:'Full Time',
    company:'Office Lite',
    location:'Japan'

    },
    {
    id:5,
    title:' Remote DevOps Engineer',
    img:"./assets/images/content5.svg",
    time:'2d ago',
    workType:'Part Time',
    company:'Pod',
    location:'Thailand'

    },
    {
    id:6,
    title:'Desktop Support Manager',
    img:"./assets/images/content6.svg",
    time:'4d ago',
    workType:'Part Time',
    company:'Creative',
    location:'Germany'

    },
    {
      id:7,
      title:'iOS Engineer',
      img:"./assets/images/content7.svg",
      time:'1w ago',
      workType:'Full Time',
      company:'Pomodoro',
      location:'United States'
  
      },
    {
    id:8,
    title:'Senior EJB Developer',
    img:"./assets/images/content8.svg",
    time:'1w ago',
    workType:'Full Time',
    company:'Maker',
    location:'United Kingdom'

    },
    {
    id:9,
    title:'Senior Frontend Developer',
    img:"./assets/images/content9.svg",
    time:'1w ago',
    workType:'Part Time',
    company:'Coffeeroasters',
    location:'Singapore'

    },
    {
    id:10,
    title:'App & Website Designer',
    img:"./assets/images/content10.svg",
    time:'2w ago',
    workType:'Freelance',
    company:'Mastercraft',
    location:'United States'

    },
    {
    id:11,
    title:'Fullstack Developer',
    img:"./assets/images/content11.svg",
    time:'1mo ago',
    workType:'Part Time',
    company:'Crowdfund',
    location:'New Zealand'

    },
    {
    id:12,
    title:'Technical Lead Engineer',
    img:"./assets/images/content12.svg",
    time:'4d ago',
    workType:'Part Time',
    company:'Typemaster',
    location:'United Kingdom'

    },
 



];
function getData(a){
    let dataHtml='';
    a.map((item)=>{
    dataHtml +=` 
    <div class="main__content__box">
    <div class="main__content1__img__box">
    <img src="${item.img}" 
    alt="" class="main__content1__img">
  </div>
  <div class="main__content__times__box">
    <p class="main__content__times__first">${item.time}</p>
    <span>.</span>
    <p class="main__content__times__second">${item.workType}</p>
  </div>
  <div class="main__content__name__box">
      <a href="./devjops_info.html?id=${item.id}" 
      target="_blank"  class="main__content__name">
      ${item.title}
    </a >
    </div>
    <p class="main__content__name__info">${item.company}</p>
    <p class="main__content__lacation">${item.location}</p>
    </div>`

  })
  main.innerHTML=dataHtml;
}
getData(data)
//! Dark Change
changeButton.addEventListener('click',(e)=>{
if(e.target.checked){
  localStorage.setItem('changeButton','dark')
body.classList.add('dark')
}else{
  localStorage.setItem('changeButton','light')
  body.classList.remove('dark')
}

})


window.onload=function(){
  let pageItem=localStorage.getItem('changeButton');
  console.log(pageItem);
  if(pageItem=='dark'){
    body.classList.add('dark')
    changeButton.checked=true;
  }else{
    body.classList.remove('dark')
  
  }
}


//! search side


function search(searchTerm,key,data){
  searchTerm=searchTerm.toLowerCase();
  const filteredData=data.filter(item=>{
    const currentItemValue=item[key].toLowerCase();
    return currentItemValue.includes(searchTerm)
  })
  return filteredData;
}
searchInput.addEventListener('keyup',(e)=>{
  result=search(e.target.value,'title',data);
  getData(result)
});

locationInput.addEventListener('keyup',(e)=>{
console.log(e.target.value)
})


