var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var price = Math.random() * 100
  var roundedPrice = Math.floor(price)
  cart.push({[item]: roundedPrice})
  console.log(item + " has been added to your cart.")
  return cart;
}
