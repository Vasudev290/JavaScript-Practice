//forEach and Map Examples
var numbers = [1,2,3,4,5,6,7,8,9,10]

//for loop
console.log("For loop")
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
//while loop
console.log("While loop")
let i=0;
while(i<numbers.length){
    console.log(numbers[i])
    i++
}
//for in
console.log("for in")
for(let key in numbers){
    console.log(numbers[key])
}
console.log("for Each")
const forEachValue = numbers.forEach(num => console.log(num))

//Calculate the Value
let sum = 0;
numbers.forEach(num => sum+=num)
console.log(`Total value of ${sum}`)

//map example
//input = [1,2,3,4,5,6] Expected output = [1,4,9,16,36]

//loop method
console.log("For Loop")
const loopInput = [1,2,3,4,5,6];
const expectOutput = [];
for(let i=0; i<loopInput.length; i++){
    expectOutput.push(loopInput[i] * loopInput[i])
}
console.log(`Original Value: ${loopInput}`)
console.log(`Expected Output: ${expectOutput}`)

//function method
console.log("Function method")
function squreMappingValue(num){
    let result = [];
    for(let i=0; i<loopInput.length; i++){
        result.push(expectOutput[i] * expectOutput[i])
    }
}
squreMappingValue(loopInput)
console.log(`Original Value: ${loopInput}`)
console.log(`Expected Output: ${expectOutput}`)

//iterate object method (map)
console.log("Map method")
const squreMappingValue1 = loopInput.map(num => num * num)
console.log(`Original Value: ${loopInput}`)
console.log(`Expected Output: ${squreMappingValue1}`)


//Filter method
// input = [1,2,3,4,5,6,7,8,9,10]
// expected output = [1,4,9,16,36..etc]

const input = [1,2,3,4,5,6,7,8,9,10];
const output = [];

//for loop method
for(let i=0; i < input.length; i++){
    let element = input[i];
    if(element % 2 === 1){
        output.push(element * element)
    }
}
console.log(`input : ${input}`)
console.log(`Output : ${output}`)


//function method
console.log("function method")
function oddNumber1(num){
    for(i=0; i<input.length; i++){
        let num = input[i]
        if(num % 2 === 0){
            output.push(num)
        }
    }
    return output;
}
oddNumber1(input)
console.log(`input : ${input}`)
console.log(`function Output : ${output}`)

//filter method
const filterValue = input.filter(element => element % 2 == 1)
console.log(input)
console.log(filterValue)