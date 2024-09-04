// Conditional Or Control Or Selection Statements
// Conditional statements are used to perform different actions based on different conditions.
// 1. if
// 2. if-else
// 3. else if
// 4. switch

//if
function isNumberIsEven(num){
    if(num % 2 === 0){
        console.log("Number is Even:",num)
    }
}

isNumberIsEven(10)

// if-else
function isNumberIsEvenOrOdd(num){
    if(num % 2 === 0){
        console.log("Number is Even:",num)
    }
    else{
        console.log("Number is Odd:",num)
    }
}
isNumberIsEvenOrOdd(3)

// if-else-if
function isNumberIsGreater(num){
    if(num > 50){
        console.log(num,"is greater than 50")
    }
    else if(num > 20 && num < 50){
        console.log(num,"is greater than 20 and less than 50")
    }
    else{
        console.log(num,"is less than 20")
    }
}
isNumberIsGreater(10)

// switch
function wish(code, name){
    switch(code){
        case "GM":
            console.log("Good Morning,",name)
        break;
        case "GA":
            console.log("Good Afternoon,",name)
        break;
        case "GE":
            console.log("Good Evening,",name)
        break;
        case "GN":
            console.log("Good Night,",name)
        break;
        default:
            console.log("No wish, sleep well",name)
    }
}

wish("GN", "Honnur Ali")

