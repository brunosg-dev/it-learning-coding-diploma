const textInput = document.querySelector('.text-input');
const characterCount = document.querySelector('.character-count');

textInput.addEventListener('input', () => {
    const currentText = textInput.value;
    const textLength = currentText.length;
    characterCount.textContent = `${textLength} characters`;
})

/*
"input" event → react whenever the input value changes
length        → how many characters/items there are
*/