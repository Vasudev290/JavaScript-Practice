//Foreach method..!
let Enames=["Arjun", "Akash", "Aravind", "Akitha", "Aardhya"];

let new_Name= Enames.forEach((ename)=>{
    return ename;
})
console.log(new_Name);


//Map Method

let new_Names= Enames.map((ename)=>{
    return ename
})
console.log(new_Names);


//Find method
let new_Namee= Enames.find((ename)=> {
    return ename
})
console.log(new_Namee);

//Filter Method
let new_Namess= Enames.filter((ename)=>{
    return ename
})
console.log(new_Namess);



