'use strict'

let realArray = ['f', 'b', 'c'];
realArray[0] = "d";
console.log(realArray);
let message = 'Lunch brake is very soon...';
let messageArray = message.split('');
console.log(messageArray);
const cars = ["BMW", "Volvo", "Mercedes"];
cars[0] = "Saab";
console.log(cars);
cars[3] = "Kazkas";
console.log(cars);
cars.push("Labas");
console.log(cars); // TODO
let names = new Array("Dovile", "Tomas", "Egle");
console.log(names.toString());
const user = {
    firstName: "Blinda",
    secondName: "Tadas",
    age: 46
};

let users = [user, user, user];
console.log(users);
console.log(users.length);
console.log(realArray.sort());
console.log(realArray[5]);
for(let i = 0; i < realArray.length; i++){
    realArray[i] += 'a';
}
console.log(realArray);
realArray[realArray.length] = "fa";
console.log(realArray);