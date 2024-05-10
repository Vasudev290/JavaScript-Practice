let sum = (a,b)=>{       // In callback function we can pass function as argument....
    return a+b
}

let multi = (a,b)=>{
    return a*b
}

let calaculate = (a,b, callback)=>{
    return callback(a,b);
    //normal logic
}

let result = calaculate(100,200, sum)
console.log(result);
let result1 = calaculate(5,5,multi)
console.log(result1);