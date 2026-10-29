let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");
let taskList = document.querySelector("#taskList");

function addTask() {
    let taskText = taskInput.value;
    if (taskText) {
        let newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
    }
};

addTaskButton.addEventListener("click", function() {
    addTask();
});

