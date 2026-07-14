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


// =============================
// If / Else Practice
// =============================

//If the score is greater than or equal to 50, run the first block.
//If not, JavaScript runs the else block.
let score = 75;

if (score >= 50) {
    console.log("you passed the test!");
} else {
    console.log("you failed the test!");
}


// =============================
// Switch Statement Practice
// =============================

//A switch is useful when you want to compare one value against multiple possible cases.

let day = "Sunday";

switch (day) { /* This line checks the value: */
    case "Monday": /* Each case is one possible match. */
        console.log("Today is Monday. Start the week strong!");
        break; /*The break stops JavaScript from continuing into the next case. */

    case "Tuesday":
        console.log("Today is Tuesday. Keep going!");
        break;

    case "Friday":
        console.log("Today is Friday. the weekend is close!");
        break;

    case "Sunday":
        console.log("Today is Sunday. Time to relax!");
        break;
    
    default:
        console.log("It's a regular day."); /* The default runs if none of the cases match. */
}
