//if else statement
//if condition is true, if condition will excuted or else condition will excuted

// syntex
// if(condition){
     //code block
// }else{
     //code block
// }
const isAlived = true;
if(isAlived){
    console.log("Yaeh..! God is Alived")
}else{
    console.log("nope..! Is Death person")
}


const number = 20;
if(number % 2 === 0){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}


//write a program to check if a number is divisible by 7 or not? 
let divisible7Num = 70;
if(divisible7Num % 7 === 0){
    console.log(`${divisible7Num} is divisible by 7.`)
}else{
    console.log(`${divisible7Num} is not divisiable by 7.`)
}


//write a program to check if a number is multiple by 3 or not? 
let multipleBy3 = 23;
if(multipleBy3 % 3 === 0){
    console.log(`${multipleBy3} is multiple by 3`)
}else{
    console.log(`${multipleBy3} is not multiple by 3`)
}

//write a program to check if a number is positive or not?
let positiveOrNot = 1;
if(positiveOrNot > 0){
    console.log(`${positiveOrNot} is a positive number`)
}else{
    console.log(`${positiveOrNot} is not positive number`)
}

//Write a program to check if a number is 3-digit numbers or not?
let digit3Value = 99;
if(digit3Value >= 100 && digit3Value <= 999){
    console.log(`${digit3Value} is 3-digit value`)
}else{
    console.log(`${digit3Value} is not digit value`)
}

// Write a program to print even or odd for a given number?
let numbers = 11;
if(numbers % 2 === 0){
    console.log(`${numbers} is a Even Numbers`)
}else{
    console.log(`${numbers} is a Odd numbers `)
}

// Can you stop a loop based on a specific condition?
for(let i=1; i<10; i++){
    if(i === 5){
        break
    }
    console.log(i)
}