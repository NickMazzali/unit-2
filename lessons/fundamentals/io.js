// IO and Callbacks

/* 
    - Process is an event that currently runs in the foreground or background of your local machine

    -Node.js allows access to its processes via a process object
*/

// Import Statement

let process = require("process")

console.log(process.pid)

// gives the readout of a process being run.


// Callback
/* 

A function that gets invoked when simething occurs


Event Listener - A "listener" function that waits for an event to occur and executes a callback funciton when it occurs
    -It takes two parameters
        -event upon which to execute a function
        -callback function

*/                    
// process.stdin.once("data", function (input) {
//     console.log(`this is our input being repeated: ${input}`)
//     process.exit()
// })


// process.stdin.on("data", function (input){
//     console.log(input.toString())
//     process.exit()
// }
// ) 


// function addnums(x, y) {
//     return x + y
// }

// console.log(addnums(2 , 5))

// function declaration
// hoisted
function nameoffuntion(parameter){

    return parameter
}

// function expressions
// not hoisted

let fxexpressioin = function(parameter) {

    return parameter
}

// arrow function expression
// ES6 version of concisely writing functions, 
// not hoisted, not bound to .this or apply

// concise body arrow function
let arrowfunction = () => console.log("arrow function")

arrowfunction()

let arrowfxoneparam = param => console.log("this fx has one param")

// example:

process.stdin.on("data", input =>console.log(input.toString()))

// Block body arrow function

let blockbodyfx = () => {
console.log("line 1")
console.log("line 2")
}

/* 
Lets create a listener on stdin so that when we type something, it will reply with what we said plus some word
*/

// let handleInput = input => {
//     console.log(input.toString().trim() + ", cheers!")
// }

// process.stdin.on("data", handleInput)
// console.log("what is your name?")
// process.stdin.on("data", (input) => {
//     process.stdout.write(`this input is: ${input.toString()}`)
// }
// )

// guess the number hint

// function guess(question) {
//     console.log(question)
//     process.stdin.once("data", (input) => {number = input.toString().trim()
//     process.stdout.write(`your number was: ${number}`)
//     })

// return number
// }
// // returns undefined...why? HINT: Async functions
// console.log(guess("what is your number?"))

// Readline

const readline = require("readline")

let rl = readline.createInterface({input: process.stdin, output: process.stdout})

let num1 = Math.floor((math.random() * 10) + 1)
let num2 = Math.floor((math.random() * 10) + 1)
let solution = (num1 + num2)

rl.question(`what is the sum of ${num1} & ${num2}?` , (input)=>{
    if (input.trim() = solution) [
        rl.setprompt("correct")
        rl.prompt()
        rl.close()

    ]
})

rl.on("close", ()=> console.log("thanks for playing"))

