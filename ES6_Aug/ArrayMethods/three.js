// Pop Method..!
let number = [1,2,3,4,5,6,7,8,9,10]
let even_number= []
for (num of number){
    if (num%2 === 0)
        even_number.push(num)
}
console.log(even_number);


// Filter method
let even_numberz = number.filter((num)=> {
    return num%2 === 0
})
console.log(even_numberz);

