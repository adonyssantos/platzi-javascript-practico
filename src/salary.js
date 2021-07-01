// Data
const SALARIES_OBJ = [
  { name: "Camila", salary: 500 },
  { name: "Nath", salary: 1500 },
  { name: "Luisa", salary: 1800 },
  { name: "Daniela", salary: 2200 },
  { name: "Esperancita", salary: 200 },
  { name: "Carla", salary: 500 },
  { name: "Antonieta", salary: 1500 },
  { name: "Alicia", salary: 1300 },
  { name: "Ana", salary: 2400 },
  { name: "Julia", salary: 3400 },
  { name: "Rosa", salary: 400 },
  { name: "Angélica", salary: 400 },
  { name: "Tatiana", salary: 400 },
  { name: "Lorena", salary: 600 },
  { name: "Carolina", salary: 1600 },
  { name: "Fernanda", salary: 2600 },
  { name: "Nora", salary: 1000 },
  { name: "Gisselle", salary: 2000 },
  { name: "Bill Gates", salary: 100000000 },
];

// Promedio
const average = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length;

  return avg;
};

// Un numero es par?
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// Mediana
const median = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const half = parseInt(sortedArr.length / 2);

  if (isEven(sortedArr.length)) {
    const firstElement = sortedArr[half];
    const secondElement = sortedArr[half - 1];
    return average([firstElement, secondElement]);
  } else {
    return sortedArr[half];
  }
};

// Mediana General
const salaries = SALARIES_OBJ.map((person) => person.salary);
const salariesSorted = salaries.sort((a, b) => a - b);
const generalMedian = median(salariesSorted);

// Mediana del top 10%
const spliceStart = (salariesSorted.length * 90) / 100;
const spliceCount = salariesSorted.length - spliceStart;
const top10Salaries = salariesSorted.splice(spliceStart, spliceCount);
const top10Median = median(top10Salaries);

console.log({
  generalMedian,
  top10Median,
});
