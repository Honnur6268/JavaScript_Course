// JavaScript Destructuring
// It is technique used to unpack the properties of objects or arrays or any iterables.
// Destructuring does not change the original object.
// Destructuring can be used with any iterables.

// Object Destructuring
// we can destructure object using {}
const employee = {
    firstName: "Honnur",
    lastName: "Ali",
    age: 26,
    address: "GVT",
    company: "Neokred"
}

// let {firstName, lastName} = employee
// console.log(firstName, lastName)

// The order of the properties does not matter in object
// let {firstName, lastName, address, company, age} = employee
// console.log(firstName, lastName, address, company, age)

// we can set default values to missing properties
// let {firstName = "Bhavana", dept="IT"} = employee
// console.log(firstName, dept)

//we can set alias for properties in objects
// let {firstName: name} = employee
// console.log(name)

// Array Destructuring: 
// we can unpack array variables into our own variables.
// The order of the varaibles/values matter in arrays
// we can destructure  array using []
const fruits = ["Banana", "Mango", "Apple","Pineapple", "Grapes"]
let [f1, f2, ...r] = fruits
console.log(f1,f2, r)

// we can access array elements using index
let {[0]: fruit1, [2]: fruit2, [4]: fruit4, ...restData} = fruits
console.log(fruit1, fruit2, fruit4, restData)


// String Destructuring
// we can destructure string values into characaters
let name = "Honnur Ali"
let [c1,c2,c3,c4,c5,c6, ...rest] = name
console.log(c1,c2,c3,c4,c5,c6, rest)