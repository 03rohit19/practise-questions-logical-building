// recurrsion
console.log("loops vs recurrsion");
function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
}
console.log(multiply([1, 2, 3, 4, 5, 6]));

console.log("Most asked DSA questions on recurrsion");

// factorial of n
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

// create range of a number

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    let numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5));

// fibonaccci series
function fibonacci(num) {
  if (num <= 0) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// reverse string
function reverseString(str) {
  if (str === "") {
    return "";
  } else return reverseString(str.substr(1) + str.charAt(0));
}
console.log(reverseString("hello"));

// How the process goes on
// reverseString("hello") => reverseString("ello") + "h"=> olle + h => olleh
// reverseString("ello") => reverseString("llo") + "e"=> oll + e => olle
// reverseString("llo") => reverseString("lo") + "l" => ol + l => oll
// reverseString("lo") => reverseString("o") + "l" => o +l => ol
// reverseString("o") => reverseString(" ") + "o" => o
// reverseString("") => reverseString("") + "" => " "

// stack in javascript
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack.pop();
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
}

const stack = new Stack();

stack.push(12);
stack.push(121);
stack.push(123);
stack.push(124);

console.log(stack.pop());
