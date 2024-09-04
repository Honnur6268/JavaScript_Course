//Array
// Array is a special variable, which can consist of collection of elements similar or different types
// Array uses numbered indexes
// We can create an array in 2 ways
// 1. Using Array Literals
// 2. Using Array constructor (new Array())

// Using Array Literals
console.log("\n------- Array Literals -------");
const names = ["Honnur", "Bhavana", "Zoya", true, 1000];
console.log(names);

//we can print length of array
console.log("Length:", names.length);

//Using Array Constructor
console.log("\n------- Array Constructor -------");
const contacts = new Array("8123426862", "8073379047", "9164130687");
console.log(contacts);

console.log("\n------- Array Constructor Difference-------");
const address = new Array(10); //--> It will create 10 empty items or undefined
console.log(address);

//Accessing Array Elemets using index
console.log("\n------- Accessing Array Elemets via Index -------");
console.log(names[2]);

//We can modify  Array Elements
console.log("\n------- Modifying Array Elements -------");
console.log("Before Modifying\n", names);
names[0] = "Honnur Ali";
console.log("\nAfter Modifying\n", names);

//Array Functions OR Methods
console.log("\n------- Array Functions OR Methods -------");
// 1. push(item) --> To add new elements to end of an Array
names.push("Osman Gazi");
console.log("\npush(item) -->", names);

// 2. unshift(item) --> To add new element at the start of an array
names.unshift("Boran");
console.log("\nunshift(item) -->", names);

// 3. pop() --> To remove the last element from an array
const item = names.pop();
console.log("\npop() -->", names);
console.log("Removed element:", item);

// 4. shift() --> To remove the first element from an array
const rmItem = names.shift();
console.log("\nshift() -->", names);
console.log("Removed element:", rmItem);

// 5. splice(beginIndex, noOfElementsToRemove, ElementToAdd) --> To add or remove specific element from or to an array
//It will modify our exisisting array
const states = ["Karnataka", "Andra Pradesh", "Telangana", "Maharastra"];
console.log("\nStates:", states);

//remove elements
states.splice(1, 2);
console.log("\nStates:", states);

//add elements
states.splice(1, 0, "Mumbai");
// states.splice(1, 0, "Andra Pradesh","Telangana")
states.splice(2, 0, "Delhi");
console.log("\nStates:", states);

// 6. slice(beginIndex, lastIndex) --> Extract the elements from beginIndex to lastIndex from an array and return new array.
//It will not modify existing array
//The lastIndex will be excluded in result
const newStates = states.slice(1, 4);
console.log("\nStates:", states);
console.log("\nNew States:", newStates);

// 7. indexOf(i) --> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// If we have same element in an array then the first occurence of index will return
console.log("\nStates:", states);
console.log("indexOf(Karnataka) -->", states.indexOf("Karnataka"));

// 8. lastIndexOf() --> Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
states.push("Karnataka");
console.log("\nStates:", states);
console.log("lastIndexOf(Karnataka) -->", states.lastIndexOf("Karnataka"));

// 9. includes(item) --> Determines whether an array includes a certain element, returning true or false as appropriate.
console.log("\nStates:", states);
console.log("includes(Karnataka) -->", states.includes("Karnataka"));

// 10. forEach() --> Performs the specified action for each element in an array.
//It will take callbakc function with item and index specified
// It will never return any resulting array
console.log("\nforEach() -->");
states.forEach(function (item, index) {
  console.log(index, "--", item);
});

// 11. toString() --> Returns a string representation of an array.
console.log("\ntoString() -->", states.toString());

// 12. at() -->  Returns element specifed at index
console.log("\nStates:", states);
console.log("\nat() -->", states.at(1));

// 13. join() --> Adds all the elements of an array into a string, separated by the specified separator string.
console.log("\ntjoin() -->", states.join(" - "));

// 14. map(callbackFn) --> creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// Calback Function takes 3 arguments,
// 1. The item value
// 2. The item index
// 3. The array itself
// returns new array without modifying original array
// The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
//Always returns new array as a result
console.log("\n------- map() function -------");
const numbers = [10, 20, 30, 40, 50];
const result = numbers.map(function (value, index) {
  return value + 5;
});
console.log("Original Array:", numbers);
console.log("Result:", result);

function multiply(value, index, numbers) {
  //if only value is passed then other 2 can be ommited
  return value * 5;
}

const multi = numbers.map(multiply);
console.log("\nOriginal Array:", numbers);
console.log("Multi Numbers:", multi);

// 15. filter(callbackFn) --> it will return new array based on condition.
// It will only consider true values in new array
// It takes callback function as a argument and checks the condition and return boolean either true or false and true values will be
// stored in new resulting array.
// Calback Function takes 3 arguments,
// 1. The item value
// 2. The item index
// 3. The array itself
// returns new array without modifying original array
console.log("\n------- filter() function -------");
const res = numbers.filter(function (value, index, numbers) {
  return value > 30;
});
console.log("\nOriginal Array:", numbers);
console.log("res array:", res);

function getGreaterValue(value, index, numbers) {
  return value > 20;
}

const r = numbers.filter(getGreaterValue);
console.log("\nOriginal Array:", numbers);
console.log("res array:", r);

// 16. reduce(calbackFn, initialValue) --> runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.
// The reduce() method does not reduce the original array.
// initialValue — If initialValue is specified, it is used as the initial value to start the accumulation.
//  The first call to the callbackfn function provides this value as an argument instead of an array value.
// callback function takes 4 args,
// 1. The total (the initial value / previously returned value)
// 2. The item value
// 3. The item index
// 4. The array itself
// 3 and 4 are optional
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
console.log("\n------- reduce() function -------");
function sum(initialValue, value) {
  return initialValue + value;
}
const sumOfNums = numbers.reduce(sum);
console.log("\nOriginal Array:", numbers);
console.log("SUM:", sumOfNums);

const sumOfNumsWithInitialValue = numbers.reduce(sum, 20);
console.log("\nOriginal Array:", numbers);
console.log("SUM:", sumOfNumsWithInitialValue);

// 17. reduceRight() --> same as reduce() function except, The reduceRight() works from right-to-left in the array.

// 18. keys() --> method returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (let x of keys) {
  console.log(x);
}

// 19. entries() --> Create an Array Iterator, and then iterate over the key/value pairs
// The entries() method returns an Array Iterator object with key/value pairs:
// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]
// The entries() method does not change the original array.
const f = fruits.entries();
console.log(f);
for (let x of f) {
    console.log(x);
  }


// Spread (...) Operator: The ... operator expands an iterable (like an array) into more elements:
//Copies value of one array into another array
console.log("\n------- Spread (...) operator -------");
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)


// Functions
// 1. push()
// 2. unshift()
// 3. pop()
// 4. shift()
// 5. splice()
// 6. slice()
// 7. indexOf()
// 8. lastIndexOf()
// 9. includes()
// 10. forEach()
// 11. toString()
// 12. at()
// 13. join()
// 14. map()
// 15. filter()
// 16. reduce()
// 17. reduceRight()
// 18. keys()
// 19. entries()