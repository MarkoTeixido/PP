"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(title, description, status, expiration, difficulty) {
        this.id = Task.idCounter++;
        this.title = title;
        this.description = description;
        this.status = status;
        this.created = new Date();
        this.lastEdited = new Date();
        this.expiration = expiration;
        this.difficulty = difficulty;
    }
    updateLastEdited() {
        this.lastEdited = new Date();
    }
    showStatus() {
        const allStatus = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
        return allStatus[this.status - 1];
    }
    showDifficulty() {
        const allDifficulties = ['⭐', '⭐⭐', '⭐⭐⭐'];
        return allDifficulties[this.difficulty - 1];
    }
}
exports.Task = Task;
Task.idCounter = 1; //auxiliar para crear un id para las tareas
