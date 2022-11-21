/* 
Types - Data types

-Strings
-boolean (truthy and falsey)
-numbers
*/

/* 
Strings
-datatypes used to represent text and are wrapped in single quotes, double quotes, or backticks

*/
var stringOne = "double quotes";

var stringTwo = 'single quotes'

var stringThree = `back ticks`

console.log(stringOne, stringTwo);
// adding strings together
console.log(stringOne + stringTwo); //output:stringOnestringTwo
// !fixing it
console.log(stringOne + " " + stringTwo);
// using backticks
console.log(`${stringOne} ${stringTwo}`);

// ! Challenge String
// Declare and initialize a variable called greeting set it equal to good afternoon
// Declare and initialize a variable called firstName set it equal to your name
// using backticks console log "good afternoon Nick" with proper spacing

var greeting = "good afternoon";
var firstName = "Nick";



console.log(`${greeting} ${firstName}`)

console.log(typeof firstName);

var moneyOne = "20";
var moneyTwo = "10";

console.log(moneyOne + moneyTwo);
// combining strings is called concatenation

/* 
Numbers
*/

let currentTemp = 23;
console.log("currentTemp:", currentTemp)

let calculatedTip = 50 * 0.25;
console.log(calculatedTip.toFixed(2)) 

let numbersAreHard = (.2 *10 +.1 *10) / 10;
console.log(numbersAreHard)

//  ! convert Strings to Numbers
// Number()

console.log(Number(moneyOne) + Number(moneyTwo));

// way number 2
// add a plus to the start of the variable
// ex: +moneyOne

console.log(+moneyOne + +moneyTwo);

/* 
Booleans:
- Only two possible values

*/

var isOver21 = true
console.log("isOver21", isOver21);
var isTeenager = false
console.log("isTeenager", isTeenager);

console.log("typeof", typeof isOver21);

/* 
Null
- null is an empty value. but it exists as empty space to fill later on
*/

let isLoggedIn = null

/* 
Undefined
- no value is assigned and does not act as an empty container
*/

let myName 
// because there is no assignment, the default is undefined

var myLastName = f
var myAddress = f
console.log(Boolean(myLastName));
console.log(Boolean(myAddress));
