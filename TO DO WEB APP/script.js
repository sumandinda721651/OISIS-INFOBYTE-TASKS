let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  const task = {
    id: Date.now(),
    text,
    completed: false,
    addedAt: new Date().toLocaleString(),
    completedAt: null,
  };
  tasks.push(task);
  input.value = "";
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find((t) => t.id === id);
  task.completed = !task.completed;
  task.completedAt = task.completed ? new Date().toLocaleString() : null;
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  renderTasks();
}

function editTask(id) {
  const task = tasks.find((t) => t.id === id);
  const newText = prompt("Edit your task:", task.text);
  if (newText !== null) {
    task.text = newText;
    renderTasks();
  }
}

function renderTasks() {
  const pendingList = document.getElementById("pendingTasks");
  const completedList = document.getElementById("completedTasks");
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.text}<br><small>Added: ${task.addedAt}</small>
      ${task.completed ? `<br><small>Completed: ${task.completedAt}</small>` : ""}</span>
      <div class="task-buttons">
        <button onclick="toggleComplete(${task.id})">${task.completed ? "Undo" : "Complete"}</button>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    (task.completed ? completedList : pendingList).appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderTasks);
