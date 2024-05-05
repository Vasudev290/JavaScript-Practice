//sample object function....

let emp = {id:131, 
           first_name: "Vasu", 
           Last_name:"Dev", 
           Email: "Vasukesavulu@gmail.com", 
           Loc: ['Chennai', 'Bangalore'], 
           Sal: 55000, 
           Designation:"Web Devloper"
        };

        for(key in emp){ 
            console.log(emp[key]);
        }