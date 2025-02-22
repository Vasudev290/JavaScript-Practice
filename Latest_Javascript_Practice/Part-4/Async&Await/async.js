//Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. 
//*It allows waiting async code in a sync manner.
//*It is built on top the of promises but provides a clean syntex.

//example - 1
async function getData(){//=> async await always return the promise
    return "Vasu"
}
const result = getData()
console.log(result)
// *An async function always returns a Promise.
// *Since "Vasu" is a normal string, JavaScript wraps it in a Promise.


//example -2
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise was resolved successfullyy..!")
        }, 2000)
    })
}
const resultPromise = getData()
//console.log(resultPromise)
resultPromise
.then(res => console.log(res))
// *This async function returns a Promise that resolves after 2 seconds.
// *then() handles the resolved value.


//example -3
const myPromise = new Promise((res, rej) => {
    res("Promise resolved Successfully..!")
})
//Normal promise execution method ;)
function getData(){
    myPromise.then(res => console.log("Normal Promise execution :", res))
}
getData()

//Async and await execution method ;)
//Await keyword can only be used inside an async function
const handlePromise = async () => {
    const recevidData = await myPromise
    console.log("Async and await Execution :", recevidData)
}
handlePromise()

//example -4
// Difference between the using of promise patten and async and await pattern
const myPromise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise resolved successfully..!")
    }, 3000)
})

//Normal promise execution method ;)
function getData(){
    //JS engine will not wait for promise to be resolved
    myPromise1.then(res => console.log("Normal Promise Execution :", res))  //after 5s execution.
    console.log("Learning javascript!")  //1st execution method
}
getData()

//Async and await execution method ;)
const handlePromise1 = async () => {
    console.log("Starting Point..!")
    //JS engine will not wait for promise to be resolved.
    const recevidData = await myPromise1  //once the promise was resolved both execute after 5s
    console.log("Learning async and await method in javascript")
    console.log("Async and await Execution :", recevidData)
}
handlePromise1()


//Example -5
const API_URL_LINK = "https://jsonplaceholder.typicode.com/users";
const handleFetchPromise = async () => {
    //Error handling method;
    try{
        const responseData = await fetch(API_URL_LINK)
        if(!responseData.ok){
            throw new Error(`HTTP Error! Status : ${responseData.status}`)
        }
        const jsonValue = await responseData.json()
        //will get the data like readstream format and convert to readStream to json format.
        console.log("Actual Value :", jsonValue)
    }catch(err){
        console.log(err.message)
    }
}
handleFetchPromise()
//for promises for execution methods
fetch().then(res => res.json()).then(res => console.log(res))

// *Uses fetch() to get API data.
// *if (!responseData.ok) throw new Error(...) handles HTTP errors.
// *Uses async/await for cleaner code.