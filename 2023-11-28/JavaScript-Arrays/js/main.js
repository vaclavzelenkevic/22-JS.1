'use strict'

let arrayOne = [1, 2, 3, 4, 5];
// let arrayTwo = [1, 2, 3, 4, 5];
let arrayTwo = new Array(1, 2, 3, 4, 5);
console.log(arrayOne);
console.log(arrayTwo);
console.log(arrayOne[0]);
arrayOne[1] = "a";
console.log(arrayOne);
console.log(Math.pow('a'));
arrayOne.push(6);
console.log(arrayOne);
arrayOne.push(7, 8, 9, 10);
console.log(arrayOne);
console.log(arrayOne.length);
console.log(arrayOne.toString());
console.log(arrayOne.push(11));
console.log(arrayOne.pop());
console.log(arrayOne);
console.log(arrayOne.shift());
console.log(arrayOne);
console.log(arrayOne.unshift(15));
console.log(arrayOne);
delete arrayOne[1];
console.log(arrayOne);
let arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);
arrayThree[1] = 10;
console.log(arrayThree);
let fruits = ["Banana", "Kiwi", "Apple", "Peach"];
console.log(fruits);
fruits.splice(3, 0, "Mango");
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);
let newBasket = fruits.slice(1, 3);
console.log(newBasket);
console.log(fruits.sort());
console.log(arrayThree.sort());
console.log(arrayThree.sort(function(a, b){return a - b}));
console.log(arrayThree.sort(function(){return 0.5 - Math.random()}));
let cars = [{brand: "Audi", year: 2008},{brand: "Seat", year: 2016},{brand: "BMW", year: 2023}];
console.log(cars);
console.log(cars.sort());
console.log(cars.sort(function(a, b){a.brand.toLowerCase - b.brand.toLowerCase}));

let myNumbers = [49, 1, -45, 125, 78];
for(let i = 0; i < myNumbers.length; i++){
    myNumbers[i] %= 2;
    console.log(myNumbers[i]);
}
// console.log(myNumbers.forEach(function(value, index, myNumbers){

// }));

const names = ["Tadas", "Tomas", "Tautvydas"];
console.log(names);
names[0] = "Dovile";
console.log(names);
names.push("Karolis");
console.log(names);