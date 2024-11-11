// Función para mostrar el estado de una tarea en forma de texto
function showStatus(status) {
    const levels = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
    return levels[status - 1];
}

// Función para mostrar la dificultad de una tarea en forma de texto
function showDifficulty(difficulty) {
    const levels = ['Fácil', 'Medio', 'Difícil'];
    return levels[difficulty - 1];
}

// Función para convertir una fecha en formato 'dd/mm/yyyy' a un objeto Date
function parseDate(dateString) {
    if (!dateString) return null;
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

// Exporta las funciones
module.exports = { showStatus, showDifficulty, parseDate };
