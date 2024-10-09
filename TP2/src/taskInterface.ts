export interface Task {
    id: number;
    title: string;
    description?: string;
    status: number;
    createdAt: Date;
    lastEditedAt: Date;
    expiration?: Date | null;
    difficulty: number;
}
