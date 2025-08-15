
//Normal Bind Method
let name1= {
    fname: "Vasu",
    lname: "Dev"
}
let printFullName = function(city, state){
    console.log(`${this.fname} ${this.lname} from ${city},${state}`)
}

let printMyName = printFullName.bind(name1, "Bangalore" ,"KA")
printMyName()

//Polyfill Bind => A polyfill is custom code (usually JavaScript) that adds support for a feature that’s not available in an older JavaScript environment (like old browsers).
Function.prototype.myBind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args1){
        //obj.call(args[0]);
        obj.apply(args[0], [...params, ...args1]);
    }
}

let printMyName1 = printFullName.myBind(name1, "Chennai")
printMyName1("TN")