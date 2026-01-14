class Account {

    constructor(accountNumber, accountType, balance) {
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    getAccountType() {
        return this.accountType;
    }

    getBalance() {
        return this.balance;
    }

    // Deposit money
    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }

    // Withdraw money
    withdraw(amount) {
        this.balance = this.balance - amount;
        return this.balance;
    }
}
