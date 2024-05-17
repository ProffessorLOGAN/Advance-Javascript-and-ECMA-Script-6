class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Not valid Amount!!');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) {
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount) {
        // Logic
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const tansenAccount = new CurrentAccount('Tansen Keshri', 2000);
tansenAccount.takeBusinessLoan(50000);
console.log(tansenAccount);