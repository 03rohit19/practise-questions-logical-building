// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Closures concept");
function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `the value of count is ${count}`;
  function log() {
    console.log(message);
    console.log(count);
  }
  return [increment, log];
}
// Create the counter
const [increment, log] = createCounter();

// Call the increment function to increase the count
increment();

// Call the log function to log the message
log(); // This will still log "the value of count is 0"
// Create the counter
// var counterFunctions = createCounter();

// // Access the increment and log functions
// var increment = counterFunctions[0];
// var log = counterFunctions[1];

// // Call the increment function to increase the count
// increment();
// increment();

// // Call the log function to log the message
// log(); //
