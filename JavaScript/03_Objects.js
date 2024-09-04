//Objects
//Object is a collection of Properties. Where each property consists Key-Value pairs.
//We can create Objects in 2 ways,
// 1. Using Object Literal
// 2. Using new keyword
// 3. Object Constructor

//Property: Is a collection of Key-Value pairs
//Inside Object the key must be unique, if we have more than 1 same key then it will override previous value to latest value

// In JavaScript, almost "everything" is an object. All JavaScript values, except primitives, are objects.

// 1. Object Literal:
var employeeData = {
    id: "NK103",
    name: "Honnur Ali",
    address: "GVT",
    mobileNumber: "8123426862"
}

console.log("------- Employee Data -------")
console.log(employeeData)

//We can create an empty object and then we can add properties to it.
console.log("------- Empty Object -------")
const courseData = {}  //--> creates Empty Object
console.log(courseData)
console.log("------- Add Properties to Empty Object -------")
courseData.courseId="SUB101",
courseData.courseName = "Java Fullstack Developer"
courseData.courseDuration = "3 Months",
courseData.courseFees = "15000/-"
console.log(courseData)


//Inside Object the key must be unique, if we have more than 1 same key then it will override previous value to latest value
var studentData = {
    id:101,
    mobileNumber: "8073379047",
    name:"Bhavana",
    address:"Gvt",
    mobileNumber: "8123426862" //It will override existing data to new data
}

console.log("------- Student Data -------")
console.log(studentData)

// Accessing Object Property in 2 ways
// 1. Syntax: <ObjectName>.<keyName>
// 2. Syntax: <ObjectName>["<keyName>"]
console.log("\n------- Accessing Object Property -------")
console.log("Employee Id:",employeeData.id)
console.log("Employee Address:",employeeData["address"])

//Insert - new Property inside existing object
console.log("\n------- Insert new Property -------")
employeeData.role = "Backend SDE2"
console.log(employeeData)


//Update - update existing Property
console.log("\n------- Update Existing Property -------")
employeeData.address = "Bangalore"
employeeData.mobileNumber = "8073379047"
console.log(employeeData)

//Delete - delete existing property using delete keyword (Special Operator)
// The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.
console.log("\n------- Delete Existing Property (using delete keyword) -------")
delete employeeData.mobileNumber
delete employeeData["address"]
console.log(employeeData)
// employeeData.address="Gangavathi, Karnataka"
console.log(employeeData.address) //--> Gives undefined

// 2. using new keyword
// var data = new Object( {id: "NK103",})
// console.log(data.id="101")
// console.log(data)

//3. Using Object Constructor
// var data = Object({id: "NK103",})
// console.log("data\n",data)
// data.id="101"
// console.log(data)


//Javascript Objects are mutable
// --> Objects are mutable: They are addressed by reference, not by value.
// --> If employeeData is an object, the following statement will not create a copy of employeeData:
console.log("\n------- JS Objects are Mutable -------")
const val = employeeData;
// The object val is not a copy of employeeData. The object val is employeeData.

// The object val and the object employeeData share the same memory address.

// Any changes to val will also change employeeData:
console.log("Before:\n",employeeData)
val.address = "BTM Layout, Bangalore"
console.log("After Changing:\n",employeeData)


//Nested Objects: Object inside another object
console.log("\n------- Nested Objects -------")
const employee = {
    id:"NK103",
    firstname: "Honnur",
    lastName: "Ali",
    contact: "8123426862",
    address : {
        id: 1,
        addressLine1: "26th ward kottureshwara camp",
        city: "Gangavathi",
        state: "Karnataka",
        country: "India"
    }
}
console.log(employee)
console.log("\n------- Accessing Nested Objects -------")
console.log("Address:",employee.address)
console.log("City:",employee.address.city)
console.log("State:",employee.address["state"])
console.log("Country:",employee["address"]["country"])

//we can also have function as a value in object
console.log("\n------- Function As Value In Objects -------")
const newEmployee = {
    id:"NK103",
    firstname: "Honnur",
    lastName: "Ali",
    contact: "8123426862",
    address : {
        id: 1,
        addressLine1: "26th ward kottureshwara camp",
        city: "Gangavathi",
        state: "Karnataka",
        country: "India"
    },
    fullName: function(){
        return this.firstname+" "+this.lastName;
    }
}
console.log(newEmployee)
console.log(newEmployee.fullName())
console.log(typeof newEmployee)