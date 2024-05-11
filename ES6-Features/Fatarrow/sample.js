//sample using  Normal function and Fat arrow function  .....


function add (a,b){
    console.log(a+b);
}
add(10,20)

let add = (a,b)=>{
    console.log(a+b);
}
add(10,20)

// sample using parameter with Normal function and Fat arrow function  .....

function add(a,b,c,){
    return a+b+c
}
let result = add(10,20,30)
console.log(result);

let add = (a,b,c,)=>{
    return a+b+c
}
let result1 = add(10,20,30)
console.log(result1);