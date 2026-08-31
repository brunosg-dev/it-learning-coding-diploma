let count = 0;
const countDisplay = document.querySelector(".count");
const increaseButton = document.querySelector(".increase-button");
const decreaseButton = document.querySelector(".decrease-button");

increaseButton.addEventListener("click", function () {
    count += 1;
    countDisplay.textContent = count; 
});

decreaseButton.addEventListener("click", function () {
    count -= 1;
    countDisplay.textContent = count;
});