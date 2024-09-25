const cartCount = document.querySelector("#cartCount");


let Base_Url = 'https://foodish-api.com/images';
let dishes = ['burger', 'biryani', 'dosa', 'pasta', 'pizza', 'samosa', 'dessert'];


const allproducts = document.querySelector(".allproducts");

function newProducts(imgSrc, mainTitle, newPrice){
    let productsData = document.createElement("div");
    productsData.classList.add("productsData");
    
    let products = document.createElement("div");
    products.classList.add("products", "orders", "order-item");
    let btn = document.createElement("button");
    btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
    btn.setAttribute("id", "addtocart");
    

    let img = document.createElement("img");
    img.src = imgSrc;
    img.setAttribute("loading", "lazy");
    
    allproducts.appendChild(productsData);
    productsData.append(products, btn);

    let productDetails = document.createElement("div");
    productDetails.classList.add("productDetails");
    products.append(img, productDetails);

    let ttitle = document.createElement("h3");
    ttitle.classList.add("ttitle");
    ttitle.style.textAlign = "left";

    let productTitle = mainTitle;
    let newTitle = productTitle.charAt(0).toUpperCase() + productTitle.substring(1);

    ttitle.textContent = newTitle;

    let head4 = document.createElement("h4");
    head4.innerHTML = `<b>$</b><span class="price" style="font-weight: bold;">${newPrice}</span> | <span class="discountPrice">$${newPrice + 7}</span>`;

    productDetails.append(ttitle, head4);
    const addtocart = document.querySelectorAll("#addtocart");
    let cart = 0;
    addtocart.forEach(function(addtolist){
        addtolist.addEventListener("click", function(){
            cart++;
            cartCount.textContent = cart;
        });
    });

    const orders = document.querySelectorAll(".orders");

orders.forEach(function(order){
    order.addEventListener("click", function(event){
        const orderItem = event.target.closest(".order-item");
        if(orderItem){
            var productImg = orderItem.querySelector('img').src;
            var productTitle = orderItem.querySelector('.ttitle').textContent;
            var productPrice = orderItem.querySelector('.price').textContent;
            var productSubtitle;
            if(orderItem.querySelector('.subtitle')){
                productSubtitle = orderItem.querySelector('.subtitle').textContent;
            }else{
                productSubtitle = "Brand name not registered yet..";
            }
            const params = new URLSearchParams({
                productImg : productImg,
                productTitle : productTitle,
                productPrice : productPrice,
                productSubtitle : productSubtitle
            });
            window.location.href = `product.html?${params.toString()}`;
        }else{
            console.log("No Item found");
        }
    })
});
}

let loadMore = 31;
const addMore = document.querySelector("#loadMore");

const getData = async ()=>{
    for(let i = 0; i < loadMore; i++){
        let randomIndex = Math.floor(Math.random()*7);
        let randomImg = Math.floor(Math.random()*22)+1;
        let randomPrice = Math.floor(Math.random()*50) + 10;
        const response = await fetch(`${Base_Url}/${dishes[randomIndex]}/${dishes[randomIndex]}${randomImg}.jpg`);
        if(response.ok){
            newProducts(response.url, dishes[randomIndex], randomPrice);
        }else{
            console.log("Error while fetching data");
        }
    }
}

getData();
addMore.addEventListener("click", function(){
    loadMore =  10;
    getData();
});

