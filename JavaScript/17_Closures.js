// Closure : 
// It is a technique to access scope of outer function inside the inner function( outer maybe parent function or global variables)
// Or It is a technique define a function inside another function

let city = "Gvt"
function parent(){
    let name = "Honnur Ali";
    console.log("Outer Fun - Name:", name)
    console.log("Outer Global - City:", city)

    function child(a, b){
        console.log(a + b);
        console.log("Inner Fun - Name:", name)
        console.log("Inner Global - City:", city)
    }

    return child;
}

let innerFun = parent()
innerFun(2, 3)