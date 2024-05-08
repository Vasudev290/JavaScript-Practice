class Address {
    constructor(hno, street, area, city, state, pin) {
        console.log("Address class const");
        this.hno = hno;
        this.street = street;
        this.area = area;
        this.city = city;
        this.state = state;
        this.pin = pin
    }
    update_Address() {}
}
class Savings_Account { 
    constructor(acc_id, acc_name, amount, Address){
        console.log("Saving_Account class const");
        this.acc_id = acc_id;
        this.acc_name = acc_name;
        this.amount = amount;
        this.Address = Address;


    }
}
let c1 = new Savings_Account(131, "Arjun", 10000, new Address(69, "Nellur puram", "Jagadish nagar", "Bangaluru", "Karnataka", 560075 ));
console.log(c1);

module.exports = Address