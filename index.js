var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.round(Math.random()*100)+1;
 cart.push(new Object({[item]:price}));

 console.log(`${item} has been added to your cart`)
}
