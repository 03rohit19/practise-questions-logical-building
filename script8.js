let inputText = document.getElementById("inputText");
let inputBtn = document.getElementById("btn");
let inputList = document.getElementById("todo-list");

inputBtn.addEventListener("click", () => {
  let todoText = inputText.value;
  let todoItem = document.createElement("li");
  todoItem.textContent = todoText;
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    inputList.removeChild(todoItem);
  });
  todoItem.appendChild(removeButton);
  inputList.appendChild(todoItem);
  inputText.value = "";
});
