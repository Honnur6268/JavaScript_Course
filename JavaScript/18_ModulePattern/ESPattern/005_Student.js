// Named Export : 
// If we want export any variable and function with named export then e have to include "export" keyword before that variable and function
// If we want to access Named export then we have to import like,
// import {student} from "filename.js"
// For named export we must use curly braces in import statment
// A file may contain any numbers of named exports
// whatever name we export using named export, use that same name only in import statment in curly braces
// Either we can add before function or else at the end we can export
export var student = {
    name: "Honnur Ali",
    print: function(){
        console.log("Name of Student: ",this.name)
    }
}

// export {student}


// Defult export :
// If we want export any variable and function with default export then e have to include "export default" keyword before that variable and function
// If we want to access default export then we have to import like,
// import student from "filename.js"
// A file should contain only one default exports
// whatever name we export using default export, we can use that same name or custom name in import statment
// Either we can add before function or else at the end we can export
var empData = {
    name:"Honnur Ali",
    address: "GVT",
    age:26,
    compant: "NK"
}
// export default function getEmpData(){
//     console.log(empData)
// }

function getEmpAge(){
    console.log(empData.age)
}

export default getEmpAge;
