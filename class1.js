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