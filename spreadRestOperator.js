const numbers = [1, 2, 3];

const copied = [...numbers];

console.log(copied);


//copy array;
const a = [1, 2];
const b = [3, 4];

const marge = [...a, ...b];
console.log(marge);

//copy object;
const person = { name: "Abir", age: 25};

const copiedperson = {...person};

console.log(copiedperson);

//marge object;

const info = {name: "Karim"};

const moreInfo = {age: 30};

const margeObject = {...info, ...moreInfo}

console.log(margeObject);

//Rest;
function myArray (...array){

    console.log(...array);

}

let array_1 = [1,2,3];
let array_2 = [4,5,6];
let array_3 = [7,8,9];

myArray(array_1, array_2, array_3);