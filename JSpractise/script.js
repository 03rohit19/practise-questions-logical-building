// question sort date

const sortAscendingByDate = (array) => {
  if (array.length === 0) return [];

  array.sort((a, b) => {
    const dataA = new Date(a.date);
    const dataB = new Date(b.date);
    return dataA - dataB;
  });
  return array;
};

const events = [
  { name: "Event 1", date: "2022-10-20", location: "New York" },
  { name: "Event 2", date: "2023-02-10", location: "Paris" },
  { name: "Event 3", date: "2023-01-01", location: "Tokyo" },
];

const result1 = sortAscendingByDate(events);
console.log(result1);

// Question promise chain

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched");
    }, 1000);
  });
};

const processedData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data, "-processed");
    }, 1000);
  });
};

// export { fetchData, processedData };

fetchData()
  .then((data) => processedData(data))
  .then((processedData) => console.log(processedData))
  .catch((eroor) => console.log(eroor));

//create a counter function
function createCounter(n) {
  let count = n;
  return () => {
    let currentCount = count;
    count += 1;
    return currentCount;
  };
}

// Sample Test Cases

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(42);
console.log(secondCounter()); // 42
console.log(secondCounter()); // 43
console.log(secondCounter()); // 44

// curry function

function Sum(a, b, c) {
  return a + b + c;
}

const csum = curry(Sum);
console.log(csum(1, 2, 3));

//Sum of even numbers using in-built reduce function

export const sumOfEvens = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      // Correct condition: check if the current number is even
      return sum + num;
    } else {
      return sum;
    }
  }, 0); // Initial value of the accumulator `sum` is 0
};

// sum of even numbers withoput using inbuilt function
const sumOfEvens = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      sum += arr[i];
    }
  }
  return sum;
};

// Logging numbers
function fetchData() {
  //simulates fetching data
  return Promise.resolve([10, 9, 8, 76, 5, 2]);
}

function ProcessedData(item) {
  return new Promise((resolve) => resolve(item * 2));
}

async function sheduleLogging(data) {
  for (let i = 0; i < data.length; i++) {
    await new Promise((resolve) => {
      setTimeout(async () => {
        let processedItem = await processedData(data[i]);
        let listItem = document.createElement("li");
        listItem.textContent = processedItem;
        document.body.appendChild(listItem);
        resolve();
      }, 500 * i);
    });
  }
}

async function init() {
  const data = await fetchData();
  await sheduleLogging(data);
}

init();

// Random in ragne

export const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomInt = randomInRange(0, 9);
console.log(randomInt);

// Capitalise the first word

function capitaliseTheFirstWord(word) {
  if (word.length === 0) {
    return "";
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}
