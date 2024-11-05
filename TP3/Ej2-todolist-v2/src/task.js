function Task(title, description = '', dueDate = null, difficulty = 1) {
    this.title = title;
    this.description = description;
    this.state = 1; // 1: Pendiente
    this.creationDate = new Date().toLocaleString();
    this.dueDate = dueDate;
    this.difficulty = difficulty;
}

// Método para editar una tarea
Task.prototype.editTask = function({ title, description, state, dueDate, difficulty }) {
    if (title) this.title = title;
    if (description) this.description = description;
    if (state) this.state = state;
    if (dueDate) this.dueDate = dueDate;
    if (difficulty) this.difficulty = difficulty;
};

// Método para obtener una representación de la dificultad en estrellas
Task.prototype.getDifficultyStars = function() {
    return '⭐'.repeat(this.difficulty);
};

// Método para obtener el estado en texto
Task.prototype.getStateText = function() {
    const states = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
    return states[this.state - 1];
};

module.exports = { Task };
