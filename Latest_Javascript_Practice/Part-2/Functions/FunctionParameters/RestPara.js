//Rest Parameters => functions to accept an indefinite number of arguments as an array. 
//represented using three dots (...) 

// syntex;
// function functionName(...restParameter) {
     // restParameter is an array
// }


//example -1 
function sumExpense(...number){
    let total = 0;
    for(let num of number){
        total+= num
    }
    return total;
}

console.log(sumExpense(10, 20, 30, 40))
console.log(sumExpense(10, 20))
console.log(sumExpense())


//example -2
//Rest Parameters with Multiple Arguments
function into(fName, lName, ...hobbies){
    console.log(`Name: ${fName} ${lName}`)
    console.log(`Hobbies : ${hobbies.join(",")}`);
}

into("Vasu", "Devu", "Codeing", "Reading", "Traveling")


//example -3
//Rest Parameters in Arrow Functions

const multiple = (...nums) => nums.reduce((acc, curr) => acc + curr, 1)
console.log(multiple(2,3, 4,5))
console.log(multiple(2,3))
console.log(multiple(4,5))


//example -4
function mainFunction(...callbacks){
    console.log("Main function Executed..!")
    callbacks.forEach(callback => {
        if(typeof callback === "function"){
            callback()
        }else{
            console.log("Invalid callbacks function")
        }
    })
}

function callback(){
    console.log("Callback function executed..!")
}

function callback1(){
    console.log("Callback1 function executed..!")
}

function callback2(){
    console.log("Callback2 function executed..!")
}

function callback3(){
    console.log("Callback3 function executed..!")
}

function callback4(){
    console.log("Callback4 function executed..!")
}
mainFunction(callback, callback1, callback2, callback3, callback4)