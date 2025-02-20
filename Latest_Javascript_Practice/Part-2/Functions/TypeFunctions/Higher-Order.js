//Higher Order function =>  Take another function as a argument or return a function

//sample example
const calculateValue = (a, b, callback) => {
    return callback(a, b)
}

const additionValue = (a, b) => a+b
const substractionValue = (a, b) => a-b

console.log(calculateValue(54, 43, substractionValue))


// Higher-Order Function Taking a Function as an Argument
const greet =(name, callback) => {
    console.log(`Hello ${name}`)
    callback()
}
const sayGoodBye = () => {
    console.log("Good Bye Machaa!")
}
const msg = () => {
    console.log("Thinava machaa!")
}

greet("Vasu", sayGoodBye)

//example - 2
//map () =>  Transform an Array
const Numbers = [1,2,3,4,5,6,7]
const squredValue = Numbers.map(num => num*num)
console.log(squredValue)


//example - 3
//filter() – Filter Elements in an Array
const ages = [10, 25, 30, 15, 40];
const adults = ages.filter(age => age >= 18)
console.log(adults)


//exaple- 4
//reduce () - Reduce an Array to a Single Value
const numbers = [1, 2, 3, 4, 5, 6];
const totalValue = numbers.reduce((acc, num) => acc+num, 0)
console.log(`The Total Value of the Reduce method is ${totalValue}`)


//example - 5
//Function That Filters Even or Odd Numbers
const filterNumbers = (arr, condition) => arr.filter(condition)

//Even and Odd
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filterNumbers(numbers1, isEven))
console.log(filterNumbers(numbers1, isOdd))


//Example - 6
const arraySort = (arr, compareFun) => arr.sort(compareFun)

//ascending & decending
const ascending = (a, b) => a-b;
const decending = (a, b) => b-a;

const numbers2 = [5, 2, 9, 1, 7];

console.log(arraySort(numbers2, ascending));
console.log(arraySort(numbers2, decending));