//Creating Promise Method

const mypromise = new Promise((resolve, reject) => {
    const success = true
    if(success){
        resolve("Promise Resolved Successful..!")
    }else{
        reject("Promise Failed")
    }
})
mypromise.then((message)=> {
    console.log(message)
}).catch((err) => {
    console.log(err)
})


//Chaining Promise Method
const fetchDataa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data Fetched Successfully..!"), 2000)
})
fetchDataa.then((data) => {
    console.log(data)
    return "Processing the Data"
})
.then((message) => console.log(message))
.catch((err) => console.log(err))



//Using Finally Method
const myData = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error Throwing..!")
    }, 2000)
})
myData.then((message) => console.log(message))
.catch((err) => console.log(err))
.finally(() => console.log("Operation Completed..!"))



//Data Fetching Operation 
const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(!response.ok){
            throw new Error("Network Response is not working")
        }
        return response.json()
    })
    .then((data) => 
    console.log("User Data Fetched Successfully", data)
    )
    .catch((err) => 
        console.log(err)
    )
    .finally(() => console.log("Operation Completed successfully..!"))
};
fetchData()