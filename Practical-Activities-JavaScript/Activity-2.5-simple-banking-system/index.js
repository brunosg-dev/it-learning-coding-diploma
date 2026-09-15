import BankAccount from "./bankAccount.js";

// =========================
// Create Bank Account
// =========================

const account1 = new BankAccount("ACC001", "Bruno", 1000);

// =========================
// Find HTML Elements
// =========================

const accountHolder = document.querySelector("#account-holder");
const accountNumber = document.querySelector("#account-number");
const accountBalance = document.querySelector("#account-balance");

const amountInput = document.querySelector("#amount");

const depositButton = document.querySelector("#deposit-button");
const withdrawButton = document.querySelector("#withdraw-button");


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
// Deposit Money
// =========================

depositButton.addEventListener("click", function () {

    const amount = Number(amountInput.value);

    account1.deposit(amount);

    renderAccount();

    amountInput.value = "";

});


// =========================
// Withdraw Money
// =========================

withdrawButton.addEventListener("click", function () {

    const amount = Number(amountInput.value);

    account1.withdraw(amount);

    renderAccount();

    amountInput.value = "";

});

/*
Why ./? The ./ means: “Look in the current folder.”
. → current folder
/ → go into
bankAccount.js → this file 

*/