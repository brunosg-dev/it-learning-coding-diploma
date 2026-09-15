import BankAccount from "./bankAccount.js";

const account1 = new BankAccount("ACC001", "Bruno");
const account2 = new BankAccount("ACC002", "Jane", 1000);


// Check starting balances
account1.checkBalance();
account2.checkBalance();


// Deposit money
account1.deposit(500);
account2.deposit(200);


// Withdraw money
account1.withdraw(200);
account2.withdraw(300);


// Test insufficient funds
account1.withdraw(1000);


// Check final balances
account1.checkBalance();
account2.checkBalance();

/*
Why ./? The ./ means: “Look in the current folder.”
. → current folder
/ → go into
bankAccount.js → this file 

*/