const subsBTN = document.querySelector("#subsBTN");
const signUPText = document.querySelector("#signUPText");
const signUPInfo = document.querySelector("#signUPInfo");

subsBTN.addEventListener("click", function(){
    const emlINPT = document.querySelector("#emlINPT").value;
    signUPText.textContent = "Thank You For Subscribe";
    signUPInfo.innerHTML = `We'll reach out to you soon <span style='color:red;'> ${emlINPT} </span>`;
});
const searchListItems = document.querySelector(".searchList");

function addsearchlist(imgSRC, pTitle, pPrice){
    const wishListItems = document.createElement("div");
    const wishListItemsC = document.createElement("div");
    const wishTitles = document.createElement("div");
    const btn = document.createElement("button");
    const img = document.createElement("img");
    const title = document.createElement("h4");
    const price = document.createElement("p");
    wishListItems.classList.add("wishListItems", "order-items");
    wishListItemsC.classList.add("wishListItemsC");
    wishTitles.classList.add("wishTitles");
    title.classList.add("title");
    img.style.width = "35px";
    img.src = imgSRC;
    title.textContent = pTitle;
    price.innerHTML = `Price $<span style="color: #05ff05;" class="price">${pPrice}</span>`;
    searchListItems.appendChild(wishListItems);
    wishListItems.append(wishListItemsC, btn);
    wishListItemsC.append(img, wishTitles);
    wishTitles.append(title, price);
}

const searchbtn = document.querySelector(".searchbtn");
const searchList = document.querySelector(".searchList");
const formControl = document.querySelector(".form-control");

searchbtn.addEventListener("click", function(event){
    event.preventDefault();
    var inputVal1 = formControl.value;
    var inputVal = inputVal1.toLowerCase();
        for(let i = 0; i < 10; i++){
            let randomImg = Math.floor(Math.random()*10);
            let randomPrice = Math.floor(Math.random()*50) + 10;
            fetch(`https://foodish-api.com/images/${inputVal}/${inputVal}${randomImg}.jpg`)
            .then(response => {
                if (response.ok) {
                addsearchlist(response.url, inputVal1, randomPrice);
                } else {
                console.log('failed');
                }
                }).catch(error => console.log('Error:', error));
                }
    if(formControl.value !== ""){
        searchList.style.display = "block";
    }
    formControl.value = "";
});
formControl.addEventListener("input", function(){
    if(formControl.value == ""){
        searchList.style.display = "none";
    }
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

orders.forEach((orders)=>{
    orders.addEventListener("click", function(event){
        const orderItem = event.target.closest('.order-items');
        if(orderItem){
            var productImg = orderItem.querySelector('img').src;
            var productTitle = orderItem.querySelector('.title').textContent || "";
            var productSubtitle;
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
        console.log('clicked');
    });
});