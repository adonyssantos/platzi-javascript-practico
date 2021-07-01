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
  const half = parseInt(arr.length / 2);

  if (isEven(arr.length)) {
    const firstElement = arr[half];
    const secondElement = arr[half - 1];
    return average([firstElement, secondElement]);
  } else {
    return arr[half];
  }
};

const list = [100, 200, 300, 500];
const list2 = [100, 200, 500, 40000000];

console.log(average(list));
console.log(median(list2));
