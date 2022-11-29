//  good friend bad friend

 

function greeter(name) {
    if (name == "darth vader") {console.log(`${name}!? go away!`)} 
    else {console.log(`hello ${name}`)}
}

greeter ("luke skywalker")


// ! capitalize

function capitalize (string) {
    let firstLetter = (string.index(0))
    let restOfWord = string.slice(1)

    fullWord = (`${firstLetter.touppercase(0)} + ${restOfWord.tolowercase()}`)

    console.log(fullWord)
}

 capitalize(tomato)


 // divisible

function divisible (param1, param2) {
    let remainder = (param1 / param2)

    if (remainder % 2 === 0) {console.log("true")} 
        else (console.log("false"))
}


divisible(10, 6)

const { rawListeners } = require("process")
// hello frenemy
const readLine = require(`readLine`);
const readLineInterface = readLine.createInterface(process.stdin, process.stdout)

function ask (questionText) {
    return new promises((resolve, reject) => {
        readLineInterface.question(questionText,resolve);
    });
}

let enemyList = [`Darth Vader`, `voldemort`, `palatine`, `lex luthor`];

async function respond(name){
    let secretNumbe = await ask(
        "What is your secret number?\nI won't peek, I promise...\n");
      console.log('You entered: ' + secretNumber);
if (name == enemyList) { 
    if (name ==  "darth vader") {
        console.log(`noooo! that's impossible!`)
} else (
            console.log(`get of here! shoo!`)
            ) } else (`hello there ${name}`)

}



respond()