//Destructuring;

//Array Destructuring;
const colors = ["red", "green", "blue"];

const [red, green, blue] = colors;

console.log(red);
console.log(green);
console.log(blue);

//only find out thir number;
const colors1 = ["red", "green", "blue"];

const [, , thirdColor] = colors1;
console.log(thirdColor);

//swap;
let a = 4;
let b = 7;

[a, b]=[a, b];
console.log(a);
console.log(b);


//Object Destructuring;
const user = {
    name: "Abir",
    age: 15,
};

console.log(user.name);//dot notation;
console.log(user["age"]);//bracket notation;

const{name: myName, age} = user;

console.log(myName);
console.log(age);

//
const person = {name: "Rawvy"};

const{name: personName, gpa=3.51} = person;//3.51 default value;

console.log(personName);
console.log(gpa);

//
const employee = {
    name: "RAwvy",
    adress: {
        city: "Dhaka",
        zip: "1216",
    },

};
const {adress:{city, zip},} = employee;
// console.log(adress);
console.log(city);
console.log(zip);

//
const employee1 = {
    name1: "RAwvy",
    adress1: {
        city1: "Dhaka",
        zip1: "1216",
    },

};

const {address1} = employee1;
console.log(address1);

// const{city1,zip1} = address1;
// console.log(city1);
// console.log(zip1);


// function Destructuring 

const greet = (obj) => {
    const {name, age} = obj;
    console.log(`Hello, ${name}, You are ${age} years old.`);
};

const userInfo = {
    name: "Abir",
    age: 25,
};

greet(userInfo);

//destructor with array;
const student = [
    { name: "Tahfim", score: 90},
    { name: "Abir", score: 70},
];

const [{ name: topperName}, {score: lowerScore}] = student;

console.log(topperName);
console.log(lowerScore);

//Spred Operator;
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

//three dot is spred operator;
const allNums = [...nums1, ...nums2];
console.log(allNums);

//another example;
const original = [1, 2, 3];
const copied = [...original];

console.log(copied);
copied.push(4);
console.log(copied);
console.log(original);

//
const user1 = {name: "Ratul", age: 10};

const newUser = {...user1, name: "Iftear", age: 50};

console.log(newUser);
console.log(user);

//Rest Operator;
const person2 = {
    name: "Abir",
    age: 25,
    city: "Dhaka",
};

const { name, ...rest } = person2;
console.log(rest);

//Rest operator;
function total(...nums) {
    console.log(nums);
    return nums.reduce((acc, curr)=> acc + curr, 0);
    // return a + b;
}

console.log(total(1, 2, 3, 4));

//Example of rest operator;
const fruits = ["apple", "banana", "mango", "orange"];
const [firstFruit, ...restFruits] = fruits;
console.log(firstFruit);
console.log(restFruits);

//Web Storage:Local Storate: untill manualy cleared and session Storage;

localStorage.setItem("name", "Abir");


//optional training;
const user2 = {};

console.log(user2?.address2?.city2);

//eample;
const employee2 = {
    name: "Abir",
    contact: {
        email: "abirhasanrawvy@gmail.com",
    },
};

console.log(employee2?.name);
console.log(employee2?.contact?.email);
console.log(employee2?.contact?.phone);

//Nullish Coalescing: only work for null and undefiend;

let userInput = null;
let userName = userInput ?? "User Name";
console.log(userName);

//
let userInput1 = "Abir";
let userName1 = userInput1 ?? "User Name";
console.log(userName1);

//Falsy and Truthy values;
//Falsy: 0, -0, 0n, "", null, undefiend, Nan 
//Truthy values: without upper falsy value all are truthy value;

if("") {
    console.log("I am in if");
} else {
    console.log("I am in else");
}

//
if("abir") {
    console.log("I am in if");
} else {
    console.log("I am in else");
}

//
const arr = [1, 2, 3, 4, 5];
const result = arr.map((elem)=> elem % 2 === 0);
console.log(result);

const newRes = result.map((item) => {
    if (item) {
        return "It is even";
    } else {
        return "It is false";
    }
});
console.log(newRes);

//Scope: like space.
//1.global scope;
//2.functional scope;
//3.block scope;
let globalVar = "I am global";//1.global scope;
function myFun() {
    let functionVar = "I am inside the function";//2.functional scope;
    console.log(functionVar);
    if(true) {
        let blockVar = "I am inside the block";//3.block scope;
        console.log(blockVar);
        console.log(functionVar);
        console.log(globalVar);
    }
}
console.log(globalVar);
myFun();