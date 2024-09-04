// this : 
// In JS, this keyword refers to an object (by default window object)
// The this keyword refers to different objects depending on how it is used:
    // In an object method, this refers to the object.
    // Alone, this refers to the global object.
    // In a function, this refers to the global object.
    // In a function, in strict mode, this is undefined.
    // In an event, this refers to the element that received the event.
    // Methods like call(), apply(), and bind() can refer this to any object.
// Note : "this" is not a variable. It is a keyword. You cannot change the value of this.

// this in object
// When used in an object method, this refers to the current object.
// In the below example , this refers to the employee object.
// Because the print method is a method of the employee object.
const employee = {
    firstName: "Honnur",
    lastName: "Ali",
    age: 26,
    company: "Neokred",
    dept: "IT",
    role: "SDE2",
    print: function(){
        console.log("Employee Name:",this.firstName,this.lastName);
    }
}

employee.print()

// this used alone
// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:
let x  = this;
console.log("alone:",x)

// In strict mode, when used alone, this also refers to the global object:
"use strict";
let y = this;
console.log("strict:",y)

// this in Function : In a function, the global object is the default binding for this.
function getName(){
    let name = "Bhavana V";
    console.log(this.name)
}
getName()

// Explicit Function Binding: call(), apply(), bind()
// call(): 
    // With the call() method, you can write a method that can be used on different objects.
    // The call() method is a predefined JavaScript method.
    // It can be used to invoke (call) a method with an owner object as an argument (parameter)
    // With call(), an object can use a method belonging to another object.

    // call() : take 2 args
    // 1. thisObj : The object to be used as the current object.
    // 2. argArray : A list of arguments to be passed to the method.
    // dosen't return any thing
console.log("\n----------- call() ----------")
// Ex: 1
const obj1 = {
    z: 100
}

const obj2 = {
    z: 400
}
function add(x, y){
    console.log(x + y + this.z)
}

add(10, 20) // here the add function gets confused on which object value should i call.
add.call(obj1, 10 ,20) // 130
add.call(obj2, 10 ,20) // 430

// Ex: 2 : This example calls the print method of employee, using it on employee1 and employee2:
const employee1 = {
    firstName: "Bhavana",
    lastName: "V"
}

const employee2 = {
    firstName: "John",
    lastName: "Doe"
}

employee.print.call(employee1)
employee.print.call(employee2)

// with arguments
const getEmpData = {
    print : function(role, city){
        console.log("Emp details:", this.firstName,this.lastName,"and role is",role,"and city is",city)
    }
}
getEmpData.print.call(employee1, "FE DEV", "Bangalore")
getEmpData.print.call(employee2, "Associate","US")

// apply(): 
    // With the apply() method, you can write a method that can be used on different objects.
    // The apply() method is similar to the call() method 
   
    // The Difference Between call() and apply() is
    // The call() method takes arguments separately.
    // The apply() method takes arguments as an array.
    
    // The apply() method is very handy if you want to use an array instead of an argument list.

    // apply() takes 2 args:
    // 1. @param thisArg:  The object to be used as the this object.
    // 2. @param argArray: A set of arguments to be passed to the function.
    // dosen't return any thing

console.log("\n----------- apply() ----------")
getEmpData.print.apply(employee1, ["Support Associate", "Kolar"])


// Function Borrowing:
// bind(): 
    // With the bind() method, an object can borrow a method from another object.
    // in the below example, The employee1 object borrows the print method from the employee object:

    // bind(): takes 2 args
    // 1. @param thisArg: An object to which the this keyword can refer inside the new function.
    // 2. @param argArray: A list of arguments to be passed to the new function.
    // returns function reference 
console.log("\n----------- bind() ----------")
    let emp = getEmpData.print.bind(employee1, "FE", "Kolar")
    emp()

    // Sometimes the bind() method has to be used to prevent losing this.
    // When a function is used as a callback, this is lost.
    // This example will try to display the employee name after 3 seconds, but it will display undefined instead:
    setTimeout(employee.print, 3000)

    // The bind() method solves this problem.
    // In the following example, the bind() method is used to bind employee.print to employee.
    // This example will display the employee name after 3 seconds:
    let emp2 = employee.print.bind(employee2)
    setTimeout(emp2, 3000)

    // we can call bind in 4 ways
    // 1.
    let e1 = getEmpData.print.bind(employee1)
    e1("FE developer", "Kolar")

    // 2. 
    let e2 = getEmpData.print.bind(employee1, "DEV", "Btm layout")
    e2()

    // 3.
    getEmpData.print.bind(employee1, "DEVELOPER", "Btm layout")()

    /// 4.
    getEmpData.print.bind(employee2)("BE", "UK")
