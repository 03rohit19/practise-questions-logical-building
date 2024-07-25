import "./styles.css";

const userInput = document.querySelector(".user-input");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");
const allGuessesArray = [];

let randomNumber = Math.round(Math.random() * 100);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = parseInt(userInput.value, 10);
  if (inputValue < randomNumber) {
    result.innerText = "too low";
  } else if (inputValue > randomNumber) {
    result.innerText = "too high";
  } else {
    result.innerText = "congrats";
  }
  allGuessesArray.push(inputValue);
  allGuesses.innerText = allGuessesArray.join(",");
  userInput.value = "";
});
