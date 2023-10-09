// Conditional statements
// if-then, if-then-else, if-then-if
// if(condition){
//     // TODO
// }
// if-then
let isRaining = false;
if(isRaining){
    console.log("Take an umbrella ...");
}
// if-then-else
isRaining = false;
if(isRaining){
    console.log("Take an umbrella ...");
} else {
    console.log("Today is sunny day ...");
}
// if-then-if
isRaining = false;
let isOther = true;
if(isRaining){
    console.log("Take an umbrella ...");
} else if (isRaining && isOther){
    console.log("Today is other day ...");
} else {
    console.log("...");
}
// {} Bad practice!!!
if (isRaining) 
    console.log(':)');
else 
    console.log(':(');
// Switch statement
switch(isRaining){
    case true:
        console.log(':)');
        break;
    case false:
        console.log(':(');
        break;
    default:
        console.log('Other result ...');
        break;
}
// Loop statements
// for, for-in, while, do-while
// for(start;stop;step){
//     // TODO
// }
let x = 0
for(;;){ // Infinity loop
    if(x <=10){
        console.log(x);
        x++;
    } else {
        break;
    }
}
// for-in
const numbers = [1, 2, 3, 5, 20]; // Arrays is dynamic
let result = 0;
for(let i in numbers){
    result += numbers[i];
    console.log(result);
    // console.log(numbers[i]); 
}
let myObject = {
    objectSize: 100,
    objectColor: 'red'
}
for(const element in myObject){
    console.log(element + ': ' + myObject[element]);
}
// for-of
const names = ['Dovile', 'Maksimas', 'Tomas'];
for(const element of names){
    console.log(element);
}
// while
let doIHaveMoney = true;
let moneyCounter = 100;
while(doIHaveMoney && moneyCounter > 20){
    console.log('Buying ...');
    moneyCounter -= 20;
    console.log(moneyCounter);
}
console.log(moneyCounter);
// do-while
let numberA = 10;
// let numberB = 20;
let result2 = 0;
do{
    result2 += numberA;
    console.log(result2);
} while (result2 <= 20);
// Infinity loops
// for(;;){};
// while(true){};
// do{}while(true);
// break, continue keywords
for(let x = 0; x < 10; x++){
    if(x >= 5){
        break;
    }
    console.log(x);
}
for(let x = 0; x < 10; x++){
    if(x >= 3 && x <= 6){
        console.log("Don't printing x value");
        continue;
    }
    console.log(x);
}
// for in for
for(let x = 0; x < 5; x++){
    for(let y = 0; y < 5; y++){
        if(true){
            // TODO
        } else if(false){
            // TODO
        } else{
            // TODO
        }
        console.log(x + ' ' + y);
    }
}

let num1 = 5;
let num2 = 10;

let result3 = num1 + num2;
console.log(result3);

num1 = 45;
num2 = 129;

result3 = num1 + num2;
console.log(result3);

function numbersAdder(a, b){
    result = a + b;
    console.log(result);
}

numbersAdder(10, 20);
numbersAdder(-45, 124);
console.dir(numbersAdder);
console.log(numbersAdder());

// Callback function
function fun1(){
    console.log("Hello, I'm fun1");
//    fun1(); // Recursion!!!
}

// Fibonacci numbers count

//fun1();

let res = function(fun1, c){
    fun1;
    return c;
}

