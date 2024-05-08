class Parent {
    constructor() {
        console.log("Parent clas const");
    }
    get_Assets() {
        console.log("10cr");
    }
}
class Child extends Parent{
    constructor() {
        super();
        console.log("Child class const");
    }
    get_Assets() {
        console.log("15cr");
    }
}

let A = new Child();
A.get_Assets();