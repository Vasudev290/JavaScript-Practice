class Parent {
    assets = '10cs';
    get_Qualities() {
        console.log("Parents has been good qulities");
    }
}
class Child extends Parent { }
let c1 = new Child();
console.log(c1.assets);
c1.get_Qualities();