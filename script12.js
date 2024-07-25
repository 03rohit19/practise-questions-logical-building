//event emitter

export class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((listener) => listener.apply(this, args));
    }
  }
  off(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}

// fetching API data using axios
import axios from "axios";

export async function fetchData() {
  try {
    const result = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts/1"),
      axios.get("https://dog.ceo/api/breeds/image/random"),
      axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json"),
    ]);

    return {
      randomTitle: result[0].data["title"],
      imageLink: result[1].data["message"],
      bitcoinPrice: result[2].data["bpi"]["USD"]["rate_float"],
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// To test the function, use the following or a similar method:
(async () => {
  const result = await fetchData();
  console.log(result);
})();

// Object.create
const person = {
  name: "john doe",
};
const student = Object.create(person);
student.course = "Sostware developement";
export { person, student };

// Your code goes here.
try {
  // This function doesn't exist, so it will throw an error
  nonExistentFunction();
} catch (error) {
  // This block catches and handles the error
  console.error(error.message);
} finally {
  // This block runs regardless of the previous blocks' outcomes
  console.log("Error handling complete.");
}


// Challenge #1: Create a paragraph element with id 'description'
const container = document.getElementById('container')
const description = document.createElement('p')
description.id = 'description'
container.appendChild(description)

// Challenge #2: Set the inner text of the paragraph
description.innerText = 'Welcome to the DOM Manipulation Lab'

// Challenge #3: Add a button element with id 'add-task' and inner text 'Add Task'
const addTaskButton = document.createElement('button')
addTaskButton.id = 'add-task'
addTaskButton.innerText = 'Add Task'
container.appendChild(addTaskButton)

// Challenge #4: Add a click event listener to the 'add-task' button
const taskList = document.createElement('ul')
taskList.id = 'task-list'
container.appendChild(taskList)

let taskCounter = 0
addTaskButton.addEventListener('click', () => {
	taskCounter++
	const newTask = document.createElement('li')
	newTask.innerText = `Task ${taskCounter}`
	taskList.appendChild(newTask)
})


// COVERT TO 24HOURS FORMAT
