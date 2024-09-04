// Data Types : total 8 data types diveded into 2 categories
// 1. Primitive data type
//     a. Number -- number || decimal
//     b. string -- characters within " " or ' ' or ` `
//     c. boolean -- true || false
//     d. undefined
//     e. null -- (special data type comes under object type of special primitive type)
//     f. Bigint -- value after 2 power of 53-1 
//     g. Symbol -- value which is consutructed using Symbol() constructor
// 2. Non-Primitive data type
//     a. object -- any value consist of object or array


var numData = 123456
console.log("Data Type - ",typeof numData)

var decimalNumData = 123.45
console.log("Data Type - ",typeof decimalNumData)

var name = "Honnur"
console.log("Data Type - ",typeof name)

var lastName = 'Ali'
console.log("Data Type - ",typeof lastName)

var city = `Gangavathi`
console.log("Data Type - ",typeof city)

var isPassed = true
console.log("Data Type - ",typeof isPassed)

var noValue = undefined
console.log("Data Type - ",typeof noValue)

var nullVal = null
console.log("Data Type - ",typeof nullVal)

var student = {id: "NK103", name:"Honnur Ali", mobileNumber:"8123426862"}
console.log("Data Type - ",typeof student)

var names = ["Honnur", "Bhavana"]
console.log("Data Type - ",typeof names)
