let movie = (success, failure)=> {
    let Acc_Bal= 1000;
    if(Acc_Bal>5000){
        success("Go to Vettai")
    }
    else{
        failure("Go to Kanguva")
    }
}
movie((Msg)=> {
    console.log("Go to Vettai");
    
}, (Err)=>{
    console.log("Go to Kanguva");
    
})