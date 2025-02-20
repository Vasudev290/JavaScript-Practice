//Recursion  => Recursion is a process in which a function calls itself to solve a problem. 
// Base Case – A condition to stop recursion.
// Recursive Case – The function calls itself with modified arguments.


//example -1
function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(6))


//Example -2 
let value = prompt("Enter the Value :")
value = Number(value)
function factorial(n){
    if(n === 0)return 1;
    return n* factorial( n - 1)
}
console.log(`Factorial of ${value} is : ${factorial(value)}`)


