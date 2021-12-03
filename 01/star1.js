const input = require('./input.js');

const inputStr = input.data;
let floorNumber = 0;

for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === '(') {
        floorNumber++;
    } else if (inputStr[i] === ')') {
        floorNumber--;
    }
}

console.log(`Floor number: ${floorNumber}`);