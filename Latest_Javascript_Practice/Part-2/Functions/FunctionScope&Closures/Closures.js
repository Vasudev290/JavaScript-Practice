//closures => Given you access to an outer function scope from an inner function.

//Basic closures;
function outerFunction(){
    let outerVar = "I'm from outer function";

    function innerFunction(){
        console.log(outerVar)
    }
    return innerFunction;
}
const myClosures = outerFunction();
myClosures();

//example -2
//Closure for Data Privacy
function backAccount(initialBalance){
    let balance = initialBalance; //private variable

    return {
        deposit: function(amount){
            balance += amount;
            console.log(`Deposited : ${amount}, New Balance ${balance}`)
        },
        withDraw: function(amount){
            if(amount > balance){
                console.log("Insufficent balance")
            }else{
                balance -= amount;
                console.log(`withDrawn: ${amount}, Remaining Balance: ${balance}`)
            }
        },
        checkBalance: function(){
            console.log(`Current Balance: ${balance}`)
        }
    };
}
const myAccount = backAccount(500);
myAccount.deposit(200);  //Deposited : 200, New Balance 700
myAccount.withDraw(100);  //withDrawn: 100, Remaining Balance: 600
myAccount.checkBalance()  //Current Balance: 600
console.log(myAccount.balance)  //undifined  => (Cannot access private variable)


//example -3
//closures for counter

function createCounter(){
    let count = 0;

    return function() {
        count ++;
        console.log(`Corrent Count: ${count}`);
    };
}

const counter = createCounter()
counter() //1
counter() //2


