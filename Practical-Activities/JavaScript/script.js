//this is an object with a method 
const person = {
    name: "Bruno",
    age: 35,
sayHello: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.sayHello();

window.onload = function() {
    
    console.log("Page loaded successfully.");
}

