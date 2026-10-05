import BankAccount from "./bankAccount.js";

// =========================
// Create Bank Account
// =========================

const account1 = new BankAccount("ACC001", "Bruno", 1000); // ("ACC001", "Bruno", 1000) these are arguments, the values we are passing to the constructor function when creating a new instance of the BankAccount class. The constructor function will use these arguments to initialize the properties of the new object.

// =========================
// Find HTML Elements
// =========================

const accountHolder = document.querySelector("#account-holder");
const accountNumber = document.querySelector("#account-number");
const accountBalance = document.querySelector("#account-balance");

const amountInput = document.querySelector("#amount");

const depositButton = document.querySelector("#deposit-button");
const withdrawButton = document.querySelector("#withdraw-button");

const transactionMessage = document.querySelector("#transaction-message");

// =========================
// Display Account
// =========================

function renderAccount() {
    accountHolder.textContent = account1.accountHolder;
    accountNumber.textContent = account1.accountNumber;
    accountBalance.textContent = `£${account1.balance}`;
}

renderAccount(); // Display account when page loads

// =========================
// reusable helper functions
// =========================

function showMessage(message) {
    transactionMessage.textContent = message;

    setTimeout(function () {
        transactionMessage.textContent = "";
    }, 3000);
}

// =========================
// Deposit Money
// =========================

depositButton.addEventListener("click", function () {

    const amount = Number(amountInput.value);

    if (amount <= 0 || Number.isNaN(amount)) {
        showMessage("Please enter an amount greater than £0.");
        return;
    }

    account1.deposit(amount);

    renderAccount();

    showMessage(`£${amount} successfully deposited.`);

    amountInput.value = "";

});

/* The logic is:
wait for click
      ↓
read input
      ↓
convert input to number
      ↓
deposit into account1
      ↓
update the HTML
      ↓
clear input
*/

// =========================
// Withdraw Money
// =========================

withdrawButton.addEventListener("click", function () {

    const amount = Number(amountInput.value);

    if (amount <= 0 || Number.isNaN(amount)) {
        showMessage("Please enter an amount greater than £0.");
        return;
    }

     if (amount > account1.balance) {
        showMessage("Insufficient funds.");
        return;
    }
    
    account1.withdraw(amount);

    renderAccount();

    showMessage(`£${amount} withdrawn successfully.`);

    amountInput.value = "";

});

/*
Why ./? The ./ means: “Look in the current folder.”
. → current folder
/ → go into
bankAccount.js → this file 

An important concept:
BankAccount
→ class / blueprint
new
→ create something from the blueprint
account1
→ instance / actual object

*/