 // Task list array
 let tasks = [];

 // Function to add a new task
 function addTask() {
     const taskInput = document.getElementById("taskInput");
     const taskText = taskInput.value.trim();
     if (taskText === "") return;

     tasks.push(taskText);
     updateTaskList();

     // Clear the input field
     taskInput.value = "";
 }

 // Function to update the task list
 function updateTaskList() {
     const taskList = document.getElementById("taskList");
     taskList.innerHTML = "";

     for (let i = 0; i < tasks.length; i++) {
         const taskText = tasks[i];
         const listItem = document.createElement("li");

         const taskTextElement = document.createElement("span");
         taskTextElement.textContent = taskText;
         taskTextElement.classList.add("task-text");

         const editButton = document.createElement("button");
         editButton.textContent = "Edit";
         editButton.classList.add("edit-button");
         editButton.onclick = function() {
             editTask(i);
         };

         const deleteButton = document.createElement("button");
         deleteButton.textContent = "Delete";
         deleteButton.classList.add("delete-button");
         deleteButton.onclick = function() {
             deleteTask(i);
         };

         listItem.appendChild(taskTextElement);
         listItem.appendChild(editButton);
         listItem.appendChild(deleteButton);

         taskList.appendChild(listItem);
     }
 }

 // Function to edit a task
 function editTask(index) {
     const newTaskText = prompt("Edit the task:", tasks[index]);
     if (newTaskText !== null) {
         tasks[index] = newTaskText;
         updateTaskList();
     }
 }

 // Function to delete a task
 function deleteTask(index) {
     if (confirm("Are you sure you want to delete this task?")) {
         tasks.splice(index, 1);
         updateTaskList();
     }
 }

 // Initial rendering of the task list
 updateTaskList();