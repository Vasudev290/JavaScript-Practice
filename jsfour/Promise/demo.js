let doTask = (success, Failure)=> {
    //insert data into database and get the result is boolean value.
    let flag = true;
    if(flag == true) {
        success("Data inserted Successful")
     }
    else{ 
        Failure("Not successfully")
    }
}

doTask((msg)=>{
    console.log(msg);
 }, (err)=>{
    console.log(err);
  });