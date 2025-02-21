//Promise Api 

//example -1 (Promise.all())
//runs multiple promises in parallal and resolve and reject when all promises are fullfilled
//if any promise rejects, the entire promise.all() fails.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Promise was Success..!")
    }, 3000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 Promise was Fail..!")
    }, 1000)
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Promise was Success..!")
    }, 2000)
});


Promise.all([p1, p2, p3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
})


//example -2 (Promise.allSettled())
//Waits for all promise to settle(either resolve or reject)
//Unlike promise.all(), it never fails, even if some promise are rejects
const pas1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Promise was Success..!")
    }, 3000)
});
const pas2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 Promise was Fail..!")
    }, 1000)
});
const pas3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Promise was Success..!")
    }, 2000)
});


Promise.allSettled([pas1, pas2, pas3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
})


//example -3 (Promise.race())
//Return the result of the first promise that settles (Fulfilled or reject.
//The fastest promises wins regardless of success or fail

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Promise was Success..!")
    }, 3000)
});
const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 Promise was Fail..!")
    }, 4000)
});
const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Promise was Success..!")
    }, 1000)
});


Promise.race([pr1, pr2, pr3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
})


//example -4 (Promise.any())
//Return the first fulfilled promises (Fulfilled seeking api)
//if all promises reject, it throws an AggregateError.

const pa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Promise was Success..!")
    }, 3000)
});
const pa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 Promise was Fail..!")
    }, 4000)
});
const pa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 Promise was Success..!")
    }, 1000)
});


Promise.any([pa1, pa2, pa3])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.error(err)
})