let customerCart = [  'apple','banana','orange','banana','orange'];
function removeduplicate(cart){
    let uniqueitems= [];
cart.forEach(item => {
    if(!uniqueitems.includes(item)){
        uniqueitems.push(item);
    }
});
 return uniqueitems;
}
let newCart = removeduplicate(customerCart);
console.log(newCart);

