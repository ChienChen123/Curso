let number1 = 0.7;
let number2 = 0.1;

number1 += number2; // 0.8
number1 += number2; // 0.9
number1 += number2; // 1.0

number1 = Number(number1.toFixed(2));

console.log(number1);
console.log(Number.isInteger(number1));

//console.log(number1.toString() + number2);
//console.log(typeof number1);
//console.log(number1.toString(2));
//console.log(number1.toFixed(2));
//console.log(Number.isInteger(number1));
//let numberTemp = number1 * "5";
//console.log(Number.isNaN(numberTemp));
