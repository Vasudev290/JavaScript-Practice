class Parent {
    Money = "10cr";
}
class Child1 extends Parent{}
let c1 = new Child1();
console.log(c1.Money);

class Child2 extends Parent{}
let c2 = new Child2();
console.log(c2.Money);