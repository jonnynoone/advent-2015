const input = require('./input.js');

const inputStr = input.data;
const boxes = inputStr.split('\n');
let finalTotal = 0;

boxes.forEach(box => {
    let dimensions = box.split('x');
    let sides = calcSides(dimensions);

    let totalArea = surfaceArea(sides);
    let extraPaper = smallestSide(sides);

    let paperNeeded = totalArea + extraPaper;
    finalTotal = finalTotal + paperNeeded;
});

console.log(`The elves need ${finalTotal} square feet of wrapping paper`);

function calcSides(dimensions) {
    let sides = [];
    
    sides.push(dimensions[0] * dimensions[1]);
    sides.push(dimensions[0] * dimensions[2]);
    sides.push(dimensions[1] * dimensions[2]);

    return sides;
}

function surfaceArea(sides) {
    return sides[0] * 2 + sides[1] * 2 + sides[2] * 2;
}

function smallestSide(sides) {
    let smallestSide = sides[0];

    if (smallestSide > sides[1]) {
        smallestSide = sides[1];
    }

    if (smallestSide > sides[2]) {
        smallestSide = sides[2];
    }

    return smallestSide;
}