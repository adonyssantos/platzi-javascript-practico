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

// Moda
const mode = (arr) =>
  arr
    .sort(
      (a, b) =>
        arr.filter((valor) => valor === a).length -
        arr.filter((valor) => valor === b).length
    )
    .pop();

const list = [100, 200, 300, 500];
const list2 = [200, 100, 40000000, 500];
const list3 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

console.log(average(list));
console.log(median(list2));
console.log(mode(list3));
