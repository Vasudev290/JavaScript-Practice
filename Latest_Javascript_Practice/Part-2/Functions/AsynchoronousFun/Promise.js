//Promise => A Promise in JavaScript represents a value that may be available now, in the future, or never. 
//It helps manage asynchronous operations like fetching data, reading files, or making API calls.


//Basic Operations with promise
const myPromise = new Promise((resolve, reject) => {
    let isAlived = false;
    if(isAlived){
        resolve("Promise is resolved is alived.!")
    }else{
        reject("Promise is rejected is no more..!")
    }
})
myPromise
.then((msg) => {
    return msg
})
.then((msgVlu) => {
    console.log(msgVlu)
})
.catch((err) => {
    console.log(err)
})

//example -2
function fetchingData(){
    return new Promise((resolve, reject) => {
        console.log("Fetching Data..!")
        setTimeout(() => {
            let success = true;
            if(success){
                resolve({name:"Vasu", age:23, loc:"Bangalore"})
            } else{
                reject("Failed to fetch data!")
            }
        }, 2000)
    })
}
fetchingData()
.then((obj) => {
    return obj
})
.then(data => console.log("Data Recevied :", data))
.catch(err => console.log("Error :", err.message))


//example -3
function multipleValue(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n * 2), 1000)
    })
};
multipleValue(5)
.then((result) => {
    console.log("Step 1:", result)
    return multipleValue(result)
})
.then((result) => {
    console.log("Step 2 :", result)
    return multipleValue(result)
})
.then(result => console.log("Final Result :", result))
.catch(err => console.log("Error :", err.name))

//example -4
const p1all = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 completed")
    }, 2000)
})

const p2all = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task 2 completed")
    }, 1000)
})

const p3all = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3 completed")
    }, 3000)
})
Promise.all([p1all, p2all, p3all])
.then(result => console.log("All the Promises Resolved :", result))
.catch(error => console.log("Error :", error))

//example -5
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success 1")
    }, 1000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failed 2")
    }, 2000)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success 3")
    }, 1500)
});

Promise.allSettled([p1, p2, p3])
.then(result => console.log("The main result :", result))
.catch(err => console.log("Error :", err))

//example -6
const slowPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Very slow promises..! 🥉🥉")
    }, 2000)
})

const mediumPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" Medium Speed promises..! 🥈🥈🥈")
    }, 1500)
})

const fastPromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Very Fastest promises..! 🥇🥇🥇🥇")
    }, 1000)
})

Promise.race([slowPromises, mediumPromises, fastPromises])
.then(result => console.log("Fisrt Resolved Promises :", result))
.catch(err => console.log("Error :", err))



//example -7
const p1A = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 is resolved...!")
    }, 2000)
})

const p2A = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 is Rejected...!")
    }, 1500)
})

const p3A = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3 is rejected...!")
    }, 1000)
})

Promise.any([p1A, p2A, p3A])
.then(result => console.log("Result Value :", result))
.catch(err => console.log("Error :", err.message))

//example - 8
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Error: User not found!"), 2000);
    });
}

fetchUserData()
    .then(data => console.log("User Data:", data))
    .catch(error => console.log(error)) // Catches errors
    .finally(() => console.log("Operation Completed")); // Runs regardless
