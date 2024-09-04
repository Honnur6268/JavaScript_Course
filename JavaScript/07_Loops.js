// Loops: Loop is technique to execute certain set of code inside the block repeatedly untill a certain condtion is met.
// Differenr Kinds of Loops:
// 1. While 
// 2. do-while
// 3. for
// 4. for in
// 5. for of

// while: The while loop loops through a block of code as long as a specified condition is true.
console.log("--------- while ---------")
let num = 1;
while(num <= 10){
    console.log(num);
    num++
}

//do-while: This loop will execute the code block once, before checking if the condition is true, 
    // then it will repeat the loop as long as the condition is true.
console.log("\n--------- do-while ---------")
let i = 1;
do{
    console.log(i*2)
    i++
}while(i <= 10)


// for
// syntax: for(initialization; condition; increment/decrement){}
// all expression of for are optional, If expression 2 is not provided the loop will never end, You must provide break statment.
console.log("\n--------- for ---------")
for(let i = 10; i >= 1; i--){
    console.log(i)
}

// console.log("\n--------- optional ---------")
// let j = 1;
// for(; ;){
//     console.log(j++)
//     // break
// }

// Task: Check wether the given number is prime or not
console.log("\n--------- Task 01: Number is Prime or Not? ---------")
function isPrimeNumber(num){
    isPrime = true;

    if(num < 1){
        console.log("Enter positive number greater tha 0")
        return;
    }
    else if(num === 1){
        console.log("1 is not a prime number")
        return;
    }
    else if(num > 1){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                isPrime = false
            }
        }
    }

    if(isPrime){
        console.log(num,"is a prime number")
    }
    else{
        console.log(num,"is not a prime number")
    }
}

isPrimeNumber(11)


// for in: for in statement loops through the properties/keys of an Object
// Syntax : 
// for (key in object) {
//     // code block to be executed
//   }
console.log("\n--------- for in ---------")
const person = {fname:"Honnur", lname:"Ali", age:26};

for (let x in person) {
    console.log(x,":",person[x])
}

// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]
//you can't use person.x because x is loop variable

console.log("\n--------- for in over arrays ---------")
const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
    console.log(x,":",numbers[x])
}
// Do not use for in over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


console.log("\n--------- for of ---------")
//for of: for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
// Syntax : 
// for (variable of iterable) {
//     // code block to be executed
//   }
// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
// iterable - An object that has iterable properties.

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
  console.log(x)
}

// console.log("\n--------- for of over Objects ---------")
// for(let x of person){  // --> gives error because object is not iterable
//     console.log(x)
// }