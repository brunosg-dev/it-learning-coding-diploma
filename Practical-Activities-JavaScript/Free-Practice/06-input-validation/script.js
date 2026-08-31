const inputField = document.querySelector('.name-input');
const submitButton = document.querySelector('.check-button');
const errorMessage = document.querySelector('.message');

submitButton.addEventListener('click', function() {
    const userInput = inputField.value;
    if (userInput === '') {
        errorMessage.textContent = 'Please enter your name.';
        errorMessage.classList.add('error');
        errorMessage.classList.remove('success');
    } else {
        errorMessage.textContent = `Hello, ${userInput}!`;
        errorMessage.classList.add('success');
        errorMessage.classList.remove('error');
    }
});

/*
Find the input field.
Find the submit button.
Find the message paragraph.

When the submit button is clicked:
  read what the user typed in the input field.

  If the input is empty:
    show the message "Please enter your name."
    add the error class so the message becomes red.
    remove the success class in case it was added before.

  Otherwise:
    show a greeting using the user's name.
    add the success class so the message becomes blue.
    remove the error class in case it was added before.
*/