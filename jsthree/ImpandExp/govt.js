class Govt {
    tax = 18
    get_Discount() {
        console.log("Discount Available - Central");
    }
}

class KA_Govt extends Govt {
    tax = 18;
    tax = 15;
    get_Discount() {
        console.log("Discount Available - State");
    }
}
let s1 = new KA_Govt();
console.log(s1);
console.log(s1.tax);
s1.get_Discount();