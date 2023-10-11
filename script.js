const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    editButton.addEventListener("click", function () {
        const updatedText = prompt("Edit task:", taskText);
        if (updatedText !== null) {
            li.textContent = updatedText;
            li.appendChild(editButton);
            li.appendChild(deleteButton);
        }
    });
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});