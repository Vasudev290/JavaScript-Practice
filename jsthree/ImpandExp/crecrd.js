const Address = require('./bank')  //ES5
class Credit_card {
    constructor(CC_id, CC_name, Address) {
        this.CC_id = CC_id;
        this.CC_name = CC_name;
        this.Address = Address;
    }
}
let cc1 = new Credit_card('C132', "Arjun", new Address(56, "Narasimha nagar","Puliyanthope", "Chennai", "Tamilnadu", 600012));
console.log(cc1);