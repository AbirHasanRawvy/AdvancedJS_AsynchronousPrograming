//Promise:1)Pending 2)Fulfilled 3)Rejected
//data fetch;
const getData=()=>{
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(()=>{
            if(success){
                resolve("Data pass success");
            }else{
                reject("Data pass failed");
            }
        }, 2000);
    });
};

getData()
.then((result)=> {
    console.log(result);
}) 
.catch((error)=> {
    console.log(error);
});

console.log("Project running");
console.log("=============================================================");


//Async and Await: try catch most benifited part is findout the error;
const fetchData = async ()=>{
    try{

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1");
        
        const user = await response.json();

        console.log(user);

    }catch(error){

        console.log(error);

    }
};

fetchData();