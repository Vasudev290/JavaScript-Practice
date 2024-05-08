class Account {
    constructor(id,Name) {
        console.log("Parent class const");
        this.id = id;
        this.Name = Name;
    }
}
class Savings_Account extends Account {
    main_Bal = 500
    constructor(id,Name,Amount) {
        super(id,Name);
        console.log("Child class");
        this.Amount = Amount;
    }
    get_Bal() {
        return this.Amount - this.main_Bal
    }
}
 class Current_Account  extends Account{
    main_Bal = 25000;
    constructor(id,Name,Amount) {
         super(id,Name);
         this.Amount = Amount;
    }
    get_Bal(){
        return this.Amount - this.main_Bal;
    }
 }
let c1 = new Savings_Account(131, "Arjun", 55000);
console.log(c1);

let c2 = new Current_Account(132,"Aravind", 65000); 
console.log(c2);
