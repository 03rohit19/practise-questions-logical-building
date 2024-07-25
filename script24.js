let countNum = document.querySelector("#counter-number");
let incredecreBtn = document.querySelector("#increment-decrement-button");
let counter = 0;
let incrementing = true;
let interval;

function startCounter() {
  interval = setInterval(() => {
    if (incrementing) {
      if (counter < 10) {
        counter++;
      } else {
        incrementing = false;
      }
    } else {
      if (counter > 0) {
        counter--;
      } else {
        clearInterval(interval); // Stop the interval when counter reaches 0
      }
    }
    countNum.innerText = counter;
  }, 1000);
}

incredecreBtn.addEventListener("click", function () {
  console.log("button clicked");

  // Clear any existing interval
  clearInterval(interval);
  // Start the counter
  startCounter();
});

// let countNum = document.querySelector("#counter-number");
// let incredecreBtn = document.querySelector("#increment-decrement-button");
// let counter = 0;
// let clickCount = 0;
// let interval;

// function incrementCounter() {
//   interval = setInterval(() => {
//     if (counter < 10) {
//       counter++;
//       countNum.innerText = counter;
//     } else {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// function decrementCounter() {
//   interval = setInterval(() => {
//     if (counter > 0) {
//       counter--;
//       countNum.innerText = counter;
//     } else {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

// incredecreBtn.addEventListener("click", function () {
//   console.log("button clicked");

//   // Clear any existing interval
//   clearInterval(interval);
//   clickCount++;

//   if (clickCount === 1) {
//     // Start incrementing on the first click
//     incrementCounter();
//   } else if (clickCount === 2) {
//     // Start decrementing on the second click
//     decrementCounter();
//     clickCount = 0; // Reset click count after starting decrement
//   }
// });
