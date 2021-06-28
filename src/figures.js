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

// DOM Printer
const print = (id, data) => (document.getElementById(id).innerHTML = data);

// Get input value
const valueOf = (id) => {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
};

// Calculate square perimeter
document
  .getElementById("square-calculate-perimeter")
  .addEventListener("click", () =>
    print(
      "square-result",
      `The perimeter is: ${perimeterSquare(valueOf("square-side"))}`
    )
  );

// Calculate square area
document
  .getElementById("square-calculate-area")
  .addEventListener("click", () =>
    print("square-result", `The area is: ${areaSquare(valueOf("square-side"))}`)
  );

// Calculate triangle perimeter
document
  .getElementById("triangle-calculate-perimeter")
  .addEventListener("click", () =>
    print(
      "triangle-result",
      `The perimeter is: ${trianglePerimeter({
        sideA: valueOf("triangle-side1"),
        sideB: valueOf("triangle-side2"),
        base: valueOf("triangle-side3"),
      })}`
    )
  );

// Calculate triangle area
document
  .getElementById("triangle-calculate-area")
  .addEventListener("click", () =>
    print(
      "triangle-result",
      `The area is: ${triangleArea({
        base: valueOf("triangle-side3"),
        height: valueOf("triangle-height"),
      })}`
    )
  );
