//Remove Array Dupliacte Value
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2];

//get Duplicate Value
function getDuplicateValue(arr){
    let result = [];
    let n=arr.length;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[j] === arr[i]){
                result.push(arr[i])
            }
        }
    }
    return result
}
console.log(getDuplicateValue(arr))

//remove duplicate Value
function removeDuplicate(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(removeDuplicate(arr))

//remove duplicate Value (filter)
const uniqueValue = arr.filter((item, index) => arr.indexOf(item) === index)
console.log(uniqueValue)

// ================================================================================================================

//Resolve the neasted Array to single array;
const neastedArr = [1, 2, [3, 4], 5, 6,[7, 8], 9, 10];
console.log(neastedArr.flat())

function removeNeastedArr(arr){
    let stock = [...arr]
    let result = []
    while(stock.length){
        const value = stock.pop()
        if(Array.isArray(value)){
            result.push(...value)
        }else{
            result.push(value)
        }
    }
    return result.reverse();
    
}
console.log(removeNeastedArr(neastedArr))

function withRecursion(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(withRecursion(item))
        }else{
            result.push(item)
        }
    }
    return result;
}
console.log(withRecursion(neastedArr))


// ================================================================================================================

let str = "My name is Vasu";
function isPresanted(str, sub){
    if(str.indexOf(sub) === -1){
        console.log("Not Presented!")
    }else{
        console.log("Presented in index:" + str.indexOf(sub))
    }
} 
isPresanted(str, "Vasu")


const str1= "Vasu";
const str2= "Dev";
console.log(str1 === str2) //false


let a = 100;
const b = ++a + a++  
const c = a++ + ++a 
console.log(b)//101 + 101
console.log(c)//101 + 101