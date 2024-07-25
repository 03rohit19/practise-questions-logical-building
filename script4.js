// counter-lab logic
const incrementBtn = document.getElementById("increment-btn");
const counter = document.getElementById("counter");

let count = 0;

incrementBtn.addEventListener("click", () => {
  if (count < 10) {
    count++;
    counter.innerHTML = count;
  }
});

// Stopwatch
let timer;
let startTime;
let elapsedTime;

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timerDisplay");

timerDisplay.style.display = "none";

function updateTime() {
  elapsedTime = Date.now() - startTime;
  timerDisplay.innerText = (elapsedTime / 1000).toFixed(3);
}

startBtn.addEventListener("click", () => {
  startTime = Date.now();
  timer = setInterval(updateTime, 10);
  timerDisplay.style.display = "block";
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  resetBtn.disabled = false;
  stopBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timerDisplay.style.display = "none";
  timerDisplay.innerText = "";
  resetBtn.disabled = true;
  startBtn.disabled = false;
});

// count vowels

function countVowels(str) {
  if (!str) {
    return 0;
  }
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]).toLowerCase()) {
      return count++;
    }
    return count;
  }
}

// dfault parameters

export function greet(name, greeting = "hello") {
  return `${greeting} ${name}`;
}

console.log(greet(john, greeting));

// reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString(madam);

// fetch posts

document.getElementById("fetchData").addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const unorderedList = document.getElementById("postTitles");
  let posts = data.slice(0, 20);
  for (const post of posts) {
    const listItems = document.createElement("li");
    listItems.textContent = post.title;
    unorderedList.appendChild(listItems);
  }
});

// select tab lab

function getSelectedItem() {
  const selectElement = document.getElementById("food -selection");
  return selectElement.value;
}

document.getElementById("food-selection").addEventListener("change", () => {
  console.log(getSelectedItem());
});

// armstrong no.
const isArmStrongNumber = (item) => {
  const digits = [...String(input)];
  const sum = digits.reduce((total) => total + curr ** digits.length, 0);
  return sum === input;
};

//Array lab

export function createArray() {
  const arr = [];
  for (let i = 0; i <= 5; i++) {
    arr.push(i);
  }
  return arr;
}

export function sumArray(input) {
  return input.reduce((a, b) => a + b, 0);
}

export function reverseArray(array) {
  return [...array].reverse();
}

export function filterArray(arr, fn) {
  return arr.filter(fn);
}
