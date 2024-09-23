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

let cart = 0;
function cartNumber(){
    cart++;
    cartCount.textContent = cart;
}
addtocart.addEventListener("click", function(){
    cartNumber();
})