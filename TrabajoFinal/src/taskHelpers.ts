// Función para mostrar el estado de una tarea basado en un índice
export function showStatus(status: number): string {
    const levels: string[] = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
    return levels[status - 1];
}

// Función para mostrar la dificultad de una tarea basado en un índice
export function showDifficulty(difficulty: number): string {
    const levels: string[] = ['Fácil', 'Medio', 'Difícil'];
    return levels[difficulty - 1];
}

// Función para validar si la fecha es correcta usando el objeto Date
export function parseDate(dateString: string): Date | null {
    if (!dateString) return null; // Si no se ingresó nada, se retorna null
    const [day, month, year] = dateString.split('/');
    if (!day || !month || !year || isNaN(Number(day)) || isNaN(Number(month)) || isNaN(Number(year))) {
        return null; // Si faltan partes de la fecha o no son números, retorna null
    }

    const date = new Date(`${year}-${month}-${day}`);
    // Verificamos que la fecha sea válida y que coincida con el formato
    if (isNaN(date.getTime()) || day.length !== 2 || month.length !== 2 || year.length !== 4) {
        return null;
    }
    return date;
}
