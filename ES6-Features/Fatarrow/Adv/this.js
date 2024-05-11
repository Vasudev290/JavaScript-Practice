
// sample testing using THIS keyword with function and fatarrow function

/* function greet (){
    console.log(this);
}
greet() */

let greet = ()=>{
    console.log(this);
}
greet(); 