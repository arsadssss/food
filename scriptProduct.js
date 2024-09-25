var productName = document.querySelectorAll(".productName");
var brandName = document.querySelector("#brandName");
var productImg = document.querySelector(".productImg");
var finalPrice = document.querySelector(".finalPrice");
var discountPrice = document.querySelector(".discountPrice");

const params = new URLSearchParams(window.location.search);

productImg.src = params.get('productImg');
brandName.textContent = params.get('productSubtitle');
productName.forEach((words)=>{
    words.textContent = params.get('productTitle');
})
finalPrice.textContent = params.get('productPrice');
newPrice = params.get('productPrice');
discountPrice.textContent = newPrice + 7;

var quantity = document.querySelector("#quantity");
var sub = document.querySelector("#sub");
var add = document.querySelector("#add");
let quan = 1;

add.addEventListener("click", function(){
    quan++;
    quantity.textContent = quan;
    finalPrice.textContent = quan*Number(newPrice);
    if(quan > 2){
        document.querySelector(".offerPrice").style.textDecoration = "line-through";
    }else{
        document.querySelector(".offerPrice").style.textDecoration = "none";
    }
});
    sub.addEventListener("click", function(){
        if(quan > 1){
            quan--;
            finalPrice.textContent = (Number(finalPrice.textContent) - newPrice).toFixed(2);
            quantity.textContent = quan;
        }else{
            quan = 1;
        }
    });

    const cartCount = document.querySelector("#cartCount");
    const addToCart = document.querySelector("#addToCart");
    
    addToCart.addEventListener("click", function(){
        cartCount.textContent = quan;
    });