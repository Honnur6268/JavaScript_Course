//Functions: executing a block of code to perform specific task is called functions
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}


//Types:
//1. Noraml Funcations
//2. Parameterised Function
//3. Anonymous function
//4. Callback function
//5. High Order function
//6. return function
//7. Fucnntion Expression
//8. Arrow Function

//we can create a function using function keyword
//we can call the function wtih function name followed by ()
// Example: function demo(){
// console.log("hello")
//}
//demo() --> calling function

// Normal Function
//If we have function with same name and if we call the function then the latest one will execute
console.log("\n-----------Normal Function------------");
function print() {
  console.log("Hello World");
}

function print() {
  console.log("Hello Javascript");
}

print(); // It will print "Hello Javascript"

//Parameterised Function
//If we pass more than provide arguments to parameters, the it will not throw any error.it will ignore rest of arguments
//we can pass number, String , boolean and function also as a argument to another function
console.log("\n-----------Parameterised Function------------");
function add(a, b) {
  console.log("a = ", a);
  console.log("b = ", b);
  console.log("Sum of two numbers: ", a + b);
}

add(10, 4);

//Function As a Argument to another function
console.log("\n-----------Function As a Argument------------");
function customFunction(args, a, b) {
  console.log(args);
  args(a, b);
}

customFunction(print);
customFunction(add, 2, 4);

//Anonymous Function - a function without having any name, we can pass it as argument to another function. See below example,
customFunction(function () {
  var x = 10;
  var y = 10;
  console.log("Anonymous Function", 10 * 10);
});

//Callback Function - Any function which we are passing as a argument to another function then it is called callback function.
console.log("\n-----------Callback Function------------");
customFunction(add, 7, 4); //--> here, add is a callback function

customFunction(function () {//--> here, annonymous function is a callback function
  print();
});

//High Order Function (HOF) - Any function which taking another function as argumnet then it is called HOF.
//If function need to be HOF then atleast it should accept one function as argument
console.log("\n-----------HOF Function------------");
customFunction(print); //--> here, customFunction is a HOF

//return function: function if its returning after execution of statments
console.log("\n-----------Return Function------------");
function getName(firstName, lastName) {
  var name = firstName + " " + lastName;
  return name;
}

var result = getName("Honnur", "Ali");
console.log("Name is: " + result);

//we can return annonymous function also
function returnAnnonymous(a, b) {
  return function () {
    var c = a + b;
    // return c;
    console.log("Sum from annonymous function:", c);
  };
}

var result = returnAnnonymous(10, 20);
// var res = result()
// console.log(res)
result();

//Function Expression
//--> In Javascript, we can't create annonymous function directly. Either we have to pass annonymous function as a argument to another
//    function or we have to return annonymous function form another function.
// Or else we can assign annonymous function to varaible this process is called Function Expression.
console.log("\n-----------Function Expression------------");
var fe = function (l, m) {
  //--> this is called Function Expression
  console.log(l - m);
};
fe(20, 10);

//Arrow Function
console.log("\n-----------Arrow Function------------");
const fun = () => {
  console.log("Hello");
};
fun();
