window.dataLayer = window.dataLayer || [];

function trackEvent(eventName,data={}){

dataLayer.push({
event:eventName,
...data
});

}


// PRODUCT CLICK

function selectProduct(name,price){

localStorage.setItem("productName",name);
localStorage.setItem("productPrice",price);

trackEvent("select_item",{
item_name:name,
price:price
});

window.location="product-detail.html";

}


// ADD TO CART

function addToCart(){

let name=localStorage.getItem("productName");
let price=localStorage.getItem("productPrice");

trackEvent("add_to_cart",{
item_name:name,
price:price
});

localStorage.setItem("cartName",name);
localStorage.setItem("cartPrice",price);

alert("Added to cart");

}


// SCROLL TRACKING

window.addEventListener("scroll",function(){

let scrollPercent=(window.scrollY+window.innerHeight)
/document.body.scrollHeight*100;

if(scrollPercent>25) trackEvent("scroll_25");
if(scrollPercent>50) trackEvent("scroll_50");
if(scrollPercent>75) trackEvent("scroll_75");

});