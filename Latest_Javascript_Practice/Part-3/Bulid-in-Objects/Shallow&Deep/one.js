//Shallow Copy
const Details = {
    name: "Vasu",
    address: {city: "Bangalore"},
    Hobbies: ["Reading", "Cooking"]
}
console.log(Details)
// {
//   name: 'Vasu',
//   address: { city: 'Bangalore' },
//   Hobbies: [ 'Reading', 'Cooking' ]
// }

const shallowCopy = {...Details};
shallowCopy.address.city = "Chennai";
shallowCopy.Hobbies[0] = "Gym";

console.log(shallowCopy)
// {
//   name: 'Vasu',
//   address: { city: 'Chennai' },
//   Hobbies: [ 'Gym', 'Cooking' ]
// }


//Deep Copy
const deepCopy = {
    ...Details,
    address: {...Details.address},
    Hobbies: {...Details.Hobbies},
}
deepCopy.address = "Kochi";
deepCopy.Hobbies[0] = "Swimming";

console.log(Details.address)
console.log(Details.Hobbies)
// { city: 'Bangalore' }
// [ 'Reading', 'Cooking' ]