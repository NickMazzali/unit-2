/* 
Loops
-The y offer a quick and easy way to something repeatedly
-There are many many kinds of loops
    - Hor statements
    - Do While statements
    - While statements

*/

// ! Danger: there is a danger in being stuck in an infinite loop
/* 

1.sets the variable before the loop starts
2. defines the condition of the loop to run (ex. it's going to continue until i reaches 10)
3. Increases the value of i each time the code block is executed in the loop

*/
//    (1) .      (2) .   (3)
for(let i = 0; i<=10; i=i+1) {
    console.log(i);
}

let city = "Indianapolis";
console.log(city[0]);

for (let i = 0; i< city.length; i++) {
    console.log(city[i]);
}
                  
//  create a for loop that starts at 1 goes to 100
//  create an if statement inside our loop to only console log if it is even


for(let i = 1; i<=100; i++) { 
    if(i % 2 === 0){
        console.log(i);
    }

}
// create a for loop to print th evens without an if statement

for( let i = 0; i <=100; i=i+2) {
    console.log(i);
}

// ! While Loop

/* 
This will loop through the code block as long as the condtion is true
1. Keyword While
2. Conditional

*/
let i = 0
//(1)   (2)   
while (i < 10){
    console.log(i);
    i++;
}


/* 
December has 31 days in it. Create a while loop that will loop through 1-31
-inside the loop keep track of a total (value of i added up each loop lap)
*/

i = 1;
let total = 0;
while(i <= 31){
    total = total + i;
    i++;

}

console.log(total);


// for/in

    let student1 = {
        name: "jeff",
        class: "math",
        currentGrade: 10,
        isPassing: true,
    }

    for(key in student1){
        console.log(student1[key])
    }

    let formData = { email: "", password: "" };
    let message = "Success"
    let missingData = []
    for (key in formData){
        if(formData[key]==""){
        //    message = "You are missing password or email"
        missingData.push(key)
        }
    }
    
    console.log(missingData.length> 0 ? "You are missing " + missingData.join(", "): "success")
    

let names = ["name1", "name2", "name3", "name4"]

for(index in names){
    console.log(arrayBucket)
    console.log(names[index])
}

/* 
! do not use this for/in loop on arrays where order is important to you
*/

// For of Loop - data types: String and Array
let firstName = "Robert"
console.log(firstName[2])

for (index in firstName){
    console.log(index)
}

// While - Loop
let animals = ["monkey", "frog", "fly", "tiger"]
let removedAnimal
while(animals.length>1){
 removedAnimal= animals.shift()
 console.log(animals)
console.log(removedAnimal)
}

let triangle = new Array(20)
triangle.fill("*")

while(triangle.length>0){
    console.log(triangle.join(" "))
    triangle.pop()
}