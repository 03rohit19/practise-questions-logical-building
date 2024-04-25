//local storage

document.getElementById("setStorage").addEventListener("click", function () {
  localStorage.setItem("myKey", document.getElementById("storageKey").value);
});

document.getElementById("getStorage").addEventListener("click", function () {
  document.getElementById("output").innerText = localStorage.getItem("myKey");
});

// Clear timeout
let interval;
let seconds = 0;

document.getElementById("startBtn").addEventListener("click", () => {
  clearInterval(interval); // Clear any existing interval
  interval = setInterval(updateTimer, 1000); // Start a new interval
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(interval); // Clear the interval
});

function updateTimer() {
  seconds++;
  document.getElementById("timerDisplay").textContent = `${seconds} ${
    seconds === 1 ? "second" : "seconds"
  }`;
}
