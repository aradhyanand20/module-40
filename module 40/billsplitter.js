
function billSplitter(cost,people){
    let totalbill =  cost.reduce((sum,dish)=>sum+dish,0);
    let billper = totalbill/people;
    return {
        bill: totalbill,
        billPerPerson: billper

    }
}
dish =[100,300,200];
let actualbill =billSplitter(dish,3)
console.log(`The total bill is ${actualbill.bill} and per person is ${actualbill.billPerPerson}`)