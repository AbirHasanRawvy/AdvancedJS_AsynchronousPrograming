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

const{name: personNam, gpa} = person;

console.log(personName);
console.log(gpa);