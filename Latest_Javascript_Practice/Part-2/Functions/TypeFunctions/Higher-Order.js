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