//Curry => Function Currying is the technique of transforming a function that takes multiple arguments into a series of functions,
// each taking one argument at a time.

//Two ways to create the methods
//with use of bind method
const multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 10);
multiplyByTwo(5);

//another one is function Closures

let multipleClo = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let multipleCloByTwo = multipleClo(10);
multipleCloByTwo(20);
