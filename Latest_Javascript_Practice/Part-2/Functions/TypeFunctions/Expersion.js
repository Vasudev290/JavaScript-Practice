//Function expersion (Anonymous function) => A function assigned to a variable is called function expersion. 
// The function do not get hosited.

// syntex
// const functionExpersion = function value(){
//     code block
// }
// functionExpersion()

//Example - 1
let num1 = 20;
let num2 = 40;
let addOne = function(){
    let result = num1 + num2;
    console.log(`The Total value of ${result}`)
}
addOne()


//Example - 2
const functionCalculater = function(length, width){
    return length * width
}

const area1 = functionCalculater(10, 20)
console.log(`The area1 rectangle is ${area1}`)

const area2 = functionCalculater(50, 100)
console.log(`The area2 rectangle is ${area2}`)

//Example - 3

//No Return without argument
const addition = function(){
    let a = 10, b= 20, c
    c = a+b
    console.log("No Return without argument")
    console.log(`The addition value is ${c}`)
}
addition()

//Return without arguments
const substraction = function(){
    let a = 10, b= 20, c
    c = b-a;
    return c
}
let result = substraction()
console.log("Return without Argument")
console.log(`The Substraction Value is ${result}`)

//No Return with arguments
const multiple = function(a, b){
    let c;
    c = a*b;
    console.log("No Return with Arguments")
    console.log(`The Multiple Value is ${c}`)
}
multiple(32, 6)


//Return with Arguments
const division = function(a, b){
    let c;
    c= a / b;
    return c
}
let result1 = division(30, 5)
console.log("Return with Arguments")
console.log(`The division Value is ${result1}`)