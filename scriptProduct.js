var productName = document.querySelectorAll(".productName");
var brandName = document.querySelector("#brandName");
var productImg = document.querySelector(".productImg");
var finalPrice = document.querySelector(".finalPrice");
var finalPriceID = document.querySelector(".finalPrice");
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

var fPrice;

add.addEventListener("click", function(){
    quan++;
    quantity.textContent = quan;
    finalPrice.textContent = quan*Number(newPrice);
    fPrice = quan*Number(newPrice);
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
            fPrice = (Number(finalPrice.textContent) - newPrice).toFixed(2);
            quantity.textContent = quan;
        }else{
            quan = 1;
        }
    });

    const cartCount = document.querySelector("#cartCount");
    const addToCart = document.querySelector(".add2Cart");
    
    addToCart.addEventListener("click", function(){
        cartCount.textContent = quan;
        const productName = params.get('productTitle');
        const imgSRC = params.get('productImg');
        addWishlist(imgSRC, productName, fPrice);
    });

const wishList = document.querySelector(".wishList");
function addWishlist(imgSrc, productitle, Pprice){
    const wishListItems = document.createElement("div");
    const wishListItemsC = document.createElement("div");
    const wishTitles = document.createElement("div");
    const btn = document.createElement("button");
    const img = document.createElement("img");
    const title = document.createElement("h4");
    const quantity = document.createElement("h3");
    const price = document.createElement("p");
    wishListItems.classList.add("wishListItems");
    wishListItemsC.classList.add("wishListItemsC");
    wishTitles.classList.add("wishTitles");
    img.style.width = "35px";
    img.src = imgSrc;
    btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    btn.setAttribute("class", "delbtn")
    title.textContent = productitle;
    quantity.classList.add("quantity");
    quantity.textContent = quan;
    price.innerHTML = `Price <span style="color: #05ff05;">$${Pprice !== undefined ? Pprice : params.get('productPrice')}</span>`
    wishList.appendChild(wishListItems);
    wishListItems.append(wishListItemsC, btn);
    wishListItemsC.append(img, wishTitles, quantity);
    wishTitles.append(title, price);
    cartCount.textContent = "x "+ quan;
        btn.addEventListener('click', function(event){
            const wishItems = event.target.closest(".wishListItems");
            if(wishItems){
                wishItems.remove();
                quan = 0;;
                cartCount.textContent = quan;
            }
                wishList.classList.remove("wActive");
    })
}

const wishListBtn = document.querySelector(".wishListBTN");
wishListBtn.addEventListener("click", function(){
    wishList.classList.toggle("wActive");
    });