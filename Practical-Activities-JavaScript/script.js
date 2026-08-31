const nameInput = document.querySelector('.name-input');
const greetButton = document.querySelector('.greet-button');
const message = document.querySelector(".message");

greetButton.addEventListener("click", function() {
const userName = nameInput.value;
const greeting = `Hello, ${userName}!`;

message.textContent = greeting;
})