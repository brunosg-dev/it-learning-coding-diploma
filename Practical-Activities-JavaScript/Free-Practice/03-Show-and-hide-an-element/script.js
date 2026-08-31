const toggleButton = document.querySelector(".toggle-button");
const message = document.querySelector(".message");

toggleButton.addEventListener("click", function () {
  if (message.classList.contains("hidden")) {
    message.classList.remove("hidden");
  } else {
    message.classList.add("hidden");
  }
});

/*add() → put something in */
/*remove() → take something out */
/*contains() → check if something is there */