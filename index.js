var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {[item]:Math.floor(Math.random(1,101)*100)};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  if (cart.length === 0){
   return "Your shopping cart is empty."
 }
 console.log(`In your cart, you have`)
 if(cart.length === 1){
   console.log(` ${Object.keys(cart[0])[0]} at
 $${cart[0][Object.keys(cart[0])[0]]}.`)
 } else if (cart.length === 2) {
   console.log(`${Object.keys(cart[0])[0]} at
 $${cart[0][Object.keys(cart[0])[0]]}, and${Object.keys(cart[1])[0]}
 at $${cart[1][Object.keys(cart[1])[0]]}.`)
 } else{
   for (var i=0; i<cart.length-2; i++) {

 var item = Object.keys(cart[i])[0]
 var price = cart[i][item]
 console.log(`, ${item} at $${price}`)
 }
 var item = Object.keys(cart[cart.length-1])[0]
 var price = cart [cart.length-1][item]
   console.log(`, and ${item} at $${price}.`)
}

function total (){

}

function removeFromCart (item){

}

function placeOrder (cardNumber){
}
