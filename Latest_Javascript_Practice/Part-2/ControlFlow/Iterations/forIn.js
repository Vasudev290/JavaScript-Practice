//for-in loop => A loop that iterates, over the properities pf the objects
//for in syntex;
// for (key in object){
     //code block
// }


let person = {name:"Vasu", age:23, loc:"Bangalore"}
for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

let fruits = ["Apple", "Banana", "Orange", "Graps", "Lime"]
for(let key in fruits){
    console.log(`fruits : ${fruits[key]}`)
}

let offices = {
    name:"Google", 
    eno: 101,
    loc:"U.S.A"
}
for(key in offices){
    console.log(`${key} : ${offices[key]}`)
}

let colors = ["Red", "Black", "Green", "Blue"]
for(fav in colors){
    console.log(`Fav colors :${colors[fav]}`)
}