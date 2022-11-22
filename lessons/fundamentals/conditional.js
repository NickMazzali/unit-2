/* 
Conditionals
-Conditionals are used for decision making
-Tools we have avaiable:
    -"if" statements
    -"if else" statements
    -"if else if" statements
    -switch
    -ternary
*/

// ! examples
// if else
// let currenthour = 14;
// var greeting = "";

if (currenthour < 12) {
  // in between brackets is considered a block of code
  // this block of code will be executed if the conditional is true
  greeting = "good morning";
} else {
  // block of code gets executed if the conditonal is NOT TRUE
  greeting = "good afternoon";
}

// console.log(greeting)

// if else if
let currentHour = 14;
var greeting = "";

if (currenthour < 12) {
  greeting = "good morning";
} else if (currenthour >= 12 && currenthour <= 17) {
  greeting = "good afternoon";
} else {
  greeting = "good evening";
}

console.log(greeting);


// Code refactoring If statements

// var isLightBulbOn = true;

// if(isLightBulbOn === true){
//     console.log("yes the lightbulb is on!");
// }

// Refactored
let isLightBulbOn = true;

if(isLightBulbOn){
    console.log("yes the lightbulb is on!");
}

// Not statement
if(isLightBulbOn !== true){
    console.log("the light bulb is off!");
}

// refactored
if(!isLightBulbOn){
    console.log("the light bulb is off!");
}
var today = new Date();
console.log(today.getSeconds());
var currentSeconds = today.getSeconds();
// 5/2 R 1 = odd
// 22/2 R 0 = even
// console.log(currentSeconds % 2);

if(currentSeconds % 2 === 0){
  console.log(`the current second is ${currentSeconds} and it is even`);

} else {
  console.log(`the current second is ${currentSeconds} and it is odd`);
}

// ! Ternary Statements

var age = 20;

if(age>=18){
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}
// these two statements are the same

age >= 18 ? console.log("T:you can vote") : console.log("you cannot vote");

// ! Switch Statement

let month = "dec";
let totalNumberDays = 0;
switch (month){
case "dec":
  totalNumberDays = 31;
  break;
  case "Jan":
    totalNumberDays = 31;
    break;
  case "Feb":
    totalNumberDays = 28;
    break;
    default:
      totalNumberDays = "month not real";
}

console.log(totalNumberDays);