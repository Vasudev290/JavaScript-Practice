let goToGoa = (success,failure)=>{

    let acc_Bal=100;
    if(acc_Bal >=15000){
        success("Go and Enjoye")
    }
    else{
        failure("Go To Udipi Hotel! Take 1/2 tea")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})