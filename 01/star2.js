const input = require('./input.js');

const inputStr = input.data;
let floorNumber = 0;
let positionArr = [];

for (let i = 0; i < inputStr.length; i++) {
    if (floorNumber === -1) {
        positionArr.push(i);
    }

    if (inputStr[i] === '(') {
        floorNumber++;
    } else if (inputStr[i] === ')') {
        floorNumber--;
    }
}

console.log(`Floor number: ${floorNumber}`);
console.log(`First point to reach basement: ${positionArr[0]}`);