var helicopter1 = "blackHawk";
var helicopter2 = "blaCkHawk";

var stringThree = "3";
var numberThree = 3

// double equal signs will compare the value and doesn't care about type

console.log(helicopter1 == helicopter2); // output: false

console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase()); //outpu: true

console.log(stringThree == numberThree); //output true

// 3 equals signs will compare Type and Value: ===

//not operator: !=
//  this only looks at value

// this compares type: !==

// logical operators

let num1 = 6
let num2 = 3
// and operator
console.log(num1 < 10 && num2>1); // output: true
console.log("or operator")
// or operator
console.log(num1===4 || num2 === 6); //output: false

// change