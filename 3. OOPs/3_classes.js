class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const tansenAccount = new BankAccount("Tansen Keshri", 1000);

tansenAccount.deposit(5000);
tansenAccount.withdraw(2000);

console.warn(tansenAccount);