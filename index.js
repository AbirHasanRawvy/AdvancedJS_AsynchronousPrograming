// global scope
// function scope 
// Block scope 

// global scope
let name = "Alex";//its a global variable;

function sayHello(){
    console.log("Hello "+ name);
}
sayHello();

// function scope 
function greet() {
    let message = "Good Morning!";
    console.log(message);
}
greet();

// Block scope 

if(true){
    let age = 25;
    console.log(age);
}
// console.log(age);

if(true){
    var age1 = 25;
    console.log(age1);
}
console.log(age1);

//Lexical Environment
function outer(){
    let name = "BD";

    function inner(){
        console.log(name);
    }
    inner();
}
outer();