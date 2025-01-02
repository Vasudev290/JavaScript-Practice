//Let
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // Error: x is not defined
//block level scope


let score = 50;
console.log(score); // Output: 50

score = 100;
console.log(score); // Output: 100



for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// console.log(i); // Error: i is not defined



//Const
const name = "Alice";
console.log(name); // Output: Alice

// name = "Bob"; // Error: Assignment to constant variable


const person = { name: "Alice", age: 25 };
person.age = 30; // This is allowed
console.log(person); // Output: { name: 'Alice', age: 30 }

// person = {}; // Error: Assignment to constant variable


const colors = ["red", "blue"];
colors.push("green"); // This is allowed
console.log(colors); // Output: ['red', 'blue', 'green']

// colors = ["yellow"]; // Error: Assignment to constant variable



const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// add = (a, b) => a * b; // Error: Assignment to constant variable
