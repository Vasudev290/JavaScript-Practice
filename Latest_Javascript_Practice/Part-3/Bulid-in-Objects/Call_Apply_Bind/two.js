
//Call method
const nam1 = {name: "Vasu!"};
function greet(greetings){
  console.log(greetings+" "+this.name)
}
greet.call(nam1, "Good Morning")


//Apply method
const nums = [3, 5, 1];
const m = Math.max.apply(null, nums); // 5
const n = Math.max(...nums); // 5
console.log(m, n)

