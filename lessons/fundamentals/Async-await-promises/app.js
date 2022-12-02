console.log("promises async await lesson")

// why do we need asyncrynous programming?

function getInfo() {
    setTimeout(() => {
        return "information"
        
    } , 3000);
}

let data = getInfo()
console.log(data)

//  Promises
/* 
- an object that may produce a singular value in the future

- three states:
    Pending(unfinished)
    Fulfilled (completed)
    rejected (error)

*/


let myPromise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let sum = 2+1

        sum = 3 ? resolve("success") : reject("failed")
    }, 4000);
})

console.log(myPromise)

myPromise.then(
    msg => 
    console.log(msg))
    .catch(msg => {
            console.log(msg)
            
    })
    .finally(() => {
        console.log("code that runs after")
})

// asynchronus functions

/* 
    * Introduced in ES*
    *A different way to write promise based or asynchronus code
    *uses async/await syntax to replace promise resolve & reject

    // Async function syntax

    *async function myFx() { }
    *let myFx = async function() { }
    *let myFx = async () => { }

*/

function theOGFunction() {
    return "OG Function value"
}

let resultofOGFunction = theOGFunction()
console.log(resultofOGFunction)

async function asyncFx() {
    return "async fx value"
}

console.log(asyncFx())

let resultOGFunction = asyncFx()

resultOGFunction.then(data => console.log(data))

//  AWAIT

/* 
*tells our function that a value being returned is a promise
*tells our function it must wait until the promise is fulfilled

*/
let db = 76854758734

let dbcall = new promises((resolve, reject) => {

    if (db) {
    resolve(db)}
    else {
        reject("no data found")
    }
})

// dbcall.then(data => console.log(data)).catch(err => console.log(err))

async function displayData() {
    try{
        let dbResult = await dbcall

    console.log(dbResult)
    } catch(err) {
        console.log(err)
    }

}

displayData()