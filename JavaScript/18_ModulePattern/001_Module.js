// Module Pattern : 
// It is pattern which will help to access variable and functions from one file in another file.
// Basically we have 2 types of patterns in JS:
// 1. CommonJs module pattern (by default available in Node Js environment)
// 2. ES Module Pattern

// CommonJS Module Pattern
// we have to export variable and function using 
// module.exports = {// mention what need to be exported}
var access = require("./002_User.js")

console.log(access.name)
access.print()

// ES Module Pattern
// We have 2 ways to export variable and functions
// 1. use .mjs extension
// 2. Include package.json file in your folder and add object contains "type" = "module"
// See folder ESPattern for above explanations


// exports
// We have 2 types of exports
// 1. Named Export
// 2. Default export
// See file 21_Student.js and 22_StudentAccess.js in ESPattern folder