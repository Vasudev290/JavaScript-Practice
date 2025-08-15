//without Reduce Example
const arr = [5, 6, 3, 7, 8, 1, 100, 10];
function totalValue(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(totalValue(arr));

//with Reduce methods
const output = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(output);

//find the max value;
function findMaxValue(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxValue(arr));

//with Reduce
const output1 = arr.reduce((max, curr) => {
  if (max < curr) {
    max = curr;
  }
  return max;
}, 0);
console.log(output1);

//Squre Value;
const squreValue = [1, 2, 3, 4, 5];
const reduceCal = squreValue.reduce((acc, curr) =>  {
    return acc + curr * curr
},0)
console.log("Output:",reduceCal)

const names = [
  { id: 101, name: "Om", loc: "Chennai", age: 26 },
  { id: 102, name: "Namo", loc: "Bangalore", age: 75 },
  { id: 103, name: "Bhagavthe", loc: "Kochi", age: 50 },
  { id: 104, name: "Vasudevayaa", loc: "Vizag", age: 26 },
];

//Map
const mapMethod = names.map((item) => item.name);
console.log(mapMethod);

//filter
const filterMathods = names
  .filter((item) => item.age < 30)
  .map((nam) => nam.name);
console.log(filterMathods);

//Reduce with names
const reduceArr = names.reduce((acc, curr) => {
    acc.push(curr.name)
    return acc
}, [])
console.log(reduceArr)

//Reduce with age < 30;
const reduceArr1 = names.reduce((acc, curr) => {
    if(curr.age < 30){
        acc.push(curr.name, curr.age)
    }
    return acc
}, [])

console.log(reduceArr1)
