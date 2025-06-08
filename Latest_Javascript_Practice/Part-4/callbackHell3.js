//Callback Hell -> (Problem with Nested callbacks)
//when callbacks are deeply nested, they create callback hell(also called pyramid doom).making the code difficult to read and maintain.

//Callback hell n JavaScript
const bakeCake = () => {
    setTimeout(() => {
        console.log("Preheat the oven.!")
        setTimeout(() => {
            console.log("Mix the ingredients")
            setTimeout(() => {
                console.log("batter into a banking pan")
                setTimeout(() => {
                    console.log("put the pan in the oven")
                    setTimeout(() => {
                        console.log("Bake for 30min")
                        setTimeout(() => {
                            console.log("Take the pan out of the oven")
                            setTimeout(() => {
                                console.log("frost the cake")
                            }, 1000)
                        }, 2000)
                    }, 2500)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 1000)
}
bakeCake()


//problem => The code becomes unreadable with deeply neasted callbacks difficult to debug and maintain.

//solution => use Promises and async & await.

//Avoid callback hell;
//*Named function
//*using promises
//*using async & await