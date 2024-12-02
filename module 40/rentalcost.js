// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
// of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
// The total cost would be the rental cost multiplied by the number of days rented.
// The rental costs arc
// V Economy = Rs. 4000 /- per dayE
// V Midsize = Rs. 10,000 /- per dayE
// V Luxury = Rs. 20,000 /- per day.

function carRent(car,days){
    let rent = 0;
    switch(car){
        case 'Economy':
            rent = days * 4000;
            console.log("your rent is ", rent);
            break;
        case 'Midsize':
        rent = days * 10000;
         console.log("your rent is ", rent);
          break;
        case 'Luxury':
         rent = days * 20000;
         console.log("your rent is ", rent);
          break;
        default:
            console.log("enter valid car type");
    }
}
carRent("Midsize",4);
carRent("Luxury",4);
carRent("Economy",4);
