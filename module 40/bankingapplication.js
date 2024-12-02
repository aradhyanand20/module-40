

function updateAccount(account,customerName,deposit,withdrawal){
 let newBalance = deposit - withdrawal;
 account.balance= newBalance;
 account.name = customerName;
return account;
}

let accountDetails = {
 name:"customer Name",
 balance: 0
}
let customerDetails =updateAccount(accountDetails,"rahul",1000,300);
console.log(customerDetails);