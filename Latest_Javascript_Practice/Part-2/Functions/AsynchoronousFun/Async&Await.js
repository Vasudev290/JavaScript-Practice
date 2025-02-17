//function async nd await => The async and await keywords simplify handling asynchronous operations 
//in JavaScript by making code look more synchronous and readable.
//async makes a function return a Promise.
//await pauses execution until the Promise resolves.

//basic code 
async function fetchData() {
    return "Data fetched successfully!";
}
fetchData().then(console.log);  // Output: Data fetched successfully!


//example -1
//Using await with fetch
async function getUserData(){
    console.log("Fetching user Data...!");
    let response = await fetch("https://jsonplaceholder.typicode.com/users/3")
    let data  = await response.json();
    console.log("User Data :", data)
}
getUserData()

// fetch() returns a Promise, so we use await to wait for the response.
// response.json() is also asynchronous, so await is needed again.
// The data is logged only after everything is resolved.


//example -2
//Handling Errors with try...catch
async function fetchTryCatch(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if(!response.ok) throw new Error("Failed to fetch data")
        let data =await response.json()
        console.log("Post Data :", data)
    }catch(error){
        console.log("Error :", error.stack)
    }
}
fetchTryCatch()


//example -3
function fechApi(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetch api has been resolved..!")
        }, 2000)
    })
}

async function fetchingApiData(){
    console.log("Calling Api..!")
    let data =await fechApi();
    console.log(data)
}
fetchingApiData()


//example -4
//Multiple API Calls with Promise.all
async function fetchingMultipleApi(){
    let userPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(result => result.json())
    let postPromise = fetch("https://jsonplaceholder.typicode.com/posts/1").then(result => result.json())

    let [user, post] = await Promise.all([userPromise, postPromise])

    console.log("User :", user);
    console.log("Post :", post)
}
fetchingMultipleApi()