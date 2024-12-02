let customercart = [2,1,3,4,6];

function newCart(cart){
return cart.map(qty =>qty *2 );
}

console.log(newCart(customercart));