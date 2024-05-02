let p = new Promise((resolve, reject) => {
  let resolveBtn = document.getElementById("resolve");
  let rejectBtn = document.getElementById("reject");
  resolveBtn.addEventListener("click", () => {
    resolve("promise resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("promise rejected");
  });
});
p.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(data);
});
// let p2 = new Promise((resolve, reject) => {
//   // your asynchronous operation code goes here
//   resolve("promise resolved");
// });
// let res = p2.then((data) => {
//   console.log(data);
// });

function foo() {
  console.log("hello");
  return "hello";
}
const result = foo();
console.log(result);
