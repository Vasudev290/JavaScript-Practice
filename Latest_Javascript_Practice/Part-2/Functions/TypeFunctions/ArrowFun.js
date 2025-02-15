//Arrow Function => Provide a shorter syntex and do not bind this, making them useful for callbacks
// syntex;
// const syntex = () => {
//     code block
// }


//example 1
const greet = () => {
    console.log("Hello Good Evening.!")
}
greet()

//example 2
const msg = name => `Hello ${name}`
console.log(msg("Vasu"))

// Square of a Number
const SquareValue = (num) => num*num
console.log(SquareValue(200))
console.log(SquareValue(20))
console.log(SquareValue(2))


//Find the Maximum of Two Numbers
const findMax = (a, b) => (a>b ? a : b)
console.log(findMax(29, 110))

//Sum of Two Numbers
const addValue = (a, b) => a+b;
console.log(addValue(76, 98))

//Check If a Number is Even or Odd
const isEven = (num) => num % 2 === 0 ? "Even" : "Odd"
console.log(isEven(67))
console.log(isEven(6))

//Return an Array of Squares
const SquaresArray = (arr) => arr.map(num => num * num)
console.log(SquaresArray([1,2,3,4,5,6,7]))
console.log(SquaresArray([10, 11, 22, 32, 44]))

// Filter Even Numbers from an Array
const filterArray = (arr) => arr.filter(num => num % 2 ===0);
console.log(filterArray([1,2,3,4,5,6,7]))

//Find the Length of Each Word in an Array
const findLengthValue = (words) => words.map(word => word.length);
console.log(findLengthValue(["AppleWatch", "AppleTab", "ApplePhone"]))
console.log(findLengthValue(["Hello", "Hii"]))