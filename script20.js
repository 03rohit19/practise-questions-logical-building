const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 3, 4, 6, 7, 8], 6)); // 4

// Reurssion
function fun(n) {
  if (n === 0) {
    return;
  }
  console.log("fun called");
  fun(n - 1);
}
fun(10);

// factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n * factorial(n - 1));
}
factorial(5);
//sum of array

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const lastEl = arr.pop();
  return lastEl + sum(arr);
}
console.log(sum([1, 2, 3, 3, 4]));

// fibinacci number
