const practiceImage = document.querySelector('.practice-image');
const changeButton = document.querySelector(".change-image-button");

/*changeButton.addEventListener("click", () => {
  practiceImage.src = "image-2.jpg";
});*/

changeButton.addEventListener("click", () => {
    if (practiceImage.src.includes("image-1.jpg")) {
        practiceImage.src = "image-2.jpg";
    } else {
        practiceImage.src = "image-1.jpg";
    }
    });

     //cludes() → check whether something contains this value/text