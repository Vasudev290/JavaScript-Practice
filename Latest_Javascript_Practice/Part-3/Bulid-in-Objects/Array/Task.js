//Array Tasks

//Task 1: Find all numbers greater than 50
const numbers = [25, 50, 75, 100, 125];
const greaterThen50 = numbers.filter(num => num > 50)
console.log(greaterThen50)  //[ 75, 100, 125 ]

//Task 2: Convert array of numbers to their squares
const nums = [2,3,4,5,6,7,8]
const squreValue = nums.map(num => num ** 2)
console.log(squreValue)// [ 4,  9, 16, 25, 36, 49, 64 ]

//Task 3: Find the sum of an array using reduce
const valueOfNum = [100, 200, 300];
const totalCalculate = valueOfNum.reduce((acc, val) => acc+val, 0)
console.log(totalCalculate)  //600

//Task 4: Reverse an array without modifying the original
const numbers1 = [12, 23, 45, 87, 65, 9]
const reversedValue = [...numbers1].reverse()
console.log(reversedValue)  //[ 9, 65, 87, 45, 23, 12 ]