<<<<<<< HEAD
// DOM manipulaion lab
// Your JavaScript code will go here

document.getElementById("uppercase-btn").addEventListener("click", function () {
  let inputText = document.getElementById("input-text");
  let output = document.getElementById("output");
  inputText.value = inputText.value.toUpperCase();
  output.innerHTML = inputText.value;
});

document.getElementById("lowercase-btn").addEventListener("click", function () {
  let inputText = document.getElementById("input-text");
  let output = document.getElementById("output");
  inputText.value = inputText.value.toLowerCase();
  output.innerHTML = inputText.value;
});
document.getElementById("reset-btn").addEventListener("click", function () {
  let inputText = document.getElementById("input-text");
  let output = document.getElementById("output");
  inputText.value = "";
  output.innerHTML = "";
  output.textContent = "";
});

// date object lab

const currDate = new Date();
console.log(currDate);

// Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'

export function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

//
export const mostCommon = (arr) => {
  const map = {};
  let maxCount = 0;
  let mostCommon = null;

  for (const element of arr) {
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
    if (map[element] > maxCount) {
      maxCount = map[element];
      mostCommon = element;
    }
  }
  return mostCommon;
};

// double the values in the object

const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
const mappedValues = keys.map((key) => obj[key] * 2);
console.log(mappedValues);
=======
// DOM manipulaion lab
// Your JavaScript code will go here

document.getElementById("uppercase-btn").addEventListener("click", function () {
  let inputText = document.getElementById("input-text");
  let output = document.getElementById("output");
  inputText.value = inputText.value.toUpperCase();
  output.innerHTML = inputText.value;
});

document.getElementById("lowercase-btn").addEventListener("click", function () {
  let inputText = document.getElementById("input-text");
  let output = document.getElementById("output");
  inputText.value = inputText.value.toLowerCase();
  output.innerHTML = inputText.value;
});
document.getElementById("reset-btn").addEventListener("click", function () {
  let inputText = document.getElementById("input-text");
  let output = document.getElementById("output");
  inputText.value = "";
  output.innerHTML = "";
  output.textContent = "";
});

// date object lab

const currDate = new Date();
console.log(currDate);

// Create a function `formatDate` that takes a Date object and returns a formatted string in the format 'dd-mm-yyyy'

export function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

//
export const mostCommon = (arr) => {
  const map = {};
  let maxCount = 0;
  let mostCommon = null;

  for (const element of arr) {
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
    if (map[element] > maxCount) {
      maxCount = map[element];
      mostCommon = element;
    }
  }
  return mostCommon;
};

// double the values in the object

const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
const mappedValues = keys.map((key) => obj[key] * 2);
console.log(mappedValues);
>>>>>>> origin/main
