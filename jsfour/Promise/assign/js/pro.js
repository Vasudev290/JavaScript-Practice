//one normal settimeout function using promise concept...

let employee = [
                {"id":131, "Name":"Arjun", Salary:"25000"},
                {"id":132, "Name":"Aravind", Salary:"35000"},
                {"id":133, "Name":"Arun", Salary:"35000"},
                {"id":134, "Name":"Ajay", Salary:"45000"},
                {"id":135, "Name":"Abhi", Salary:"55000"},
               ]

let createEmployee = (emp)=>{
    return new Promise((reslove, reject)=> {
        let flag = true;
        setTimeout(()=> {
            employee.push(emp);
            flag ? reslove("Successfully inserted") : reject("Not inserted")
        } ,3000)
    });
}
let getEmployee = ()=> {
    setTimeout(()=> {
        let rows =""
        employee.forEach((emp)=>{
            rows = rows + `<tr>
                              <td>${emp.id}</td>
                              <td>${emp.Name}</td>
                              <td>${emp.Salary}</td>
                         </tr>`
        })
        document.getElementById("tbody-data").innerHTML = rows;
    },1000)
 }

createEmployee({"id":136, "Name":"Arya", Salary:"65000"}) 
    .then((msg)=>{
        console.log(msg);
        getEmployee()
    }) 
    .catch((err)=>{ 
        console.log(err);
    })