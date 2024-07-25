// named function, arrow function, and higher-order function

export function add(a, b) {
  return a + b;
}

export const multiply = (a, b) => {
  return a * b;
};

export function combine(fn, x, y) {
  return fn(x, y);
}

const result1 = combine(add, 2, 3);
const result2 = combine(multiply, 2, 4);

console.log(result1); // Output: 5
console.log(result2); // Output: 8

// Async await
export async function fetchData() {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data Fetched");
      }, 1000);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// invert object
export const invertObject = (obj) => {
  const inverted = {};
  for (const key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
};

//iterator
export function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function mapIterator(array, callback) {
  const result = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
}

// Sample Tests - run the file (using run button) to see the output
const double = (num) => num * 2;
console.log("Doubled:", mapIterator([1, 2, 3], double)); // Expected Output: [2, 4, 6]

const increment = (num) => num + 1;
console.log("Incremented:", mapIterator([1, 2, 3], increment)); // Expected Output: [2, 3, 4]

const square = (num) => num * num;
console.log("Squared:", mapIterator([1, 2, 3], square));
