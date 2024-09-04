// Operators : Javascript operators are used to perform different types of mathematical and logical computations.
// Types of Operators:
// 1. Arithematic Operators --> +, -, *, /, %, ++(post and pre), --(post and pre), **(exponent)
// 2. Comparison or Relational Operators  --> >, <, ==, ===, >=, <=, !=, !==, ?
// 3. Logical Operators  --> &&, ||, !
// 4. Bitwise Operators  --> &(bitwise AND), |(bitwise OR), ~(bitwise NOT), << (left shift), >> (right shift), >>>(unsigned right shift)
// 5. Assignment Operators  --> =, +=, -=, *=, /=, %=, **=
// 6. Special Operators -->
//     -- typeof
//     -- instanceof
//     -- delete
//     -- new
//     -- of
//     -- in
//     -- void
//     -- yield
// 7. Ternary Operators --> ? :
    
const res = 6 ** 2
console.log(res)


// == and ===
// == (equality) --> 
            // first checks the types then perfomrs strict eqpality operation
            // then compares the values of both side and try to internally perform the type conversion to same type
            // if x is number and y is string then it will try to convert y to number then perfomrs strict eqpality operation     
// === (Strict equality) --> 
            // first compares the types, if not same return false
            // if types same then compares the values and type without performing type conversion
            // the strict equality operator always considers operands of different types to be different.
var x = 10;
var y = "10"

console.log("Equality (==) -->",x == y)  // true
console.log("Strict Equality (===) -->",x === y) // false

var a = 100;
var b = 100;

console.log("Equality (==) -->",a == b) // true
console.log("Strict Equality (===) -->",a === b) // true