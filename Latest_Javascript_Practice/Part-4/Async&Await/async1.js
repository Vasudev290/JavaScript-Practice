
//Example -1 => Basic async function;
async function greet(){
    return "Hello Vasu!"
}
greet()
.then(res => console.log(res))

//Example -2 => using await inside an async function;
async function fetchData(){
    console.log("Fetching Data..!");
    const responseData =await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const jsonValue =await responseData.json();
    console.log("Data :", jsonValue)
}
fetchData();
console.log("This runs before data is fetched!");


//Example -3 => Handling Errors with try & catch
async function fetchDataErrorHandle(){
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const jsonValue =await response.json()
        console.log("Fetched Data:", jsonValue)
    }catch(err){
        if(err) throw err
    }
}
fetchDataErrorHandle()