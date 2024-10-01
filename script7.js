<<<<<<< HEAD
// Synchronous : When Javascript works only on the main threqd or perform a task line by line then thats called synchronous language.
//Blocking the main thread.
let startTime = Date.now();
let currentTime = startTime;

while (startTime + 4000 > currentTime) {
  currentTime = Date.now();
}

// Call back hell

let resolveBtn;
let rejectBtn;

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Rohit" });
  }, 4000);
});

const p1 = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("promise resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("promise rejected");
  });
});

p1.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data);
});

// fetch API

fetch("http://dummmyjsn.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Async awit
async function getData() {
  try {
    const url = "http://dummyjson.com";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

getData();
// try and catch
=======
// Synchronous : When Javascript works only on the main threqd or perform a task line by line then thats called synchronous language.
//Blocking the main thread.
let startTime = Date.now();
let currentTime = startTime;

while (startTime + 4000 > currentTime) {
  currentTime = Date.now();
}

// Call back hell

let resolveBtn;
let rejectBtn;

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Rohit" });
  }, 4000);
});

const p1 = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("promise resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("promise rejected");
  });
});

p1.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data);
});

// fetch API

fetch("http://dummmyjsn.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Async awit
async function getData() {
  try {
    const url = "http://dummyjson.com";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

getData();
// try and catch
>>>>>>> origin/main
