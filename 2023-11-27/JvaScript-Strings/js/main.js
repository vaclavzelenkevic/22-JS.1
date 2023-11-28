'use strict'

// String declaration and initialization
let hello = 'hello';
let world = "world";
console.log(hello);
console.log(world);
let myName = `${hello} Vaclav`;
console.log(myName);
// Strings can be created from other types
let intString = String(32);
console.log(typeof intString + ' ' + intString);
let booleanString = String(true);
console.log(typeof booleanString + ' ' + booleanString);
let nullString = String(null);
console.log(typeof nullString + ' ' + nullString);
let otherInt = (45612).toString();
console.log(typeof otherInt);
let myObject = ({}).toString();
console.log(typeof myObject);
let charCode = String.fromCharCode(104,101,108,108,111);
console.log(charCode);
// Strings concatenate
console.log('Concatenate: ' + hello + ' ' + world);
console.log("Good day".concat(" today", " and another day"));
let longText = "JavaScript is good programming language";
console.log(longText.split('').reverse().join(''));
let reverseString = '';
for(let i = longText.length - 1; i >= 0; i--){
    reverseString += longText[i];
}
console.log(reverseString);
let char1 = 'a';
let char2 = 'b';
console.log(char1.localeCompare(char2));
function stringComparator(a, b){
    if(a === b){
        return 0;
    } else if(a > b){
        return 1;
    } else {
        return -1;
    }
};
console.log(stringComparator("a", "b"));
let message = "JavaScript char's string";
console.log(message[5]);

let otherMessage = "The sky's surface is blue";
console.log(otherMessage);
otherMessage = 'The sky\'s surface is blue';
console.log(otherMessage);
let content = "<p> class=\"special\">Text</p>";
console.log(content);
console.log(otherMessage.length);

let textWithLongSpaces = "JavaScript is  not    good on Mondays."
console.log(textWithLongSpaces.replace(/\s+/g, ' ').trim()); // DONE
console.log(otherMessage.indexOf("surface"));
console.log(otherMessage.replace("blue", "orange"));
console.log(otherMessage.toLowerCase());
console.log(otherMessage.toUpperCase());
console.log("abc".repeat(3));