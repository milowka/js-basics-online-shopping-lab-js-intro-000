var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  for (var i = 0; i<cart.length; i++){
var itemName = Object.keys(cart[i])[0]
const price = Math.floor(Math.random()*100);
 cart.push({[itemName]:price});

 console.log(`${itemName} has been added to your cart`)
}
 return cart
}
