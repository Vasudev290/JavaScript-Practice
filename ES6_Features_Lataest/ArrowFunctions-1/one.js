//Basic Syntex
//Arrow functions allow you to write shorter functions.

//Regular Function
function greet(name){
    return `Hello, ${name}`
}
console.log(greet("Vasu"))

//Arrow Function
const Wish = (name) => `Hello, ${name}`
console.log(Wish("Arjun"))

//====================================================================================================
//No paraMeter function

//Regular
function name1(){
    return "Hii, All World"
}
name1()

//Arrow Function
const sayHi = () => {
    return "Hii World"
}
console.log(sayHi())


//======================================================================================================

//Multiple Value

//Reguler Function
function multiple(a, b){
    return a*b
}
console.log(multiple(2,2))

//Arrow Function
const value = (a,b) => {
    return a*b
}
console.log(value(3,3))

//==========================================================================================

//No Curly Braces (Single Expression)

const num = num => num * num
console.log(num(3))

//========================================================================================

//With Curly Braces (Multiple Statements)

const addLog = (a, b) => {
    console.log(`Adding ${a} and ${b}`)
    return a + b ;
}

console.log(addLog(3,4))
//=============================================================================================

//Returning Objects
const data = () => ({
    name: "Vasu",
    Age: 23,
    location: "Bangalore"
})

console.log(data())

//=======================================================================================

//Arrow Methods using with Arrow functions
const numbers = [1,2,3,4,5]

const multiple = numbers.map((num) => num * 2)
console.log(multiple)


const evens = numbers.filter((num) => num % 2 === 0)
console.log(evens)


const adding = numbers.reduce((acc, num) => acc+ num, 0)
console.log(adding)

//=======================================================================================


//Using THIS Key Word
function person() {
    this.age =  0
    // setInterval(function () {
    //     this.age++;
    //     console.log(this.age)
    // }, 1000)
    setInterval(()=> {
        this.age++;
        console.log(this.age)
    }, 1000)
    
}
const Person = new person