// Hoisting in  javascript
// *Javascript moves variables and functions declaration to the top of their scope before code execution.
// *Only Declarations are hoisted, not initialization.

//Example var 
console.log(a) //undefined
var a = 10;

//let
console.log(b) //ReferenceError: Cannot access 'b' before initialization
let b = 20;

//const
console.log(c)  //ReferenceError: Cannot access 'b' before initialization
const c = 29;


//Redeclaration & Reassignment in variable of var, let, const

//Redelcaration process

// Using var (Allowed)
// var x = 10;
// var x = 20; // Redeclaration is OK
// console.log(x); // 20

// Using let (Not Allowed)
// let y = 30;
// let y = 40; // ❌ SyntaxError: Identifier 'y' has already been declared

// Using const (Not Allowed)
// const z = 50;
// const z = 60; // ❌ SyntaxError: Identifier 'z' has already been declared


//Reassignment

// Using var (Allowed)
// var a = 10;
// a = 20; // Reassignment is OK
// console.log(a); // 20

// Using let (Allowed)
// let b = 30;
// b = 40; // Reassignment is OK
// console.log(b); // 40

// Using const (Not Allowed)
// const c = 50;
// c = 60; // ❌ TypeError: Assignment to constant variable



//Variable scopes
//1, global scope 2, function scope, 3, blocked scope


//Global scope
// - Variables declared outside any function blocked global
let globalVar = "Hii Guys!"
function test(){
    console.log(globalVar) //accessible
}
//test()

//function scope
//variables declared with var inside a function are accessible any within that function.
function test1(){
    var message = "Helloo Good Evening...!"
    console.log(message)//accessible
}
//test1()
//console.log(message) //message is not defined

//blocked scope
//Variables declared with let and const inside a block { } are blocked scope.
if(true){
    let blockVar = "Had Lunch or not!"
    console.log(blockVar)
}
//console.log(blockVar) blockVar is not defined