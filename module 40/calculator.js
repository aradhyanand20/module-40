
function calculator(num1, num2, operator){
    let result;
switch (operator) {
    case "+":
        result =  num1 + num2;
        console.log("sum of numbers=", result);
        break;
    case "-":
        result =  num1 - num2;

        console.log("sum of numbers=", result);
      
        break;
    case "*":
        result =  num1 * num2;

        console.log("sum of numbers=", result);
      
        break;
    case "/":
        result =  num1 / num2;
        
        console.log("sum of numbers=", result);
      
        break;
    default:
        console.log("Invalid Operator");
}
}
calculator(8,4,"+");
calculator(8,4,"-");
calculator(8,4,"*");
calculator(8,4,"/");
calculator(8,4,"//");

