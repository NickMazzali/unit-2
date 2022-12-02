//  good friend bad friend

function greeter(name) {
  if (name == "darth vader") {
    console.log(`${name}!? go away!`);
  } else {
    console.log(`hello ${name}`);
  }
}

greeter("luke skywalker");

// capitalize

function capitalize(string) {
  let firstLetter = string.index(0);
  let restOfWord = string.slice(1);

  fullWord = `${firstLetter.touppercase(0)} + ${restOfWord.tolowercase()}`;

  console.log(fullWord);
}

capitalize(tomato);

// divisible

function divisible(param1, param2) {
  let remainder = param1 / param2;

  if (remainder % 2 === 0) {
    console.log("true");
  } else console.log("false");
}

divisible(10, 6);

const { rawListeners } = require("process");

// hello frenemy
const readLine = require(`readLine`);
const readLineInterface = readLine.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new promise((resolve, reject) => {
    readLineInterface.question(questionText, resolve);
//                                 input   ,  output 
});                          
}



let enemyList = [`Darth Vader`, `voldemort`, `palpatine`, `lex luthor`];

async function respond(name) {
  let answer = await ask("what is your name?")
  if (enemyList[0].includes(answer)) {
    // turns the array into just looking at the first item
    console.log(` ${answer}...noo, that's impossible!`)
} else if (enemyList.includes(answer)) {
    console.log(`Go away ${answr}`)
} else {
    console.log (`hello, ${answer}`)
    readLineInterface.close()
}
}
  
let fire = true
// callback that fires respond only if fire is true

let callback = () => {
    fire ? respond(): null
}

callback()

// event listener that triggers a callback after 3 seconds

settimeout(()=> {
    respond()
}, 3000);