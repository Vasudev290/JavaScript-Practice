//function declaration (Named Function) => A function with a name that can be called anywhere in the script due to hositing.
// syntex
// function greet(){
//     code block
// }
// greet()


let num1= 10;
let num2= 20;
function addOne(){
    let result = num1+num2;
    console.log(`Value : ${result}`)
}
addOne()

//Write a function named calculateArea that takes two parameters: length and width. 
//The function should calculate the area of a rectangle and return the result.

function calculateArea(length, width){
    return length * width
}

let area1 =calculateArea(10, 5);
console.log(`The Total area1 rectangle is ${area1}`)

let area2 =calculateArea(20, 10);
console.log(`The Total area2 rectangle is ${area2}`)


//No return without arguments
function add(){
    let a=10, b=20, c;
    c=a+b;
    console.log(`No return without arguments`)
    console.log(`Addition Value :${c}`)
}
add()

//Return without argument
function sub(){
    let a=20, b=45, c
    c= b-a
    return c
}
let result = sub()
console.log("Return without argument")
console.log(`Substraction Value : ${result}`)

//No return with argument
function multiple(a, b){
    let c;
    c=a*b
    console.log("No return with argument")
    console.log(`Multiple Value is ${c}`)
}
multiple(10, 29)

//Return with arguments
function division(a, b){
    let c;
    c=a/b
    return c
}
let result1 = division(20, 5)
console.log("Return with arguments")
console.log(`Division value is ${result1}`)