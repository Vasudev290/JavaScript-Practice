// Built-in Array Methods

//forEach() - Executes a function once per element in the array (does not return a new array).
const numbers = [1,2,3,4,5]
console.log("forEach Method")

//example -1 print all the array elements
numbers.forEach(num => console.log(num))

//example -2 - index, value and array;
numbers.forEach((num, index, arr) => console.log(`Index: ${index}, Value: ${num}, array: ${arr}`))

//example -3 - sum of all the elements
let sum =0;
numbers.forEach(num => sum+= num);
console.log(sum)

//exmaple -4 -modify array element;
numbers.forEach((num, index, arr) => arr[index] = num * 2)
console.log(numbers)


//map() - Creates a new array by applying a function to each element.
console.log("Map method")
const numbers1 = [1, 2, 3, 4, 5, 6, 7]

//example -1 double the each value.
const doubleValue = numbers1.map(num => num*2);
console.log(doubleValue)

//example -2 convert numbers to strings.
const strNumber = numbers1.map(num => `Number ${num}`);
console.log(strNumber)
//console.log(typeof(strNumber))

//example -3 Extract specific property from objects
const userDetails = [{name: "Vasu", age: 23}, {name: "Dev", age: 23}]

//index value
const indexValue = userDetails[0]
console.log(indexValue)

const names = userDetails.map(user => user.name);
console.log(names)

//example -4
const sqrtNumbers = numbers1.map(num => Math.sqrt(num))
console.log(sqrtNumbers)

//filter() - Returns a new array with elements that satisfy a given condition.
console.log("filter method")
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//example -1 Get even numbers
const evenNumbers = numbers2.filter(num => num % 2 === 0)
console.log(evenNumbers)

//example -2
const mixedArray = [0, 1, false, 2, "", 3]
const trulyValues = mixedArray.filter(Boolean)
console.log(trulyValues)

//example -3
const word = ["apple", "is", "a", "fruit"];
const longestWord = word.filter(words => words.length > 3);
console.log(longestWord)


//reduce() - Executes a function to reduce the array to a single value.
console.log("Reduce method")
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//example -1
const total = numbers3.reduce((acc, num) => acc + num, 0)
console.log(total)

//example -2
const maxNumber = numbers3.reduce((max, num) => num > max ? num : max, numbers[0]);
console.log(maxNumber);

//example -3
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened); 


// pop() & push()
// pop() - removes the last element from an array.
// push() - adds elements to the end of an array.

const colors = ["red", "blue", "green"];

//example -1
colors.pop()
console.log(colors)  //["red", "blue"]

//example -2
colors.push("Yellow")
console.log(colors)  //["red", "blue", "yellow"]

//example -3
const emptyArr = [];
console.log(emptyArr.pop())   //undefined

//example -4
colors.push("purple", "pink")
console.log(colors)  //[ 'red', 'blue', 'Yellow', 'purple', 'pink' ]


// shift() & unshift()
// shift() removes the first element.
// unshift() adds elements at the beginning.
const fruits = ["apple", "banana", "mango"]

//example -1
fruits.shift()
console.log(fruits)  //["banana", "mango"]

//example -2
fruits.unshift("Graps");
console.log(fruits)   //[ 'Graps', 'banana', 'mango' ]

//example -3
console.log([].shift()) //undefined

//example -4
fruits.unshift("Orange", "lemon")
console.log(fruits)  //[ 'Orange', 'lemon', 'Graps', 'banana', 'mango' ]


// slice() & splice()
// slice() returns a shallow copy of an array.
// splice() modifies the original array.

//example -1
const items = ['a', 'b', 'c', 'd', 'e']
console.log(items.slice(1, 4))   //[ 'b', 'c', 'd' ]

//example -2
const copy = items.slice();
console.log(copy);  //[ 'a', 'b', 'c', 'd', 'e' ]

//example -3  -splice() to remove elements
items.splice(1, 2)
console.log(items)  //[ 'a', 'd', 'e' ]

//example -4 - splice() to insert elements
items.splice(1, 0, 'x', 'y')
console.log(items)  //[ 'a', 'x', 'y', 'd', 'e' ]
 
