//function Hoisting => a JavaScript behavior where function declarations are moved to the top of their containing scope during execution. 

//example - 1
// Function Hoisting with Function Declarations
sayMsg()  //Hii Hello
function sayMsg(){
    console.log("Hii Hello..!")
}


//example -2
//Function Hoisting with Parameters
console.log(squre(5))
function squre(num){
    return num * num
}


//Example 3 
//Function Expression (No Hoisting)
//console.log(add(5, 3))  // Cannot access 'add' before initialization
const add = function(a, b){
    return a+b
}
console.log(add(5, 3))  //output - 8


