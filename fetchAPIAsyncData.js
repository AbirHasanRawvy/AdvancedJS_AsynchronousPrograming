//.then rules: which is depends on promise;
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=> response.json())//convert to json;
.then((data)=>{
    console.log(data);//get data in console;
}).catch((error)=>{
    console.log(error);
});
console.log("=====================================================");
//Async Await: updated;
async function getData(){
    try{

        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        console.log(data);
    } catch(error){

        console.log(error);
    }
}
getData();