const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is Alice and I am 25 years old.



const a = 5, b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); 
// Output: The sum of 5 and 10 is 15.



const multiline = `This is a
multiline string
using template literals.`;
console.log(multiline);
// Output:
// This is a
// multiline string
// using template literals.



const person = { name: "John", age: 30 };
const greet = `Hello, ${person.name}! ${person.age > 18 ? "You're an adult." : "You're a minor."}`;
console.log(greet); // Output: Hello, John! You're an adult.




const greet1 = (name) => `Hello, ${name}!`;
console.log(greet1("Alice")); // Output: Hello, Alice!
