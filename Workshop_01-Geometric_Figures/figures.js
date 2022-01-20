// Square

console.group("Square operations");
const squareSide = 5;

console.log("The square's side is: " + squareSide + "cm");

const squarePerimeter = squareSide * 4;

console.log("The square's perimeter is: " + squarePerimeter + "cm");

const squareArea = squareSide * squareSide;

console.log("The square's area is: " + squareArea + "cm²");
console.groupEnd();


// Equilateral/Isosceles Triangle

console.group("Triangle");
const triangleSide = 6;
const triangleBase = 4;

console.log(`The triangle side is: ${triangleSide}cm and the triangle base is: ${triangleBase}cm.`);

const triangleHeight = Math.sqrt(((triangleBase / 2) ** 2) + triangleSide);

console.log("The triangle's height is: " + triangleHeight + "cm");

const trianglePerimeter = (triangleSide * 2) + triangleBase;

console.log("The triangle's perimeter is: " + trianglePerimeter + "cm");

const triangleArea = (triangleBase * triangleHeight) / 2;

console.log("The triangle's area is: " + triangleArea + "cm²");

console.groupEnd();


// Circle

console.group("Circle");
const circleRadius = 5;

console.log("The circle's radius is: " + circleRadius + "cm");

const circleDiameter = circleRadius * 2;

console.log("The circle's diameter is: " + circleDiameter + "cm");

const circlePerimeter = circleDiameter * Math.PI;

console.log("The circle's perimeter is: " + circlePerimeter + "cm");

const circleArea = (circleRadius * circleRadius) * Math.PI;

console.log("The circle's area is: " + circleArea + "cm²");
console.groupEnd();