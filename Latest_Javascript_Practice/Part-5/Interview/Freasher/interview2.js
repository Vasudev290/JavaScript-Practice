
//Sort the Numbers and Character
const value = [1, 4,8, 0, 2, 9, 6];
const char = ['A', 'F','G', 'E', 'C', 'B', 'S'];
value.sort((a, b) => a-b)
char.sort((a, b) => a.localeCompare(b))
console.log(value)
console.log(char)


const arr = [[1, 2], [3, 4], [5,6], [7,8], [9, 10]]
console.log(arr.length) //5

const arr2 = [,,,]
console.log(arr2.length) //3


const arr3 = [{name: "Vasu", age:23}, {name: "Deva", age:24}, {name: "Bhagvan", age:50}];
const Value = arr3.filter((stud) => stud.age === 24)
console.log(Value)

let abc = 2;
let a= !--abc;
let b= !--abc;
console.log(a, b)