//Math Object Methods in JavaScript
// Math is a built-in object in JavaScript that helps perform mathematical operations.
// Methods like Math.floor() and Math.ceil() help with rounding.
// Math.random() is useful for generating random numbers, especially in games or lottery programs.
// Math.max() and Math.min() help find the largest and smallest numbers in a list.


// Math.random() – Generates a Random Number, returns a floating-point number between 0 (inclusive) and 1 (exclusive).
console.log("Random()")
console.log(Math.random())   //0.2773004875062104
console.log(Math.random() * 10)  //generate 0 to 10 in float method  => 5.506592909903654
console.log(Math.floor(Math.random() * 100))  //Random integer between 0 and 99
console.log(Math.floor(Math.random() * (50 - 10 + 1)) + 10)   // Random integer between 10 and 50


//Math.floor() – Rounds Down x to the nearest integer.
console.log("Floor()")
console.log(Math.floor(4.8))   //Output: 4
console.log(Math.floor(4.9));  // Output: 4
console.log(Math.floor(-3.7)); // Output: -4
console.log(Math.floor(9.1));  // Output: 9
console.log(Math.floor(99.99)); // Output: 99


//Math.ceil(x) rounds up x to the nearest integer.
console.log("ceil()")
console.log(Math.ceil(4.1));  // Output: 5
console.log(Math.ceil(-3.7)); // Output: -3
console.log(Math.ceil(6.5));  // Output: 7
console.log(Math.ceil(99.001)); // Output: 100


//Math.round(x) rounds x to the nearest integer.
console.log("round()")
console.log(Math.round(4.3));  // Output: 4
console.log(Math.round(4.7));  // Output: 5
console.log(Math.round(-2.5)); // Output: -2
console.log(Math.round(99.9)); // Output: 100


//Math.max(a, b, c, ...) returns the largest value.
console.log("max()")
console.log(Math.max(10, 20, 5)); // Output: 20
console.log(Math.max(-10, -5, 0)); // Output: 0
console.log(Math.max(100, 99.9, 101)); // Output: 101
console.log(Math.max(45, 78, 89, 120, 67)); // Output: 120


//Math.min(a, b, c, ...) returns the smallest value.
console.log("min()")
console.log(Math.min(10, 20, 5)); // Output: 5
console.log(Math.min(-10, -5, 0)); // Output: -10
console.log(Math.min(100, 99.9, 101)); // Output: 99.9
console.log(Math.min(45, 78, 89, 120, 67)); // Output: 45


//Math.abs(x) returns the absolute (positive) value of x.
console.log(Math.abs(-10));  // Output: 10
console.log(Math.abs(5));    // Output: 5
console.log(Math.abs(-99.9));// Output: 99.9
console.log(Math.abs(0));    // Output: 0


//Math.pow(base, exponent) returns base raised to the exponent.
console.log(Math.pow(2, 3)); // Output: 8 (2³)
console.log(Math.pow(5, 2)); // Output: 25 (5²)
console.log(Math.pow(10, 0)); // Output: 1 (10⁰)
console.log(Math.pow(3, 4)); // Output: 81 (3⁴)


//Math.sqrt(x) returns the square root of x.
console.log(Math.sqrt(25));  // Output: 5
console.log(Math.sqrt(100)); // Output: 10
console.log(Math.sqrt(2));   // Output: 1.414213...
console.log(Math.sqrt(0));   // Output: 0
