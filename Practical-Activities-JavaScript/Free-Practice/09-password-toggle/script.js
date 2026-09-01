const passwordInput = document.querySelector('.password-input');
const toggleButton = document.querySelector('.toggle-password-button'); 

toggleButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Show Password';
  }
});

/*
Another way to implement the password toggle functionality is by using a different approach. Here's an alternative implementation:
toggleButton.addEventListener('click', () => {
  const isPasswordVisible = passwordInput.type === 'text';

  passwordInput.type =
    isPasswordVisible ? 'password' : 'text';

  toggleButton.textContent =
    isPasswordVisible ? 'Show Password' : 'Hide Password';
});


type     → what kind/state of input it is
===      → is exactly equal to?
? :      → short if/else (ternary operator)
*/