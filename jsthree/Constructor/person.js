
class Person {
    constructor(id, name, email) {
            console.log("constructor executing successfully");
            this.id = id;
            this.name = name;
            this.email = email;
    }
    getPersonDetails() {
        console.log(`Person id ${this.id} Person Name ${this.name} Person Email ${this.email}`);
    }
}
let p1 = new Person(131, "Arjun", "Arjun@gmail.com")
let p2 = new Person(132, "Aravind", "Aravind@gmail.com")
console.log(p1);
p1.getPersonDetails();
console.log(p2);
p2.getPersonDetails();