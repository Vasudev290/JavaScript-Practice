//Callback => a function passed as an argument to another function and executed later.
function fetchData (callback){
    setTimeout(() => {
        callback("Data Fetched successfully..!")
    }, 2000)
}
fetchData((msg) => {
    console.log(msg)
})


//example -2 
function greet(name, callback){
console.log(`Hello ${name}`)
callback()
}

function sayGoodBye(){
    console.log("Goodbyee Machaa!")
}
greet("Vasu", sayGoodBye)


//example - 3
//Callback in setTimeout() (Asynchronous Execution)
console.log("Start")
setTimeout(() => {
    console.log("This will run after 1000s")
}, 1000);
console.log("End")

//example -4
//Callback in Array Methods (forEach)
const num = [1,2,3,4,5,6,7,8]
num.forEach((num1, index, arr) => {  //mum1 - inside each arr value, index - index value, arr - whole array
    console.log(`Index value ${index} : ${num1 * 2} = ${arr}`)
})

//mum1 - inside each arr value, index - index value, arr - whole array
// Index value 0 : 2 = 1,2,3,4,5,6,7,8
// Index value 1 : 4 = 1,2,3,4,5,6,7,8
// Index value 2 : 6 = 1,2,3,4,5,6,7,8
// Index value 3 : 8 = 1,2,3,4,5,6,7,8
// Index value 4 : 10 = 1,2,3,4,5,6,7,8
// Index value 5 : 12 = 1,2,3,4,5,6,7,8
// Index value 6 : 14 = 1,2,3,4,5,6,7,8
// Index value 7 : 16 = 1,2,3,4,5,6,7,8

//example -5
//callback in map()
const numbers1 = [2, 4, 6, 8, 10];

const squaredValue = numbers1.map((num1, index, arr) => {
    console.log(`Number: ${num1}, Index: ${index}, Full Array: ${arr}`);
    return num1 * num1;  // Return the squared value
});

console.log(squaredValue); // Output: [4, 16, 36, 64, 100]



//example -  6
const filterNumbers = [10, 25, 30, 15, 40];
const isEven = filterNumbers.filter((num, index, arr) => {
    console.log(`Numbers :${num}, Indexing Value :${index}, whole Array ${arr} `)
    return num % 2 === 0;
})
console.log(isEven)


//example - 7
const numbers2 = [1, 2, 3, 4, 5, 6];
const theTotal = numbers2.reduce((acc, num) => acc+num, 0)
console.log("The Total Value of ", theTotal)

//example - 8
//Simulating a Network Request with Callbacks
function fetchData1(callback){
    console.log("Fetching Data..!");
    setTimeout(() => {
        callback({name: "Vasu", age: 23})
    }, 2000)
}
fetchData1((data) => {
    //console.log(`Data Received :${JSON.stringify(data)}`)
    console.log("Data Recevied :", data)
})