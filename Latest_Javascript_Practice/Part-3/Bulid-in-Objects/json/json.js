//Built-in JSON Methods (JSON.parse() & JSON.stringify())
//JSON.stringify(obj)  =>  Converts a JavaScript object to a JSON string.
//JSON.parse(jsonString)  =>  Converts a JSON string into a JavaScript object


//JSON.stringify() 
//Examples -1 
const person = {
    name:"Vasu",
    age: 23,
    loc:"Bangalore",
    country: "India"
}
let jsonString = JSON.stringify(person);
console.log(jsonString)  //{"name":"Vasu","age":23,"loc":"Bangalore","country":"India"}

//EXample -2 Array
const colors = ["red", "green", "blue"]
let jsonColors = JSON.stringify(colors)
console.log(jsonColors)  //["red","green","blue"]

//example -3 neasted objects
const user ={
    name:"Deva",
    age:23,
    address : {
        street: "Jagadish Nagar",
        city: "Bangalore",
        country:"India"
    }
}

let jsonUser = JSON.stringify(user)
console.log(jsonUser)
//{"name":"Deva","age":23,"address":{"street":"Jagadish Nagar","city":"Bangalore","country":"India"}}


// Example -4 Replacer Function
const person1 = { name: "Vasu", age: 23, country: "India" };
const jsonFiltered = JSON.stringify(person1, ["name", "age"]);
console.log(jsonFiltered);
// Output: {"name":"Vasu","age":23}


//JSON.parse() Examples
//example -1
let jsonStringify = '{"name":"Vasu","age":23,"loc":"Bangalore","country":"India"}';
const parseObject = JSON.parse(jsonStringify);
console.log(parseObject)
//{ name: 'Vasu', age: 23, loc: 'Bangalore', country: 'India' }


//example -2 with an Array
const jsonFruits = '["Apple", "Banana", "Cherry", "Orange", "Graps"]'
const parseFruits = JSON.parse(jsonFruits)
console.log(parseFruits)
//[ 'Apple', 'Banana', 'Cherry', 'Orange', 'Graps' 


//example -3 Reviver Function
const jsonString1 = '{"name":"Vasu", "age": "23"}'
const parseObject1 = JSON.parse(jsonString1, (key, value) => key === "age" ? Number(value) : value);
console.log(parseObject1)


//Example 4: JSON.parse() Handling Errors
try{
    const invaildJSON = "{name: 'Vasu', age: 23}"; //Missing double quotes
    const parsed = JSON.parse(invaildJSON)
    console.log(parsed)
}catch(err) {
    console.log("Invaild JSON:", err.message)
}

//Invaild JSON: Expected property name or '}' in JSON at position 1