function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount) {
    //     this.balance += amount;
    // }

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // }
}

const tansenAccount = new BankAccount('Tansen Keshri');
const johnAccount = new BankAccount('John Cena', 1000);

BankAccount.prototype.deposit = function (amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount){
    this.balance -= amount;
}

tansenAccount.deposit(2000);

console.warn(tansenAccount);