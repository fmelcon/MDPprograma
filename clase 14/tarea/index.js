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
        taskInput.focus();
        taskInput.value = "";
        
        // Agregar botón de eliminación a la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar X";
        deleteButton.classList.add("deleteButton");
        // DeleteButton.innerHTML = "<button class='deleteButton>Eliminar X</button>"; esto es lo mismo que la otra opcion pero mas corta
        deleteButton.addEventListener("click", deleteTask);
        li.appendChild(deleteButton);
    }
};

// Eliminar tarea de la lista
const deleteTask = e => {
    const listItem = e.target.parentNode;
    taskList.removeChild(listItem);
};

// Eventos de clic para agregar y eliminar tareas
addButton.addEventListener("click", addTask);

