//Array Destructruing
const fruits = ["Apple", "Banana", "Orange"]

const[first, second] = fruits
console.log(first)
console.log(second)


const[, , Third] = fruits
fruits.push("Cherry")
console.log(fruits) //[ 'Apple', 'Banana', 'Orange', 'Cherry' ]

fruits.pop()
console.log(fruits) //[ 'Apple', 'Banana', 'Orange' ]

fruits.shift()
console.log(fruits) //[ 'Banana', 'Orange' ]

fruits.unshift("Grapas")
console.log(fruits) //[ 'Grapas', 'Banana', 'Orange' ]

//================================================================================

//Basic Destuctruring
const user = { name: "Alice", age: 25, country: "USA" };

const{name, age} = user;
console.log(name)
console.log(age)


//Rename Destuctruring
const{name:UserName, age:UserAge} = user;
console.log(UserName)
console.log(UserAge)


//Default Destuctruring
const{ city= "Bangalore"} = user;

console.log(city)