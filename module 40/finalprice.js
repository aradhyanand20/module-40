// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const calculateTotalCost = (cart)=>{
return cart.reduce((total,item)=>total+item.unitPrice*item.qty,0);
}

let customerCart = [{unitPrice:10,qty:30},{unitPrice:20,qty:10},{unitPrice:90,qty:7}];
let totalcost = calculateTotalCost(customerCart);
console.log(`total cost is ${totalcost}`);