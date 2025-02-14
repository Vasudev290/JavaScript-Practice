//for of => A loop specically iterations, over iterable objects like array, strings or map

// for of syntex:
// for(key of array){
     //code block
// }

let fruits = ["Apple", "Mongo", "Banana", "Graphs"]
for(let fruit of fruits){
    console.log(fruit[2])
}

Students = [
    {id: 101, name: "Vasu"},
    {id: 102, name: "Dev"},
    {id: 103, name: "Chaithu"},
    {id: 104, name: "Vamsi"},
    {id: 105, name: "Krishna"},
    {id: 106, name: "Fahad"},
    {id: 107, name: "Vijay"},
    ];

//for loop;
console.log("For Loop")
for(let i=0; i<Students.length; i++){
    console.log(Students[i])
}

//while loop
console.log("While loop")
let i = 0;
while(i< Students.length){
    console.log(Students[i])
    i++
}

//do While loop
console.log("Do While loop")
i=0;
do{
    console.log(Students[i])
    i++
}while(i<Students.length)

//For in 
console.log("For-in loop")
for(let key in Students){
    console.log(Students[key])
}

//for of
console.log("for-of")
for(let key of Students){
    console.log(key)
}