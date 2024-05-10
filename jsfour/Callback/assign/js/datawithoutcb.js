let employee = [{id:131, Name:"Arjun", Sal:55000},
                {id:132, Name:"Aravind", Sal:65000}]

/* let createEmployee =(emp)=>{ 
    console.log("first");
    //execute will take 3 sec 
    setTimeout(()=>{ 
        employee.push(emp)
    }, 3000)
}

let getEmployee =()=>{ 
    console.log("second");
    //execute wii take 1 sec
    setTimeout(()=>{
        let rows = ""
        employee.forEach((employee)=>{
           rows +=  `<tr>
                          <td>${employee.id}</td>
                          <td>${employee.Name}</td>
                          <td>${employee.Sal}</td>
                    <tr/>` 
        })

        document.getElementById("data").innerHTML = rows
    }, 1000)
}     
createEmployee({id:133, Name:"Arun", Sal:75000})
getEmployee()            */


let createEmployee =(emp)=>{
    setTimeout(()=>{ 
        employee.push(emp)
    }, 3000)
    
}
let getEmployee =()=>{
    setTimeout(()=>{ 
        let rows = ""
        employee.forEach((employee)=>{
            rows +=  `<tr>
                           <td>${employee.id}</td>
                           <td>${employee.Name}</td>
                           <td>${employee.Sal}</td>
                     <tr/>` 
         })
 
         document.getElementById("data").innerHTML = rows
    },1000)
 }


createEmployee({id:131, Name:"Arun", Sal:75000});
getEmployee();