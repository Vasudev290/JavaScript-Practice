//Nested if-else statement => an if-else statement inside another if-else statement,
//systex;
// if(condition){
//     if(condition){
//         code block
//     }else{
//         code block
//     }
// }else{
//     code block
// }

const userName = "admin1";
const password = "12345";

if(userName === 'admin'){
    if(password === '12345'){
        console.log("Login Successfully")
    }else{
        console.log("Incorrect Password")
    }
}else{
    console.log("Invalid UserName")
}


let a=10, b=20, c=15;
if(a>c){
    if(a>c){
        console.log("A is the Largest.")
    }else{
        console.log("C is the largest ")
    }
}else{
    if(b>c){
        console.log("B is the largest")
    }else{
        console.log("C is the largest")
    }
}


let marks = 85;

if (marks >= 50) {
    console.log("You passed!");

    if (marks >= 90) {
        console.log("Grade: A");
    } else if (marks >= 75) {
        console.log("Grade: B");
    } else {
        console.log("Grade: C");
    }

} else {
    console.log("You failed.");
}
