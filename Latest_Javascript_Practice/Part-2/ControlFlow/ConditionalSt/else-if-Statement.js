//Else-if Statement
//Check multiple conditions in sequence. if one condition is true. its blocks executes, and this remaining are skipped.

//systex
// if(condition){
     //code block
// } else if(condition){
     //code block
// }else{
     //code block
// }


//Days Calculations
let day = 8;
if(day == 1){
    console.log("Monday")
}else if(day == 2){
    console.log("Tuesday")
}else if(day == 3){
    console.log("Wednesday")
}else if(day == 4){
    console.log("Thuesday")
}else if(day == 5){
    console.log("Friday")
}else if(day == 6 || day == 7){
    console.log("Its Week end Bro!")
}else{
    console.log("This is not in the weekdays")
}

//score
let score = 0;
if (score <= 15) {
    console.log("Average Score");
} else if (score <= 20) {
    console.log("Good Score");
} else {
    console.log("OK, keep practicing!");
}


//Grade Calcultions
let marks = 78;
if(marks <= 95 && marks >= 85){
    console.log("Grade A")
}else if(marks < 80 && marks >= 65){
    console.log("Grade B")
}else if(marks < 50 && marks >= 38){
    console.log("Grade C")
}else if(marks >= 35){
    console.log("Just Pass")
}else{
    console.log("Fail")
}

//Write a program to print the greatest number in given two numbers?
const num1 = 100;
const num2 = 20;

if(num1 > num2){
    console.log(`${num1} is the Greatest number`)
}else if(num1 < num2){
    console.log(`${num2} is the Greatest number`)
}else{
    console.log("Both the number are equal!")
}

//Write a program to print the least number given two numbers?
const val1 = 9;
const val2 = 8;
if(val1 > val2){
    console.log(`${val2} is the least number`)
}else if(val1 < val2){
    console.log(`${val1} is the least number`)
}else{
    console.log("Both Values are equal!")
}


//. Write a program to print the greatest number in given three numbers?
let player1 = 10, player2 = 20, player3 = 300;

if(player1 >= player2 && player1 >= player3){
    console.log(`${player1} is the Greatest Score`)
}else if(player2 >= player1 && player2 >= player3){
    console.log(`${player2} is the Greatest Score`)
}else{
    console.log(`${player3} is the Greatest Score`)
}


//Write a program to print the least number in given three numbers?
let gamer1 = 10, gamer2 = 2, gamer3 = 300;

if(gamer1 <= gamer2 && gamer1 <= gamer3){
    console.log(`${gamer1} is the least score`)
}else if(gamer2 <= gamer3 && gamer2 <= gamer1){
    console.log(`${gamer2} is the least score`)
}else{
    console.log(`${gamer3} is the least score`)
}