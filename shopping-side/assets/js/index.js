



fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then((data)=>{
    data.forEach(element => {
        // let category=element.category,
        // title=element.title,
        // price=element.price,
        // description=element.description,
        // img=element.image
        let {category,title,price,description,image}=element
        console.log(element);
    });

})


