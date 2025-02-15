//Immediately invoked function experssion (IIFE) => IIFE executes immediately after defining it.
//syntex 
// (function (){
//     code block
// })();

//Example 1
(function () {
    console.log("IIFE Executed..!")
})()

//Example 2
let num1 = 29;
let num2 = 35;
(function addValue(){
    let result = num1 + num2
    console.log(`The Total Value of ${result}`)
})()

