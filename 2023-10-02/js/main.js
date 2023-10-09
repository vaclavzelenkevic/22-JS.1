// Primitive data types:
// String, Number, Boolean, BigInt, null, undefined, Symbol
// References data types:
// Object, Array, function

let human = {
    humanName: 'Tomas',
    humanAge: 25
};
let kazkas = {};
console.log(kazkas);
kazkas = null;
 console.log(kazkas);
// console.log(typeof human);
// console.log(typeof {color:'red', position:10});
// let petAge = null;
// console.log(typeof petAge);

let funnyText = 'JavaScript is dynamic programming language.';
console.log(Number(funnyText));
let otherBooleanString = '.';
console.log(Boolean(otherBooleanString));
let funnyUndefined = undefined;
console.log(String(funnyUndefined));

// JavaScript arithmetics operators:
// +, -, *, /, %, **, ++, --
let num1 = 10;
let num2 = 2;
// console.log(num1 % num2);
// console.log(num1 ** num2);
// console.log(num1++); // num1 = num1 + 1
// console.log(num1);
// console.log(++num1);
console.log(++num1 - (num2-- / ++num2));
console.log(num1);
console.log(num2);

// JavaScript assigments operators:
// =, +=, -=, *=, /=, %=, **=
let myNumber = 10;
myNumber = myNumber + 10;
console.log(myNumber);
myNumber += 10;
console.log(myNumber);
myNumber -= 10;
console.log(myNumber);
myNumber *= 10;
console.log(myNumber);
myNumber /= 3;
console.log(myNumber);
myNumber %= 10;
console.log(myNumber);
myNumber **= 10;
console.log(myNumber);
// JavaScript comparision operators:
// ==, ===, !=, !==, >, <, >=, <=
let n1 = 10;
let n2 = '10';
console.log(n1 == n2); // Only value
console.log(n1 === n2); // Value + Data Type
console.log(n1 != n2);
console.log(n1 !== n2);
// JavaScript logic operators:
// &&, ||, !
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!true && true); // false

// JavaScript bitwise operators:
// &, |, ^, ~, <<, >>, >>>
// 5 = 0101
let n3 = 5;
let n4 = 3;
console.log(n3 & n4);
// 5 --> 0101
// 3 --> 0011
// -----------
//     & 0001
console.log(n3 | n4);
// 5 --> 0101
// 3 --> 0011
// -----------
//     | 0111
console.log(n3 ^ n4);
// 5 --> 0101
// 3 --> 0011
// -----------
//     ^ 0110
console.log(~n3);
// 5 --> 0000 0101
// -----------
//     ~ 1111 1010
console.log(n3 << 1);
// 5 --> 0000 0101
// -----------
//    << 0000 1010
console.log((n3 >> 1).toString(2));
// 5 --> 0000 0101
// -----------
//    >> 0000 0010
console.log((n3 >>> 1).toString(2));
// 5 --> 0000 0101
// -----------
//    >> 0000 0010

// Change two number in place
let x = 10;
let y = 20;
let tmp;
tmp = x;
x = y;
y = tmp;
console.log('x ' + x);
console.log('y ' + y);
