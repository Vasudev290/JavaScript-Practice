let employee= [
    {id:321,name:"Karna", email:"karna@gmail.com", sal:100000},
    {id:322,name:"Arjun", email:"arjun@gmail.com", sal:200000}
]

let createEmplolyee= (emp)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let db_flag= true;
            db_flag== true ? resolve("Data Insreted successfully") : reject("Failed to collect the Data");
            employee.push(emp)
        }, 3000)
    })
} 
let getEmployee= ()=> {
    setTimeout(()=>{
        let rows=""
        for(emp of employee){
            rows = rows + `<tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.email}</td>
                                <td>${emp.sal}</td>
                          </tr>`

        }
        document.getElementById("abc").innerHTML=rows
    }, 1000)
}

createEmplolyee( {id:345, name:"Abhi", email:"abhi@gmail.com", sal:50000})
.then((msg)=>{
    console.log(msg);
    getEmployee()
    
})
.catch((err)=>{
    console.log(err);
    
})