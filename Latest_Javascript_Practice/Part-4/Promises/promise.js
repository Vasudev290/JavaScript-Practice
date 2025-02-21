//Promises -> A Promises is a built-in javascript object that represent the eventual completion or failure of an async operation.
//*it allow chaining  operations(.then) instead od using neasted callbacks(call back hell)
//*Async code manner effctciently.

const promises = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Success!")
    }else{
        reject("Fail")
    }
})
promises.then(msg => console.log(msg)).catch(err => console.log(err))