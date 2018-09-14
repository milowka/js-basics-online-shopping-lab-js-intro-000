var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random()*100);
 cart.push(new Object({[item]:price}));

 console.log(`${item} has been added to your cart`)
}


