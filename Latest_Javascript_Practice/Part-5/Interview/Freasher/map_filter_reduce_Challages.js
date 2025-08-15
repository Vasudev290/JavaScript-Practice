//Easy
//==================
//with map
//map Given: [1, 2, 3, 4]
const gievnValue = [1, 2, 3, 4];
const output = gievnValue.map((val) => val * 2);
console.log(output);
// Output: [2, 4, 6, 8]

//filter Given: [1, 2, 3, 4, 5, 6]
const givenValueOfFilter = [1, 2, 3, 4, 5, 6];
const output1 = givenValueOfFilter.filter((con) => con % 2 === 0);
console.log(output1);
// Output: [2, 4, 6]

//Reduce Given: [10, 20, 30]
const givenValueOfReduce = [10, 20, 30];
const output2 = givenValueOfReduce.reduce((acc, curr) => acc + curr, 0);
console.log(output2);
// Output: 60

//Medium
// Given: ['apple', 'banana', 'cherry']
const fruits = ["apple", "banana", "cherry"];
const output3 = fruits.map((fruit) => fruit.toUpperCase());
console.log(output3);
// Output: ['APPLE', 'BANANA', 'CHERRY']

// Given: ['Ram', 'Sita', 'Lakshman', 'Hanuman']
const ramayanam = ["Ram", "Sita", "Lakshman", "Hanuman"];
const output4 = ramayanam.filter((ram) => ram.length > 4);
console.log(output4);
// Output: ['Lakshman', 'Hanuman']

// Given: [5, 8, 12, 3, 7]
const maxValue = [5, 8, 12, 3, 7];
const output5 = maxValue.reduce((acc, curr) => {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(output5);
// Output: 12

//Advance
// Given: [1, 2, 3, 4, 5, 6] => Get Squares of Even Numbers

const Squares = [1, 2, 3, 4, 5, 6];
const output6 = Squares.filter((num) => num % 2 === 0).map((num) => num * 2);
console.log(output6);

// Output: [4, 16, 36]

//Reduce
// Given: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const fruitCount = ["apple", "banana", "apple", "orange", "banana", "apple"];
const output7 = fruitCount.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(output7);
// Output: { apple: 3, banana: 2, orange: 1 }

// Given: [[1, 2], [3, 4], [5, 6]]
const flatReduce = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const output8 = flatReduce.reduce((acc, curr) => {
  if (Array.isArray(curr)) {
    acc.push(...curr);
  } else {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(output8);
// Output: [1, 2, 3, 4, 5, 6]

const cart = [
  { item: "Laptop", price: 50000, qty: 1 },
  { item: "Mouse", price: 1500, qty: 2 },
  { item: "Keyboard", price: 2500, qty: 1 },
];
const output9 = cart.reduce((acc, curr) => {
  return acc + curr.price * curr.qty;
}, 0);
console.log(output9);
// Output: 55500

// Given: [1, 2, 2, 3, 4, 4, 5] with filter
const removeDuplicate = [1, 2, 2, 3, 4, 4, 5];
const output10 = removeDuplicate.filter((num, index, arr) => {
  return arr.indexOf(num) === index;
});
console.log(output10);
// Output: [1, 2, 3, 4, 5]

// Given: [1, 2, 2, 3, 4, 4, 5] with reduce
const removeDuplicateReduce = [1, 2, 2, 3, 4, 4, 5];
const output11 = removeDuplicateReduce.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(output11);

// Given: [5, 10, 15, 20] Use filter → map → reduce in one chain.
// Step 1: Filter numbers greater than 10
// Step 2: Double them
// Step 3: Find their sum
// Output: 70
const array = [5, 10, 15, 20];
const output12 = array
  .filter((num) => num > 10)
  .map((num) => num * 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(output12);

