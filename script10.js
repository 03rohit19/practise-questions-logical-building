<<<<<<< HEAD
let input = document.getElementById("inputValue");

const debounce = (func, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

const callApi = (e) => {
  console.log("Calling api", e.target.value);
};

const debouncedApi = debounce(callApi, 1000);

input.addEventListener("input", debouncedApi);
=======
let input = document.getElementById("inputValue");

const debounce = (func, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

const callApi = (e) => {
  console.log("Calling api", e.target.value);
};

const debouncedApi = debounce(callApi, 1000);

input.addEventListener("input", debouncedApi);
>>>>>>> origin/main
