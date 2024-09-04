//VALUE TYPE
console.log("--------------- VALUE TYPE ---------------")
let x = 10;
let y = x;

console.log(x, y)

// after changing x value
x = 50;
console.log("After changing:",x, y)


// REFERENCE TYPE
console.log("\n--------------- REFERENCE TYPE ---------------")
const obj1 = {
    name: "Honnur",
    age: 26
}

const obj2 = obj1;

console.log(obj1, obj2)

// after changing obj2 values
obj2.age = 30
console.log("After changing:",obj1, obj2)