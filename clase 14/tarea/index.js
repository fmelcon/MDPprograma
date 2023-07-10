// Obtener elementos del DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Agregar tarea a la lista
const addTask = () => {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";

        // Agregar botón de eliminación a la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", deleteTask);
        li.appendChild(deleteButton);
    }
};

// Eliminar tarea de la lista
const deleteTask = event => {
    const listItem = event.target.parentNode;
    taskList.removeChild(listItem);
};

// Eventos de clic para agregar y eliminar tareas
addButton.addEventListener("click", addTask);

taskList.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});