let emp = {id:2345, name:"Arjun", email:"arjun@gmail.com",}
let user = {email:"arjun@gmail.com", loc:"Chennai", country:"India"}

let details= {}
for(key in emp){
    details[key] = emp[key]
}
for(key in user){
    details[key] = user[key]
}
console.log(details);

let emp_details= {...emp, ...user}
console.log(emp_details);

