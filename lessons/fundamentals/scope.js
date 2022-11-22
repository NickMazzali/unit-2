/* 
Var vs Let
- with the intro of ES6 we now have keywords to use for variables "let" & "const"

-you cannot reference a variable before it is initialized using LET
-when you reference a variable using VAR, you are able to use it but you get an undefined

*/

var firstName = "Nick";
var age = 30
if(firstName == "Nick"){
    let age = 25;
console.log(age);
}

// VAR is global scoped, while LET is block scoped

//  Second example

const greeting = "hello";

if(true) {
    const greeting = "goodbye";
    console.log(greeting);
}

console.log(greeting);
