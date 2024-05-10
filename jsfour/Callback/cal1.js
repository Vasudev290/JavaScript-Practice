// sample of call back function and using if loop.......

let calculate = (a,b,operation)=>{
    let result = ""
    if(operation == "sum"){
        result = a+b
    }
    if (operation == "Multi") {
        result = a*b;
    }
    return result;
}
let output = calculate(10,20, "sum");
console.log(output);
let output1 = calculate(10,20, "Multi");
console.log(output1);