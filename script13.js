export const user = {
  name: "John",
  age: 30,
};
Object.seal(user);
export function isSealed(obj) {
  return Object.isSealed(obj);
}

// JavaScript: Array.prototype.every()

export function allPositive(arr) {
  return arr.every((num) => num > 0);
}

export function startsWithCapital(arr) {
  return arr.every((str) => str.charAt(0) === str.charAt(0).toUpperacase());
}

export function allNegative(arr) {
  return arr.every((num) => num < 0);
}

//Collatz Conjecture

export const steps = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  const iterate = (number, step) => {
    if (number === 1) {
      return step;
    }

    return number % 2 === 0
      ? iterate(number / 2, step + 1)
      : iterate(3 * number + 1, step + 1);
  };
  return iterate(n, 0);
};

// Anagram checker

export const areAnagrams = (strOne, strTwo) => {
  strOne = strOne.toLowerCase();
  strTwo = strTwo.toLowerCase();

  if (strOne.length !== strTwo.length) {
    return false;
  }

  const sortedStrOne = strOne.split("").sort().join("");
  const sortedStrTwo = strTwo.split("").sort().join("");

  return sortedStrOne === sortedStrTwo;
};
