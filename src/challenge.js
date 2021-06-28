const isoscelesTriangle = ({ sideA, sideB, base }) => {
  if (sideA !== sideB)
    return `The indicate sides not correspond of a isosceles triangle`;

  const b = base / 2; // half base
  const h = sideA * sideA - b * b; // hypotenuse
  const height = Math.sqrt(h);
  return `The height of the isosceles triangle is: ${height}`;
};

console.log(isoscelesTriangle({ sideA: 5, sideB: 5, base: 8 }));
