const { Task } = require('./task');

function TaskController() {
    this.tasks = [];
}

// Método para agregar una tarea
TaskController.prototype.addTask = function(title, description, dueDate, difficulty) {
    const task = new Task(title, description, dueDate, difficulty);
    this.tasks.push(task);
};

// Método para buscar una tarea por título
TaskController.prototype.findTask = function(title) {
    return this.tasks.find(task => task.title.toLowerCase() === title.toLowerCase());
};

// Método para editar una tarea
TaskController.prototype.editTask = function(title, newDetails) {
    const task = this.findTask(title);
    if (task) {
        task.editTask(newDetails);
    }
    return task;
};

// Métodos para filtrar tareas por estado
TaskController.prototype.getTasksByState = function(state) {
    return this.tasks.filter(task => task.state === state);
};

module.exports = { TaskController };
