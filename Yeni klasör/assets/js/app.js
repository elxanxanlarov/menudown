let cards = document.querySelector(".cards");
let cardItem = document.querySelector(".card-item"),
    category__item1=document.querySelector(".category__item1"),
    category__item=document.querySelectorAll(".category__item"),
    category__items=document.querySelector(".category__items")

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      // let category=element.category,
      // title=element.title,
      // price=element.price,
      // description=element.description,
      // img=element.image
      let { category, title, price, description, image } = element;
      // console.log(element);
      cards.innerHTML +=  `
      <div class="card-item">
      <div class="card__img">
        <img src="${image}" alt="Alt" />
      </div>
      <div class="card__content">
        <p>${title}</p>
        <div class="card__content-footer">
          <span class="card__content-footer-price">${price}</span>
          <span class="card__content-footer-icon"
            ><i class="fa-solid fa-bag-shopping"></i
          ></span>
        </div>
      </div>
    </div>
      `
 
   
    });

  });

  
    category__item.forEach(option=>{
      option.addEventListener("click",function(){
        // console.log(option.innerHTML);
        
      })
      }) 


    

 




