let emp = {id:131, Name:"Arjun", Sal:55000}
let loc = "Bangalore"
// i want to read object property as variable name...
let{ id, Name,Sal,} = emp;   // Object Destructuring mode 

/* console.log(emp.id);
console.log(emp.Name);
console.log(emp.Sal); */

console.log(id);
console.log(Name);   // After using the object destructuring we can call like this...
console.log(Sal);
console.log(loc);