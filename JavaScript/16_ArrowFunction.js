// Arrow Function : 
// Arrow function are annonymous function which allow us to write shorter and concise code.

function add(x, y){
    console.log(x+y);
}

add(2,3)

// Arrow Function
// If we have only one statment and if it returns a value, then no need of brackets and return keyword
// If we have parameters then we can pass inside parentheses
let addTwoNums = (x, y) => console.log(x + y);
addTwoNums(3, 4)

// If we have only one parameter, then no need of parentheses
let multiply = x => x * x;
let res = multiply(3)
console.log(res)


// this keyword in context of Arrow Function and Regular Function
// Regular Fun
var obj1 = {
    name: "Honnur Ali",
    address: "Gvt",
    age: 26,
    print : function(){
        console.log(this.name+" "+this.address)
    }
}

obj1.print()

// Arrow Fun
var obj2 = {
    name: "Honnur Ali",
    address: "Gvt",
    age: 26,
    print : () =>{
        console.log(this.name+" "+this.address)
    }
}
obj2.print()

// Main difference of "this"
// In Regular Fun this will refer to current object (that's why it prints name), but in Arrow fun this will refer to global object window(that's why it prints undefined)