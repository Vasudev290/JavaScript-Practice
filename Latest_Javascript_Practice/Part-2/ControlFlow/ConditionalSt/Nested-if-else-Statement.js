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