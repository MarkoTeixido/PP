"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusText = getStatusText;
exports.getDifficultyText = getDifficultyText;
exports.parseDate = parseDate;
// taskHelpers.ts
function getStatusText(status) {
    const levels = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
    return levels[status - 1];
}
function getDifficultyText(difficulty) {
    const levels = ['Fácil', 'Medio', 'Difícil'];
    return levels[difficulty - 1];
}
function parseDate(dateString) {
    if (!dateString)
        return null;
    const [day, month, year] = dateString.split('/');
    if (!day || !month || !year || isNaN(Number(day)) || isNaN(Number(month)) || isNaN(Number(year))) {
        return null;
    }
    const date = new Date(`${year}-${month}-${day}`);
    if (isNaN(date.getTime()) || day.length !== 2 || month.length !== 2 || year.length !== 4) {
        return null;
    }
    return date;
}
