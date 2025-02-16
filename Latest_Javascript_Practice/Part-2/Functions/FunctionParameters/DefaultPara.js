//Default Parameters => function can take parameters and return the value.

//example -1
function greet(name="Kirana"){
    console.log(`Hello ${name}`)
}
greet()  //Hello kirana
greet("Vasu") //Hello Vasu


//example - 2
function sumExpense(){
    let Total = 0;
    for(let key of arguments){//arguments is an array-like object but not an actual array.
        Total+= key
    }
    return Total;
}

const resultValue = sumExpense(76, 65, 9, 45)
console.log(`your total expense is : ${resultValue}`)