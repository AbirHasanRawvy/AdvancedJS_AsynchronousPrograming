//Error Handaling;
try{
    let taka = "Hello";
    let balance = Number(taka);

    if(isNaN(balance)){
        throw new Error("Invalid input")
    }
    console.log("Your balance is: " + balance);

}catch(error){

    console.log("The error is: "+ error.message);

}finally{

    console.log("This is the finally block");

}