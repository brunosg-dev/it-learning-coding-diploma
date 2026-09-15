class BankAccount {

    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: £${amount}. New balance: £${this.balance}`);
}

withdraw(amount) {
    if (amount > this.balance) {
        console.log(`Insufficient funds. Current balance: £${this.balance}`);
    } else {
        this.balance -= amount;
        console.log(`Withdrew: £${amount}. New balance: £${this.balance}`);
    }
}

checkBalance() {
    console.log(`Account balance for ${this.accountHolder}: £${this.balance}`);
}
}

export default BankAccount;


// class names conventionally use PascalCase: BankAccount, UserProfile, ShoppingCart

/*What is a parameter?
A parameter is a temporary name that represents information a function or method expects to receive.
Everyday meaning:
“I need you to give me some information when you use me.” 

What does default mean? “This is the main thing this file is providing.”
*/