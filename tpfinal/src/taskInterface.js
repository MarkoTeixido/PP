"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// taskInterface.ts
class Task {
    constructor(title, description, status, expiration, difficulty) {
        this.id = Task.idCounter++;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = new Date();
        this.lastEditedAt = new Date();
        this.expiration = expiration;
        this.difficulty = difficulty;
    }
    // Método para actualizar la fecha de última edición
    updateLastEdited() {
        this.lastEditedAt = new Date();
    }
    // Método para mostrar el estado como texto
    showStatus() {
        const levels = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
        return levels[this.status - 1];
    }
    // Método para mostrar la dificultad como texto
    showDifficulty() {
        const levels = ['Fácil', 'Medio', 'Difícil'];
        return levels[this.difficulty - 1];
    }
}
exports.Task = Task;
Task.idCounter = 1; // Genera un id único para cada tarea
