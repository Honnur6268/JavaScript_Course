// Hoisting:   
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// JavaScript Declarations are Hoisted.
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// In JS, before executing all variables are stored in specail environmet and initialized with default values before those variables
    // are encountered. If we access the variable before declaration we will get undefined. (for var only)
console.log(x)
var x = 5;

// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "temporal dead zone" from the start of the block until it is declared:
// console.log(name) // ReferenceError: Cannot access 'name' before initialization
console.log(name)
let name = "Honnur";

// Using a const variable before it is declared, is a syntax error, so the code will simply not run.
// console.log(age)
// const age; // const' declarations must be initialized. SyntaxError: Missing initializer in const declaration

// JavaScript Initializations are Not Hoisted
// JavaScript only hoists declarations, not initializations.
var a = 5; // Initialize x
var b = 7; // Initialize y
console.log(a,b)

var c = 5; 
console.log(c,d)
var d = 7;


// Shadowing: redeclaring variables
// Shadowing (overriding) already intitalized variables to new value
var empName = "Honnur Ali"
var empName = "Bhavan"  // shadows previous values to new value
console.log(empName)