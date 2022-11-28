/* 
Functions
- functions provide a block of code that will only be ran when called upon
-it starts with the keyword function followed by the name that you give it
- functions do not need to return a value but often do
- functions get HOISTED 
*/
/* 
1. keyword:function
2.function name (camel casing rules)
3.no parameters are expected.

*/
// (1)      (2)    (3)
function example1(){
    console.log("function was executed");
}
// ! you MUST CALL the function in order for it to be executed
example1();

/* 
Function with Parameters

*/

function example2(param1, param2) {
    console.log("example2 executed");
    console.log(param1);
}

example2(2,5);

// create a function that will add two numbers and return the sum

function sumTwoNumbers(number1, number2){
    console.log("number1", number1, "number2", number2)
    let total = number1 +number2;
    return total;
}
let sum1 = sumTwoNumbers(15, 30);
console.log("sum1", sum1);

let sum2 = sumTwoNumbers(sum1, 30);
console.log("sum2", sum2);



function simpleAddFunction(num1, num2) {
    return num1 +num2;
}

let add1 = simpleAddFunction(5, 23);
console.log(add1);

// write a function for volume of a cube!
// store the returned value in a var called volume1

function volume(length, width, height) {
    volume1 = length*width*height;
}

volume( 4,5,6);
console.log(volume1)

function randomnum(min,max) {
    let range = max - min +1

    return Math.floor(math.random() * range + min)
}

const random1 = randomnum(0,100);

let randomnumber = math.random();
console.log(randomnumber);
console.log(randomnumber * 101);