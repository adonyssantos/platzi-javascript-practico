// Square
const perimeterSquare = (sideSquare) => sideSquare * 4;
const areaSquare = (sideSquare) => sideSquare ** 2;

// Triangle
const trianglePerimeter = ({ sideA, sideB, base }) => sideA + sideB + base;
const triangleArea = ({ base, height }) => (base * height) / 2;

// Circle
const circleDiameter = (radius) => radius + radius;
const circlePerimeter = (radius) => circleDiameter(radius) * Math.PI;
const circleArea = (radius) => radius * radius * Math.PI;
