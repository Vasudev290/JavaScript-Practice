//Promises -> A Promises is a built-in javascript object that represent the eventual completion or failure of an async operation.
//*it allow chaining  operations(.then) instead od using neasted callbacks(call back hell)
//*Async code manner effctciently.

example -1
const promises = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Success!")
    }else{
        reject("Fail")
    }
})
promises.then(msg => console.log(msg)).catch(err => console.log(err))

//example -2
const data = new Promise((res, rej) => {
    setTimeout(() => {
        const value = "arjun`";
        if(value){
            res(value)
        }else{
            rej(new Error("No data Presented!"))
        }
    }, 3000);
})
data
.then((val) => {
    return val
})
.then(val => console.log(val))
.catch(err => console.log(err))
.finally(() => {
    console.log("Operation completed Successfully!")
})

//example -3 toss Function method using with Promise
const tossGame = new Promise((res, rej) => {
    const randomGame = Math.floor(Math.random() * 2)
    if(randomGame === 0){
        res()
    }else{
        rej()
    }
});
tossGame
.then(() => {
    console.log("Congarats..!, Its head, You win the Toss")
})
.catch(() => {
    console.log("Sorry! you lost it's tails")
})
.finally(() => {
    console.log("The Toss was completed!, The game begins Now!")
})

//Example -4
let developer = true;
const workStatues = new Promise((res, rej) => {
    developer ? res("The project is successfully completed..!") : rej("The project is not completed")
})
workStatues
.then((val) => {
    console.log("The work status is completed :", val)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("The operation is completed!")
})

//example -5

//Get user by id
//Get all user subscriptions (hotstar, prime)
//Calculate total cost of all

const getUserId = (id) => {
    console.log("Got the User Id :", id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, name: "Vasu"})
        }, 1000)
    })
}
const getUserSuscriptionId = (id) => {
    console.log("Got the User Subscription :", id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id:1, title: "Hotstar"},
                {id:2, title: "Prime"},
                {id:3, title: "Netflix"},
                {id:4, title: "Aha"},
            ])
        }, 2000)
    })
}
const getUserCost = (subscription) => {
    console.log("Total Subscription :", subscription)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(subscription.length * 1000)
        }, 3000)
    })
}
getUserId(1)
.then(getUserSuscriptionId)
.then(getUserCost)
.then((cost) => {
    console.log("The Total Cost of Subscription :", cost)
})

//example -6
console.log("Welcome!")
const Reg = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Please Register!")
            resolve()
        }, 2000);
    })
}
const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("PLease login!")
            resolve()
        }, 3000);
    })
}
const thankYou = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Thank you for the Registration!")
            resolve()
        }, 4000)
    })
}
Reg()
.then(login)
.then(thankYou)
.catch(err => console.log(err))
.finally(() => console.log("The Operation Completed!"))


//example -7
console.log("Ordering The Coffee")
//Produceing code
const orderCoffee = new Promise((resolve, reject) => {
    const coffeeMechine = true;
    const coffeePrice = {amt : 20}
    setTimeout(() => {
      coffeeMechine ? resolve({message:"Given the coffee to Customer ☕🍵🍵🍵", info:coffeePrice}) : reject("Coffee Mechine was Broken 💔💔")
    }, 2000)
})
//Consumeing code
orderCoffee
.then(({message, info}) => {
    console.log("Coffee Message :", message)
    console.log("Coffee Price :", info)
    return new Promise((res) => {
        res("Here is the bill : ₹20")
    })
})
.then((billInfo) => {
    console.log("Bill Info :", billInfo)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log("Thank you for visiting..!🙏🙏")
})

//EXample -8
const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000) 
    })
}
wait()
.then(() => {
    console.log(3)
    return wait()
})
.then(() => {
    console.log(2)
    return wait()
})
.then(() => {
    console.log(1)
    return wait()
})
.then(() => {
    console.log("Happy New Year!")
    return wait()
})
console.log("The Count begins Nowww!")