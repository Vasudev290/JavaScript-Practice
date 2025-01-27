
//Fetch data single method
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetch Successfully"), 2000)
    });
};

const getData = async () => {
    const data = await fetchData1()
    console.log(data)
}
getData()


//Multiple data fetched methodkk
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched Successfully..!")
        }, 2000)
    })
}

const fetchOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order Fetched Successfully.!")
        }, 2000)
    })
}

const getDetails = async () => {
    try{
        const data = await fetchData()
        const order = await fetchOrder()
        console.log(data, order)
    } catch(err) {
        if (err) throw err
    }
}

getDetails()
