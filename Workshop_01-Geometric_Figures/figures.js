// Square

// console.group("Square operations");
// const squareSide = 5;

// console.log("The square's side is: " + squareSide + "cm");

// const squarePerimeter = squareSide * 4;

// console.log("The square's perimeter is: " + squarePerimeter + "cm");

// const squareArea = squareSide * squareSide;

// console.log("The square's area is: " + squareArea + "cm²");
// console.groupEnd();

function squarePerimeter() {
    const width = document.getElementById("sqr_width");
    const heigth = document.getElementById("sqr_heigth");
    const calc = (width.value * 2) + (heigth.value * 2);
    const result = calc.toFixed(2);
    return alert(result + "cm");
}

function squareArea() {
    const width = document.getElementById("sqr_width");
    const heigth = document.getElementById("sqr_heigth");
    const calc = width.value * heigth.value;
    const result = calc.toFixed(2);
    return alert(result + "cm²");
}



// Equilateral/Isosceles Triangle

// console.group("Triangle");
// const triangleSide = 6;
// const triangleBase = 4;

// console.log(`The triangle side is: ${triangleSide}cm and the triangle base is: ${triangleBase}cm.`);

// const triangleHeight = Math.sqrt(((triangleBase / 2) ** 2) + triangleSide);

// console.log("The triangle's height is: " + triangleHeight + "cm");

// const trianglePerimeter = (triangleSide * 2) + triangleBase;

// console.log("The triangle's perimeter is: " + trianglePerimeter + "cm");

// const triangleArea = (triangleBase * triangleHeight) / 2;

// console.log("The triangle's area is: " + triangleArea + "cm²");

// console.groupEnd();

function trianglePerimeter() {
    const side = document.getElementById("trg_side");
    const base = document.getElementById("trg_base");
    const calc = parseFloat(side.value) + parseFloat(side.value) + parseFloat(base.value);
    const result = calc.toFixed(2);
    return alert(result + "cm");
}

function triangleArea() {
    const side = document.getElementById("trg_side");
    const base = document.getElementById("trg_base");
    const height = Math.sqrt(((base.value / 2) ** 2) + (side.value ** 2));
    const calc = (height * base.value) / 2;
    const result = calc.toFixed(2);
    return alert(result + "cm²");
}



// Circle

// console.group("Circle");
// const circleRadius = 5;

// console.log("The circle's radius is: " + circleRadius + "cm");

// const circleDiameter = circleRadius * 2;

// console.log("The circle's diameter is: " + circleDiameter + "cm");

// const circlePerimeter = circleDiameter * Math.PI;

// console.log("The circle's perimeter is: " + circlePerimeter + "cm");

// const circleArea = (circleRadius * circleRadius) * Math.PI;

// console.log("The circle's area is: " + circleArea + "cm²");
// console.groupEnd();

function circlePerimeter() {
    const radius = document.getElementById("crl_radius");
    const diameter = radius.value * 2;
    const calc = diameter * Math.PI;
    const result = calc.toFixed(2);
    return alert(result + "cm");
}

function circleArea() {
    const radius = document.getElementById("crl_radius");
    const calc = (radius.value ** 2) * Math.PI;
    const result = calc.toFixed(2);
    return alert(result + "cm²");
}