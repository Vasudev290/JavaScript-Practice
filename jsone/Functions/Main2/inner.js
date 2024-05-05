// inner & outer function....

function outer(){
    console.log("Outer function");
    function inner(){
        console.log("inner function");
    }
    inner()
    inner()
    
}
outer()