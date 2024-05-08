//We can invoke one class to another class....

class Account {
    Open_Account() {
        console.log("Account opened successfully");
    }
}
class Savings_Account extends Account{   // Extends is the inheritance concept... (if extends is not there will get like (c1.open_account is not a function))...
     deposit() {
        console.log("Amount deposited")
    }
} 
let c1 = new Savings_Account();
c1.Open_Account();
c1.deposit();

class Cr_card_Account {}