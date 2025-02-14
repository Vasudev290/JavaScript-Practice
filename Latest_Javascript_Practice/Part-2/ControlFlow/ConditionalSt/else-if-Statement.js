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


