//find the button 
const changeButton = document.querySelector(".change-button");
const message = document.querySelector(".message");

changeButton.addEventListener("click", function () {
  message.textContent = "You clicked the button!";
});