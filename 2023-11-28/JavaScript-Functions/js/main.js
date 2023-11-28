'use strict'

function numberAdders(a, b){
    let result = a + b;
    console.log(result);
};


numberAdders(2, 2);

let numberOne = 10;
let numberTwo = 20;
let resultOne = numberOne + numberTwo;
console.log(resultOne);
let numberThree = 10;
let numberFourth = 20;
let resultTwo = numberThree + numberFourth;
console.log(resultTwo);

numberAdders(45, 1);
numberAdders(10, 20);

function changeTemperatureToCelsius(fahrenheitDegrees = 32){
    return ((5/9)*(fahrenheitDegrees - 32)).toFixed(1);
};

console.log(changeTemperatureToCelsius(92));
console.log(changeTemperatureToCelsius());

function checkIsItdog(dog){
    let result = "You are stupid";
    if(typeof dog == "string"){
        return dog;
    }
    return result;
};

console.log(checkIsItdog(1));

// result = "Karve";
// console.log(result);

function sayHello(){ // Simple function declaration
    console.log("Hello");
}

let sayWord = function (word){ // Expression fuction declaration
    console.log(word);
}
// Equal to ---> let sayWord = "Word"

sayHello();
sayWord();
console.log(sayWord("Labas"));

function getNumber(){ // Callback function
    sayHello();
}

// Arrow functions
let arrowFunction = hello => Math.pow(4, 2);
arrowFunction();

let toys = ["Bear", "House"];
let getToy = toys => // TODO filter toys by number letters!