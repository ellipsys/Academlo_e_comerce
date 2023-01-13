const products = [
    {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: './images/featured1.png',
    category: 'hoodies',
    stock: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: './images/featured2.png',
    category: 'shirts',
    stock: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured3.png',
    category: 'sweatshirts',
    stock: 20
  },
  {
    id: 4,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured4.png',
    category: 'sweatshirts',
    stock: 20
  },
  {
    id: 5,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured5.png',
    category: 'sweatshirts',
    stock: 20
  },
  {
    id: 6,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured6.png',
    category: 'sweatshirts',
    stock: 20
  },
  {
    id: 7,
    name: 'Sweatshirts',
    price: 24.00,
    image: './images/featured7.png',
    category: 'sweatshirts',
    stock: 20
  },
  {
    id: 8,
    name: 'Mug',
    price: 24.00,
    image: './images/featured8.png',
    category: 'mugs',
    stock: 20
  },
  {
    id: 9,
    name: 'Mug',
    price: 24.00,
    image: './images/featured9.png',
    category: 'mugs',
    stock: 20
  },
  {
    id: 10,
    name: 'tshirt',
    price: 24.00,
    image: './images/featured10.png',
    category: 'shirts',
    stock: 20
  },
  {
    id: 11,
    name: 'Sticker',
    price: 24.00,
    image: './images/featured11.png',
    category: 'stickers',
    stock: 20
  },
  {
    id: 12,
    name: 'tshirt',
    price: 24.00,
    image: './images/featured12.png',
    category: 'shirts',
    stock: 20
  }
  ,
  {
    id: 13,
    name: 'Other',
    price: 800.00,
    image: './images/featured13.png',
    category: 'other',
    stock: 4
  }
];

let car = JSON.parse(localStorage.getItem("Cart")) || [];
console.log(JSON.parse(localStorage.getItem("Cart")) );
const navbar = document.querySelector(".navBar");



const cartMenu = document.querySelector(".car");
const cartHidden = document.querySelector(".menuCart");

const menuIcons = document.querySelector(".icons")
const iconDarkMode = document.querySelector(".icon_dark_Mode")

const iconCart = document.querySelector(".icon_cart");
const gridMenu = document.querySelector(".menu_Grid");
const tagBody = document.body;

const menuMain = document.querySelector(".menuMain");
const close_cart = document.querySelector(".fa-circle-xmark");

//const menuGrid = document.querySelector(".menuMain");
//const sun = document.querySelector("sun"); menuCart
const ProductContainer = document.getElementById("imagesProducts");
const carContainer = document.getElementById("cartContain");

const counter = document.querySelector(".counter_items");
const checkout = document.querySelector(".itemsShop")
//scroll

const btn_check = document.querySelector(".checkout");
const filtro_producto = document.querySelector(".optionsMenu");
const container_image = document.querySelector(".images");

if(localStorage.getItem("DarkMode")=="true"){
  iconDarkMode.classList.add("fa-sun");
  iconDarkMode.classList.remove("fa-moon");
  tagBody.classList.add("darkMode");
}
window.addEventListener("scroll",function(){
    let scrollY = this.scrollY;
    scrollY !== 0 ? 
    navbar.classList.add("fixedBar") : 
    navbar.classList.remove("fixedBar");
    
});
////////////////////////////////
/*
cartMenu.addEventListener("click",function() {
  cartHidden.classList.toggle("cartHidden");
  menuGrid.classList.remove("menuBig");
})
gridMenu.addEventListener("click",function(e){
    menuGrid.classList.toggle("menuBig");
});
*/
menuIcons.addEventListener("click",function(e) {
  //console.log(e.target.classList.contains("fa-sun"));
  if(e.target.classList.contains("fa-sun")){
    iconDarkMode.classList.remove("fa-sun");
    iconDarkMode.classList.add("fa-moon");
    tagBody.classList.remove("darkMode");
    localStorage.setItem("DarkMode","false");
  }
  else if(e.target.classList.contains("fa-moon")) {
    iconDarkMode.classList.add("fa-sun");
    iconDarkMode.classList.remove("fa-moon");
    tagBody.classList.add("darkMode");
    localStorage.setItem("DarkMode","true");
    
  }
});

menuIcons.addEventListener("click",function (e) {
  if (e.target.classList.contains("fa-table-cells-large")) {
    gridMenu.classList.remove("fa-table-cells-large");
    gridMenu.classList.add("fa-circle-xmark");
    menuMain.classList.add("menuBig");
    iconDarkMode.style.display = "none";
    iconCart.style.display = "none";

    
  }
  else if (e.target.classList.contains("fa-circle-xmark")){
    gridMenu.classList.remove("fa-circle-xmark");
    gridMenu.classList.add("fa-table-cells-large");
    menuMain.classList.remove("menuBig");
    iconDarkMode.style.display = "inline";
    iconCart.style.display = "inline";
  }
});
menuIcons.addEventListener("click",function (e) {
  if(e.target.classList.contains("fa-cart-shopping")){
    cartHidden.classList.toggle("cartHidden")
  }/*
  if (e.target.classList.contains("fa-table-cells-large")) {
    gridMenu.classList.remove("fa-table-cells-large");
    gridMenu.classList.add("fa-circle-xmark");
  }
  else if (e.target.classList.contains("fa-circle-xmark")){
    gridMenu.classList.remove("fa-circle-xmark");
    gridMenu.classList.add("fa-table-cells-large");
  }
  */
});

close_cart.addEventListener("click",function (e) {
  if(e.target.classList.contains("fa-circle-xmark")){
    cartHidden.classList.add("cartHidden")
  }
})

menuMain.addEventListener("click",function (e) {
  if(e.target.classList.contains("hidden_main")){
    menuMain.classList.toggle("menuBig");
    gridMenu.classList.remove("fa-circle-xmark");
    gridMenu.classList.add("fa-table-cells-large");
    iconDarkMode.style.display = "inline";
    iconCart.style.display = "inline";
  }
  
})
function showCar() {
  
  html = ""
  if(car.length==0){
    
    html += `
    <div class="carEmpty">
      <h2>My Cart</h2>
      <img src="./images/empty-cart.png" alt="empty-cart">
      <h2>Your cart is empty</h2>
      <p>You can add items to your cart by clicking on the + button on the product page.</p>
    </div>
    `
    btn_check.style.display = "none";
  }
  else{
    btn_check.style.display = "inline";
    car.forEach((product)=>{
    html += `
    <div class="itemIntoCar">
      <img src=${product.image} class="intoCar">
      <div>
        <h4>$${parseFloat(product.price).toFixed(2)}<p>Items  ${product.count}</p></h4>
        <p>${product.name}</p>
        <div id=${product.id}>
          <button id=${product.id} class="deleteItem buttons_cart">Eliminar</button>
          <button class="add_Item buttons_cart">+</button>
          <button class="minus_Item buttons_cart">-</button>
        </div>  
      </div>
    </div>
    `
  });
  }
  carContainer.innerHTML = html

}
showCar();

function product(array_products) {
  let html = ""
  //console.log(products);
  array_products.forEach(({id,name,price,image,category,stock})=>{
    //console.log(name);
    html+=`
    <div class="image" >
      <div class="photo_product">
        <img src="${image}" alt="${name}">
      </div>
        <button class="addItem" id=${id}>+</button>
        <div class="dataProduct">
          <h3>$${parseFloat(price).toFixed(2)}</h3>
          <p>Stock: ${stock}</p> 
        </div>
        <p class="catProduct">${category}</p>
        
    </div>
    `;
  })
  ProductContainer.innerHTML=html
  //console.log(html);
}

product(products);

function counter_item_cart(cart) {
  let html = ""
  let cuenta = 0;
  let total = 0;
  cart.forEach((e)=>{
      cuenta += e.count
      total +=e.price*e.count
  });
  html += `<div>${cuenta}</div>`
  counter.innerHTML = html
  checkout.innerHTML = `<p>items: ${cuenta}</p>
                        <p>$${total}</p>`
}

ProductContainer.addEventListener("click",function(e){
  if(e.target.classList.contains("addItem")){
    const id = e.target.id;
    let checkRepeat = products.filter(function (e) {
      return e.id == id;
    });
    if(car.includes(checkRepeat[0])){
      if(checkRepeat[0].count == checkRepeat[0].stock){
        Swal.fire({
        width: 300,
        icon: 'error',
        title: 'Oops...',
        text: 'No hay mas stock',
      })
      }
      else{
        checkRepeat[0].count++;

      }
      
    }
    else {
      checkRepeat[0].count = 1;
      car.push(checkRepeat[0]);
      
    }
    localStorage.setItem("Cart",JSON.stringify(car));
    showCar();
    counter_item_cart(car);
    console.log(car);
  
  }
});

carContainer.addEventListener("click",function(e){
  if(e.target.classList.contains("deleteItem")){
    Swal.fire({
    width: 300,
    title: 'Se eliminara este item del carrito',
    text: "Eliminar de todos modos",
    icon: 'warning',
    background : '#EEEEEE',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      const id = Number(e.target.id);
      car = car.filter((e)=>e.id != id)
      //console.log(car);
      showCar();
      counter_item_cart(car);
      localStorage.setItem("Cart",JSON.stringify(car));
    }
  })


    //console.log(e.target.id);
    
  }
});

carContainer.addEventListener("click",function (e) {
  const id = e.target.parentElement.id;
  let adding = products.find(function (e) {
      return e.id == id;
    });

  let chekCount = car.filter(function (e) {
      return e.id == id;
    });

  if(e.target.classList.contains("add_Item")){
    
    if(adding.stock === chekCount[0].count){
      Swal.fire({
        width: 300,
        icon: 'error',
        title: 'Oops...',
        text: 'No hay mas stock',
      })
    }
    else{
      chekCount[0].count++
    }
    console.log(car);
    showCar();
    counter_item_cart(car);
  }
  else if(e.target.classList.contains("minus_Item")){
    if(chekCount[0].count!=1){
        chekCount[0].count--
    }
    console.log(car);
    showCar();
    counter_item_cart(car);
  }
})
btn_check.addEventListener("click",function (e) {
  if(e.target.classList.contains("checkout")){
    let total = 0;
    car.forEach((e)=>{
      total += e.count*e.price
    })
    Swal.fire({
      width: 300,
      title: 'Pago',
      text: `El total es ${total} USD`,
      icon: 'warning',
      background : '#EEEEEE',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!'
    }).then((result) => {
      if (result.isConfirmed) {

        car = [];
        showCar();
        counter_item_cart(car);
        
      }
    })
  }
  
})

filtro_producto.addEventListener("click",function (e) {
  let html = "";
  if(e.target.parentElement.classList.contains("listProduct")){
    if(e.target.parentElement.classList.contains("hoddies")){
      let newArray = products.filter(function (e) {
        return e.category === "hoodies"
      });
      product(newArray);
    }
    else if(e.target.parentElement.classList.contains("shirts")){
      let newArray = products.filter(function (e) {
        return e.category === "shirts"
      });
      product(newArray);
    }
    else if(e.target.parentElement.classList.contains("sweetshirts")){
      let newArray = products.filter(function (e) {
        return e.category === "sweatshirts"
      });
      product(newArray);
    } 
    else if(e.target.parentElement.classList.contains("all")){
      product(products)
    }
    else if(e.target.parentElement.classList.contains("mugs")){
      let newArray = products.filter(function (e) {
        return e.category === "mugs"
      });
      product(newArray);
    } 
    else {
      let newArray = products.filter(function (e) {
        return e.category === "stickers"
      });
      product(newArray);
    }
  }
})
counter_item_cart(car)