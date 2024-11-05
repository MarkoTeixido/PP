// taskInterface.ts
export class Task {
    private static idCounter = 1; // Genera un id único para cada tarea
    public id: number;
    public title: string;
    public description?: string;
    public status: number;
    public createdAt: Date;
    public lastEditedAt: Date;
    public expiration?: Date | null;
    public difficulty: number;

    constructor(
        title: string,
        description: string | undefined,
        status: number,
        expiration: Date | null,
        difficulty: number
    ) {
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
    showStatus(): string {
        const levels: string[] = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
        return levels[this.status - 1];
    }

    // Método para mostrar la dificultad como texto
    showDifficulty(): string {
        const levels: string[] = ['Fácil', 'Medio', 'Difícil'];
        return levels[this.difficulty - 1];
    }
}
