/* 
!BRONZE
Write two variables. One of those variables will store your name. The other variable will store the name of a friend.

Find out what property you can use to check how long their name is, as well as your own.

Goal: console.log how many letters each of the names are...
*/

// Write a conditional to see who has the longer name.
//     -Use string interpolation to console.log whose name is longer
//     -Ex: My name is longer than Adam's

// */
// GOLD
// In the console include how many letters difference there are between the names.

// Example: Adam's name is shorter than mine by 4 letters. 

// *There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional.

// */
let myName = "Nick Mazzali"
let theirName = "Thomas Kilada"

console.log(theirName.length)
console.log(myName.length)

if( myName.length > theirName.length){
    console.log("my name is longer than their's")
    console.log("my name is" + (myName.length - theirName.length) + "letters longer")

} else if( theirName.length > myName.length) {
    console.log("their name is longer than mine.")
    console.log("Their name is" + (theirName.length - myName.length) + "letters longer")
} else {
console.log("our names are the same length")    
}
