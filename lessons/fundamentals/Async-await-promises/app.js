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
    return resolve("resolved")

})

console.log(myPromise)