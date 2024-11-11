// Función constructora Task
function Task(title, description, expiration, difficulty) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.status = 1;
    this.createdAt = new Date();
    this.lastEditedAt = new Date();
    this.expiration = expiration;
    this.difficulty = difficulty;
}

// Método actualizar para el prototipo de Task
Task.prototype.update = function (newTitle, newDescription, newStatus, newExpiration, newDifficulty) {
    this.title = newTitle || this.title;
    this.description = newDescription || this.description;
    this.status = newStatus ? parseInt(newStatus) : this.status;
    this.expiration = newExpiration || this.expiration;
    this.difficulty = newDifficulty ? parseInt(newDifficulty) : this.difficulty;
    this.lastEditedAt = new Date();
};

// Exporta Task
module.exports = { Task };
