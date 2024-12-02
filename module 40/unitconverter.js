
let fahrenheitTemps = [38, 44, 50, 59, 71, 84.2, 89.6, 98.6];
function converttoCelcius(temp){
  return temp.map(ele => (ele - 32)* 5/9);
}

let convertedTemp = converttoCelcius(fahrenheitTemps);
console.log(convertedTemp);