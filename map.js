//map
const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((num, index)=>{
    return num * 2;
})

console.log(numbers);
console.log(double);

console.log("===================================");

//with normal function
const double1 = numbers.map(function(num, index){
    return num + 5;
});

console.log(numbers);
console.log(double1);