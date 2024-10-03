const cartCount = document.querySelector("#cartCount");


let Base_Url = 'https://foodish-api.com/images';
let dishes = ['burger', 'biryani', 'dosa', 'pasta', 'pizza', 'samosa', 'dessert'];
let cart = 0;

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
        btn.addEventListener("click", function(event){
            const newConst = event.target.closest(".productsData");
            if(newConst){
                var productImg = newConst.querySelector('img').src;
                var productTitle = newConst.querySelector('.ttitle').textContent;
                var productPrice = newConst.querySelector('.price').textContent;
                addWishlist(productImg, productTitle, productPrice);
            }
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

const wishList = document.querySelector(".wishList");

function addWishlist(imgSrc, productitle, Pprice){
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
    img.src = imgSrc;
    btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    btn.setAttribute("class", "delbtn")
    title.textContent = productitle;
    price.innerHTML = `Price <span style="color: #05ff05;">$${Pprice}</span>`
    wishList.appendChild(wishListItems);
    wishListItems.append(wishListItemsC, btn);
    wishListItemsC.append(img, wishTitles);
    wishTitles.append(title, price);
    cart++;
    cartCount.textContent = cart;
    // const deleteBTN = document.querySelectorAll(".delbtn");
        btn.addEventListener('click', function(event){
            const wishItems = event.target.closest(".wishListItems");
            
            if(wishItems){
                wishItems.remove();
                cart--;
                cartCount.textContent = cart;
            }
            if(cart === 0){
                wishList.classList.remove("wActive");
            }
    })
}
    const wishListBtn = document.querySelector(".wishListBTN");
    wishListBtn.addEventListener("click", function(){
    wishList.classList.toggle("wActive");
});


const subsBTN = document.querySelector("#subsBTN");
const signUPText = document.querySelector("#signUPText");
const signUPInfo = document.querySelector("#signUPInfo");

subsBTN.addEventListener("click", function(){
    const emlINPT = document.querySelector("#emlINPT").value;
    signUPText.textContent = "Thank You For Subscribe";
    signUPInfo.innerHTML = `We'll reach out to you soon <span style='color:red;'> ${emlINPT} </span>`;
});

const searchListItems = document.querySelector(".searchList");
function closeDiv(){
    const closeDiv = document.createElement("p");
    closeDiv.classList.add("close");
    closeDiv.textContent = "Close X";
    searchListItems.appendChild(closeDiv);
    closeDiv.addEventListener('click', function(){
        searchListItems.innerHTML = "";
        searchListItems.style.display = "none";
    });
}

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
    closeDiv();
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