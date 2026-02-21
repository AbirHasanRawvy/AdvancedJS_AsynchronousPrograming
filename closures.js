//Closures;
function outerFunction(){
    let counter = 0;

    function innerFunction(){
        counter ++;
        console.log("Counter is: " + counter);

    }
    return innerFunction;
}

const myCounter = outerFunction();

myCounter();
myCounter();
myCounter();
myCounter();