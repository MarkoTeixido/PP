class Task{
    public id: number;
    public title: string;
    public description: string;
    public status: number;
    public created: Date;
    public lastEdited: Date;
    public expiration?: Date | null;
    public difficulty: number;

    private static idCounter = 1;

    constructor(title: string, description: string, status: number, expiration: Date | null, difficulty: number) {
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

    showStatus(): string {
        const allStatus : string[] = ['Pendiente', 'En Curso', 'Terminada', 'Cancelada'];
        return allStatus[this.status - 1]; 
    }

    showDifficulty(): string {
        const allDifficulties : string[] = ['Fácil', 'Medio', 'Difícil'];   /* ['⭐', '⭐⭐', '⭐⭐⭐'] */
        return allDifficulties[this.difficulty - 1];
    }
}

export { Task };