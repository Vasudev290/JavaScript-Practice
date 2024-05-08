// Another sample of inheritance concept....!

class Customer{
    constructor() {
        console.log("Parent class construtor");
    }
    get_Address() {
        console.log("Address Method");
    }
}
class Savings_Account extends Customer { 
    constructor() {
        super()                              //if we want to invoke two class constructor like parent & child use ( Super() key word...)    
        console.log("Child class construtor");
    }
}
new Savings_Account()