var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var cartitem = {itemName: 'itemName'}
var price = Math.round(Math.random()*100);
 cartitem.push(new Object({[itemName]:price}));

 console.log(`${cartitem} has been added to your cart`)
}
