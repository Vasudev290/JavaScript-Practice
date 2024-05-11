let goToMovie = (success,Failure) =>{
    let amount = 300
    if(amount>500){
        console.log("Got tickets");
    }
    else{
        console.log("Go to Home");
    }
}
//goToMovie(1,2);
goToMovie((tickets)=>{ 
    console.log(tickets);
}, (err)=>{
    console.log(err)
});