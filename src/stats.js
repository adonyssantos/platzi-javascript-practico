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

// DOM Printer
const print = (id, data) => (document.getElementById(id).innerHTML = data());

// Get input value
const valueOf = (id) => {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
};

// Convert number string to array
const stringToArray = (string) => {
  const array = string.trim().split(/ +/g);
  const newArray = [];

  array.map((element) => {
    const elementWithoutComa = element.replace(",", "");
    const elementInNumber = parseInt(elementWithoutComa);
    newArray.push(elementInNumber);
  });

  return newArray;
};

document.getElementById("calculate-average").addEventListener("click", () => {
  print("result", () => {
    const result = average(stringToArray(valueOf("numbers")));
    return `The avg is: ${result}`;
  });
});

document.getElementById("calculate-median").addEventListener("click", () => {
  print("result", () => {
    const result = median(stringToArray(valueOf("numbers")));
    return `The median is: ${result}`;
  });
});

document.getElementById("calculate-mode").addEventListener("click", () => {
  print("result", () => {
    const result = mode(stringToArray(valueOf("numbers")));
    return `The mode is: ${result}`;
  });
});
