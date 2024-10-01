const secs = document.querySelector("#secs");
const mins = document.querySelector("#mins");
const hours = document.querySelector("#hours");

let second = 59;
let minute = 59;
let hour = 11;

let timer = setInterval(function(){
    second--;
    // console.log("Hello")
    if(second <= 0){
        minute--;
        second = 59;
    }
    if(minute <= 0){
        minute = 59;
        hour --;
    }
    secs.textContent = second;
    mins.textContent = minute;
    hours.textContent = hour;
},1000);

if(hour == 0){
        clearInterval(timer);
}

const cartCount = document.querySelector("#cartCount");
const addtocart = document.querySelector("#addtocart");
const wishListBtn = document.querySelector(".wishListBTN");

let cart = 0;
function cartNumber(){
    cart++;
    cartCount.textContent = cart;
}

addtocart.addEventListener("click", function(){
    cartNumber();
    addWishlist();
});

const orders = document.querySelectorAll(".orders");

const wishList = document.querySelector(".wishList");

function addWishlist(){
    const wishListItems = document.createElement("div");
    const wishListItemsC = document.createElement("div");
    const wishTitles = document.createElement("div");
    const btn = document.createElement("button");
    const img = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("p");
    wishListItems.classList.add("wishListItems");
    wishListItemsC.classList.add("wishListItemsC");
    wishTitles.classList.add("wishTitles");
    img.style.width = "35px";
    img.src = "images/burger.png";
    title.textContent = "Product Titles";
    price.innerHTML = `Price <span style="color: #05ff05;">$320</span>`
    wishList.appendChild(wishListItems);
    wishListItems.append(wishListItemsC, btn);
    wishListItemsC.append(img, wishTitles);
    wishTitles.append(title, price);
}
wishListBtn.addEventListener("click", function(){
    wishList.classList.toggle("wActive");
})

orders.forEach((orders)=>{
    orders.addEventListener("click", function(event){
        const orderItem = event.target.closest('.order-items');
        if(orderItem){
            var productImg = orderItem.querySelector('img').src;
            var productTitle = orderItem.querySelector('.title').textContent || "";
            var productSubtitle;
            // var productSubtitle = orderItem.querySelector('.subtitle').textContent || "";
            if(orderItem.querySelector('.subtitle')){
                productSubtitle = orderItem.querySelector('.subtitle').textContent;
            }else{
                productSubtitle = "Brand name not registered yet..";
            }
            var productPrice = orderItem.querySelector('.price').textContent || "";
            
            const params = new URLSearchParams({
                productImg : productImg,
                productSubtitle : productSubtitle,
                productTitle : productTitle,
                productPrice : productPrice
            });
            window.location.href = `product.html?${params.toString()}`;
        }else{
            console.log("No Item found");
        }
    });
});

const subsBTN = document.querySelector("#subsBTN");
const signUPText = document.querySelector("#signUPText");
const signUPInfo = document.querySelector("#signUPInfo");

subsBTN.addEventListener("click", function(){
    const emlINPT = document.querySelector("#emlINPT").value;
    signUPText.textContent = "Thank You For Subscribe";
    signUPInfo.innerHTML = `We'll reach out to you soon <span style='color:red;'> ${emlINPT} </span>`;
});