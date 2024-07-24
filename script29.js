const questions = [
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a single-threaded language.",
  },
  {
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language and is used to create the structure of web pages.",
  },
  {
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets and is used for styling web pages.",
  },
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Node.js?",
    answer:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
];

const container = document.getElementById("questions-container");

questions.forEach((item, index) => {
  const questionElement = document.createElement("h2");
  questionElement.innerHTML = `Question ${index + 1}: ${
    item.question
  } <span>&#x25BC;</span>`;

  const answerElement = document.createElement("h3");
  answerElement.innerHTML = `Answer: ${item.answer}`;
  answerElement.style.display = "none"; // Initially hide the answer

  const toggleButton = questionElement.querySelector("span");
  toggleButton.style.cursor = "pointer"; // Make the arrow cursor a pointer

  toggleButton.addEventListener("click", () => {
    const isCurrentlyVisible = answerElement.style.display === "block";

    // Close all answers
    document.querySelectorAll("#questions-container h3").forEach((el) => {
      el.style.display = "none";
    });

    // If the clicked answer was not already visible, show it
    if (!isCurrentlyVisible) {
      answerElement.style.display = "block";
    }
  });

  container.appendChild(questionElement);
  container.appendChild(answerElement);
});
s;

// digital clock
function updateClock() {
  const date = new Date();
  const options = {
    hours: "2 digit",
    mins: "2 digit",
    secs: "2 digit",
    hour12: true,
  };
  const timeString = date.toLocaleTimeString("en-US", options);

  document.getElementById("clock").innerText = timeString;
}
setInterval(() => {
  updateClock();
}, 1000);
updateClock();
