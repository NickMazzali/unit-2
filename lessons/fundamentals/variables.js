/* 
variables:


- variables are name containers for storing data and values
- you can name variables anything with only  few exceptions
- we use these variables as a reference for functions

*/

/* 
.

you can start the declaration process with var, let, or const
- Variable Names in JS should be camel cased: starts off lower case and each word is capitalized after that (myNameIsNickMazzali) (currentWeather)
*/

var firstName = "Nick";
// (1)  (2)   (3)   (4)

/* 
1. Javascript Keyword to denote variable creation
2. The name of the variable
3. Assignment Operator
4. Initial Value
*/

console.log("hello from console.log line:27")
// ! to run a JS file in terminal - use command : node [filename.js]
// ! example: node variables.js
console.log(firstName);
console.log("variable firstName:", firstName);

/* 
Variable Declaration:
- The declaration is to the leftside of the assignment operator
- This is where the variable is created - it's not assigned a value yet
- If no value is assigned to it, it becomes undefined
*/

// just declARed not assigned a value
var lastName; 
// value is assigned
lastname = "Vanarsdall";