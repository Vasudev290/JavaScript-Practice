

class Saving_Account {
    main_bal = 69999.99
    open_Account() {
        console.log("Account open successfully");
     }
    deposit() {
        console.log("Amount deposited 5000");
     }
    withdraw() {
        console.log("Amount withdraw 2500 ");
     }
    getStatement(){ }
    getBal(){ }
    Close_Account(){ }
}
let Arjun = new Saving_Account;
let Aravind = new Saving_Account;

console.log(Arjun.main_bal);
console.log(Aravind.main_bal);

Arjun.open_Account()
Arjun.deposit()
Arjun.withdraw()