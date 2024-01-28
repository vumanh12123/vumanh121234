const newTodoInput = document.getElementById("new-todo-input");
const newTodoButton = document.getElementById("new-todo-button");
const todoItems = document.getElementById("todo-items");

newTodoButton.addEventListener("click", () => {
  const newTodo = document.createElement("li");
  newTodo.textContent = newTodoInput.value;
  todoItems.appendChild(newTodo);
  newTodoInput.value = "";
});