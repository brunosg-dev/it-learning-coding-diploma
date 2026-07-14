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


// =============================
// Arrays Practice
// =============================
//An array stores multiple values in one variable. Array positions start from 0.

// Array of strings
const skills = ["HTML", "CSS", "JavaScript", "React"];

// Array of numbers
const scores = [85, 90, 78, 92];

// Array of mixed data types
const studentInfo = ["Bruno", 35, true, "Coding Diploma"];

// Accessing array elements
console.log("Skills:", skills);
console.log("Scores:", scores);
console.log("Student Info:", studentInfo);
console.log("First skill:", skills[0]);
console.log("Second score:", scores[1]);
console.log("Student Name:", studentInfo[0]);
console.log("Student Age:", studentInfo[1]);

// =============================
// Objects Practice
// =============================

// An object stores related information using property names and values.
// This creates an object called person. An object stores information using key-value pairs.
let person = {
  firstName: "Bruno",
  lastName: "Silva Gomes",
  age: 35,
  city: "London",

  // This is a method because it is a function inside an object.

  fullName: function() {
    return this.firstName + " " + this.lastName; /* It's a method, because it is a function inside the person object.*/
  }
};
// return means: Send a value back from the function/method.
// Inside the object, this means: This current object.
// The + is joining strings together. This is called string concatenation. "Bruno" + "Gomes" would produce: BrunoGomes, No space.
// So we add: " " That is just an empty space between quotation marks."Bruno" + " " + "Silva Gomes" produces: Bruno Silva Gomes.

// accesing object properties
console.log("First Name:", person.firstName); /* Then when you write: person.firstName you are saying:
Go inside the person object and get the firstName property.*/
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("City:", person.city);

// calling the method to get the full name
console.log("Full Name:", person.fullName());

// =============================
// Loop Through an Array Practice
// =============================
//A loop repeats code.

const topics = ["Variables", "Functions","Conditionals", "Arrays", "loops"];
// let i = 0; This part creates the loop counter. This means the loop starts at position 0.
for (let i = 0; i < topics.length; i++) {
    console.log("I am practicing:", topics[i]);
}

// i < topics.length; This part tells the loop how long to continue. Keep looping while i is less than the number of items in the array.
// i++; This part increases the loop counter by 1 each time the loop runs. This means the loop will move to the next position in the array each time it runs.
// topics[i]; This part tells the loop what to do each time it runs. In this case, it prints the current topic to the console. try changing the value of i to 1 and see what happens.