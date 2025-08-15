//Call Methods => Immediately invoke function with a specific this and individual arguments.
// as => we have call method which is used to invoke the function directly by passing in the reference which points to the "this" variable inside the method
let name1 = {
  firstName: "Vasu",
  lastName: "Dev",
};
let printFullName = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
};
printFullName.call(name1, "Bangalore", "Karnataka");

//Apply methods => Like call, but takes arguments as an array (or array-like).
printFullName.apply(name1, ["Bangalore", "Karnataka"]);

let name2 = {
  firstName: "Sushmitha",
  lastName: "San",
};
printFullName.call(name2, "Chennai", "Tamilnadu");

//Bind Method => Returns a new function with this permanently set to thisArg and optionally some arguments pre-applied.
// It does NOT call the function immediately.

//as =   does not directrly invoke the method, it gives you the copy of that exactly same as method which can be invoke the later.

let printMyName = printFullName.bind(name2, "Chennai", "Tamilnadu");
console.log(printMyName); //[Function: bound printFullName]
printMyName(); //Sushmitha San from Chennai, Tamilnadu
