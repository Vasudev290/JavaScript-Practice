// EXample -1
const products = '{"name":"Laptop", "price":"56999"}'
const jsonParse = JSON.parse(products, (key, value) => key === "price" ? Number(value) :value)
console.log(jsonParse)

//EXample -2
const PersonDetails = {
    name: "Vasu",
    age: 23,
    address: {
        street: "Jagadish Nagar",
        city: "Bangalore",
        country: "India"
    }
}

const jsonStringify = JSON.stringify(PersonDetails)
console.log(jsonStringify)

const jsonParsed = JSON.parse(jsonStringify)
console.log(jsonParsed)