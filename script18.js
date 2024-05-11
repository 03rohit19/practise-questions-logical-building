// find triplet
function findTriplet(array) {
  let found = false;
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          console.log(array[i], array[j], array[k]);
          found = true;
        }
      }
    }
  }
  if (!found) {
    console.log("no triplet");
  }
}

//find minmax
function findMaxMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  return [min, max];
}
let myArray = [1, 2, 3, 4, 5];
console.log(findMaxMin(myArray));

// remove element
function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  arr.length = i; // Truncate the array from index i onwards
  return arr;
}

let myArray3 = [2, 2, 3, 3];
console.log(removeElement(myArray3, 2));
function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  arr.length = i; // Truncate the array from index i onwards
  return arr;
}

let myArray1 = [2, 2, 3, 3];
console.log(removeElement(myArray1, 2));

// Two sum
function twoSums(nums, target) {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (numObj.hasOwnProperty(complement)) {
      return [numObj[complement], i];
    }
    numObj[num] = i;
  }
  return [];
}
console.log(twoSums([4, 5, 10], 9));
