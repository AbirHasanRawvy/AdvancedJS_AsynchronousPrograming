// Destructuring(Array & Object);

//Destructuring of Array
const student = ["Abir", 25, "Dhaka"];

const [name, age, city] = student;

console.log(`Name: ${name}, City: ${city}`);

//Destructuring of Object;
const person = {
    name1: "Abir Hasan",
    age1: 25,
    profession: "Bekar", 
};

const { name1, age1, profession } = person;

console.log(name1);
console.log(age1);
console.log(profession);
