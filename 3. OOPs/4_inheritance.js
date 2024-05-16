// Inheritance with Classes

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

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takeBusinessLoan(amount) {
        console.warn('Taking Business Loan : ' + amount);
    }
}

class SavingAccount extends BankAccount {
    transactionLimit = 10000;

    constructor(customerName, balance) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.warn('Taking Personal Loan : ' + amount);
    }
}

const tansenAccount = new CurrentAccount("Tansen Keshri", 1000);
const johnAccount = new SavingAccount("John Cena", 5000);

tansenAccount.deposit(5000);
tansenAccount.withdraw(2000);
tansenAccount.takeBusinessLoan(25000);
johnAccount.takePersonalLoan(15000);
console.warn(tansenAccount);



// ====================================
// Inheritance with prototypes

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan: ' + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan: ' + amount);
// };