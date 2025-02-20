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

//Task -5: Double each number in an array using map()
const numb = [1,2,3,4,5]
const double = numb.map(nu => nu * 2)
console.log(double)  //[ 2, 4, 6, 8, 10 ]

//Task -6: Filter out odd numbers using filter()
const numbs = [12, 3, 7, 14, 9, 20];
const oddNumber = numbs.filter(num => num % 2 !== 0)
console.log(oddNumber)  //[ 3, 7, 9 ]

//Task -7: Find the total sum of an array using reduce()
const expensesValue = [768, 435, 879, 56]
const calRed = expensesValue.reduce((arr, value) => arr+value, 0)
console.log(calRed) //2138

//Task -8: Convert an array of numbers into strings using map()
const values = [1, 2, 3, 4, 5];
const numberIntoString  = values.map(num => console.log(`Numbers ${num}`))

//Task -9: Find the longest word in an array using reduce()
const words = ["apple", "banana", "strawberry", "grape"];
const longWords = words.reduce((long, current) => current.length > long.length ? current : long)
console.log(longWords)  //strawberry

//Task -10: Remove duplicate values using filter() and indexOf()
const numberArray = [1, 2, 3, 1, 4, 2, 5];
const removeDuplicate = numberArray.filter((num, index, arr) => arr.indexOf(num) === index)
console.log(removeDuplicate)  //[ 1, 2, 3, 4, 5 ]

// Task -11:  Flatten a nested array using flat()
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray)

//Task -12:  Find if an array contains a specific value using includes()
const colors = ["red", "blue", "green"];
const isInclude = colors.includes("purple")
console.log(isInclude)  //false

//Task -13; Find the first number greater than 50 using find()
const bigNumbers = [10, 20, 55, 70, 85];
const greaterThen5 = bigNumbers.find(num => num > 50)
console.log(greaterThen5)  //55

//Task -14;  Find the index of a specific number using findIndex()
const findIndexExample = [5, 10, 15, 20, 25];
const isLastIndex = findIndexExample.findIndex(num => num === 20);
console.log(isLastIndex)  //3

//Task -15; Sort an array in ascending order using sort()
const unsortedNumbers = [42, 3, 56, 22, 10];
unsortedNumbers.sort((a, b) => a-b)
console.log(unsortedNumbers)  //[ 3, 10, 22, 42, 56 ]

//Task -16; Reverse an array using reverse()
const originalArray = [1, 2, 3, 4, 5];
const reverseArray = [...originalArray].reverse()
console.log(reverseArray)   //[ 5, 4, 3, 2, 1 ]

//Task -17;  Remove the last element from an array using pop()
const popArray = ["one", "two", "three"];
popArray.pop()
console.log(popArray)   //[ 'one', 'two' ]

//Task -18; Add elements at the beginning using unshift()
const unshiftArray = ["b", "c"];
unshiftArray.unshift("a")
console.log(unshiftArray)   //[ 'a', 'b', 'c' ]

//Task -19;  Remove the first element using shift()
const shiftArray = ["x", "y", "z"];
shiftArray.shift()
console.log(shiftArray)  //[ 'y', 'z' ]

//Task -20;  Extract a portion of an array using slice()
const sliceArray = ["apple", "banana", "cherry", "date"];
const sliced = sliceArray.slice(1, 4)
console.log(sliced)   //[ 'banana', 'cherry', 'date' ]

//Task -21; Convert an array to a string using join()
const joinArray = ["JavaScript", "is", "awesome"];
console.log(joinArray.join(' '))

//Task -22;  Check if all numbers are positive using every()
const numbersCheck = [1, 2, 3, 4, 5, ];
const Check = numbersCheck.every(num => num > 0)
console.log(Check)  //true

//Task -23; Check if at least one number is negative using some()
const numbersCheck2 = [-1, 2, 3, 4];
console.log(numbersCheck2.some(num => num < 0 ))   //true

//Task -24;  Get the last occurrence of a number using findLastIndex()
const numArray = [5, 10, 15, 20, 10, 25];
const lastArray = numArray.findLastIndex(num => num === 10);
console.log(lastArray)  //4