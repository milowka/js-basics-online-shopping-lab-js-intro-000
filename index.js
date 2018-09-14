var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var cartitem = {ItemName:'ItemName'}
 const price = Math.floor(Math.random()*100);
 cart.push({['ItemName']:price});

 console.log(`${ItemName} has been added to your cart`)

 return cart
}
