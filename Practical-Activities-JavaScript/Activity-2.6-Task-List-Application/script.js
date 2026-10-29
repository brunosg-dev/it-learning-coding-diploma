let taskInput = document.querySelector("#taskInput");
let addTaskButton = document.querySelector("#addTaskButton");
let taskList = document.querySelector("#taskList");

function addTask() {
    let taskText = taskInput.value;
    if (taskText) {
        let newTask = document.createElement("li");
        newTask.textContent = taskText;
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        newTask.appendChild(removeButton);
        removeButton.addEventListener("click", function() {
            newTask.remove();
        })

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
};

addTaskButton.addEventListener("click", function() {
    addTask();
});

