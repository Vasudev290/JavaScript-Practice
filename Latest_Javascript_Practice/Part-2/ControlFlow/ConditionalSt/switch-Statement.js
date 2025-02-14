//switch statement => Contains many conditions with one default one.
//used to perform different actions based on different action

//syntex
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


let marks = 71;
switch (true) {
    case marks <= 99 && marks >= 75:
        console.log("Super marks")
        break;
    case marks < 70 && marks >= 50:
        console.log("Good Marks")
        break;
    case marks < 50 && marks >= 35:
        console.log("OK Pass!")
        break;
    default:
        console.log("Better luck next time..!");
}


const score = 20;
switch (true) {
    case score <= 97 && marks >= 76:
        console.log("Congrats! keep it up🎉🎉🍾")
        break;
    case score < 75 && score >= 50:
        console.log("Good marks😊😊")
        break;
    case score < 50 && score>= 35:
        console.log("ok Good!🫡🫡🫡")
        break;
    default:
        console.log("Fail, Better luck next time.! 🙏🙏😊");
}


const day = 7;
switch (true) {
    case day == 1:
        console.log('Monday')
        break;
    case day == 2:
        console.log('Tuesday')
        break;
    case day == 3:
        console.log("Wednesday")
        break;
    case day == 4:
        console.log("Thuesday")
        break;
    case day == 5:
        console.log("Friday")
        break;
    case day == 6 || day == 7:
        console.log("Its weekend bed rest 😴😴😴")
        break;
    default:
        console.log("it's not an day count!");
}


const work = false;
switch (true) {
    case work:
        console.log("Office work")        
        break;
    default:
        console.log("Home Work..!");
}