// =============================
// Variables Practice
// =============================

// var can be used to declare a variable, but it is older JavaScript syntax.
var city = "London";

//var, let, and const all create variables, but today I will mostly use let and const.
// let is used when the value may change later.`
let age = 35;

// const is used when the value will not change.
const name = "Bruno"

// different data types
let isStudent = true; // boolean
let courseName = "Coding Diploma"; // string
let completedLessons = 5; // number

//This is just printing each variable with a clear label, so the console is easier to read.
console.log("City:", city);
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Student:", isStudent);
console.log("Course Name:", courseName);
console.log("Completed Lessons:", completedLessons);

// =============================
// Functions Practice
// =============================

// Named function
function greetUser() {
    console.log("Hello, welcome to JavaScript practice!");
}

greetUser(); // Call the function to execute it

// Anonymous function stored in a variable
// It is called anonymous because the function itself has no direct name.
const sayGoodbye = function() {
    console.log("Goodbye, see you next time!");
};
sayGoodbye();

// built-in function
alert("JavaScript practice file loaded!");


