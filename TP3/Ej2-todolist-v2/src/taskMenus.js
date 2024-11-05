const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMainMenu(taskController) {
    console.log(`\n¿Qué deseas hacer?`);
    console.log(`[1] Ver Mis tareas`);
    console.log(`[2] Buscar una tarea`);
    console.log(`[3] Agregar una tarea`);
    console.log(`[0] Salir`);
    rl.question(`Elige una opción: `, (option) => {
        switch (option) {
            case '1':
                showTaskViewMenu(taskController);
                break;
            case '2':
                searchTask(taskController);
                break;
            case '3':
                addNewTask(taskController);
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                showMainMenu(taskController);
        }
    });
}

function showTaskViewMenu(taskController) {
    console.log(`\n¿Qué tareas deseas ver?`);
    console.log(`[1] Ver todas las tareas`);
    console.log(`[2] Ver tareas pendientes`);
    console.log(`[3] Ver tareas en curso`);
    console.log(`[4] Ver tareas terminadas`);
    console.log(`[0] Volver al menú principal`);
    rl.question(`Elige una opción: `, (option) => {
        let tasks;
        switch (option) {
            case '1':
                tasks = taskController.tasks;
                break;
            case '2':
                tasks = taskController.getTasksByState(1);
                break;
            case '3':
                tasks = taskController.getTasksByState(2);
                break;
            case '4':
                tasks = taskController.getTasksByState(3);
                break;
            case '0':
                showMainMenu(taskController);
                return;
            default:
                console.log("Opción no válida.");
                showTaskViewMenu(taskController);
                return;
        }
        displayTasks(tasks);
        editTaskPrompt(taskController);
    });
}

function displayTasks(tasks) {
    tasks.forEach((task, index) => {
        console.log(`[${index + 1}] - ${task.title} | Estado: ${task.getStateText()} | Dificultad: ${task.getDifficultyStars()} | Vencimiento: ${task.dueDate || 'Sin vencimiento'}`);
    });
}

function editTaskPrompt(taskController) {
    rl.question(`¿Deseas editar alguna tarea? Introduce el número o [0] para volver: `, (index) => {
        if (index === '0') {
            showTaskViewMenu(taskController);
            return;
        }
        const taskIndex = parseInt(index) - 1;
        const task = taskController.tasks[taskIndex];
        if (task) {
            editTask(taskController, task);
        } else {
            console.log("Tarea no encontrada.");
            editTaskPrompt(taskController);
        }
    });
}

function editTask(taskController, task) {
    console.log(`Editando la tarea: ${task.title}`);
    rl.question("Nuevo título (dejar vacío para mantener el actual): ", (title) => {
        rl.question("Nueva descripción (dejar vacío para mantener el actual): ", (description) => {
            rl.question("Nuevo estado (1: Pendiente, 2: En Curso, 3: Terminada, 4: Cancelada, dejar vacío para mantener el actual): ", (state) => {
                rl.question("Nuevo vencimiento (en formato DD/MM/AAAA, dejar vacío para mantener el actual): ", (dueDate) => {
                    rl.question("Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil, dejar vacío para mantener el actual): ", (difficulty) => {
                        taskController.editTask(task.title, {
                            title,
                            description,
                            state: state ? parseInt(state) : undefined,
                            dueDate,
                            difficulty: difficulty ? parseInt(difficulty) : undefined
                        });
                        console.log("Tarea actualizada.");
                        showTaskViewMenu(taskController);
                    });
                });
            });
        });
    });
}

function addNewTask(taskController) {
    rl.question("Título de la nueva tarea: ", (title) => {
        rl.question("Descripción de la tarea: ", (description) => {
            rl.question("Fecha de vencimiento (opcional, formato DD/MM/AAAA): ", (dueDate) => {
                rl.question("Dificultad (1: Fácil, 2: Medio, 3: Difícil): ", (difficulty) => {
                    taskController.addTask(title, description, dueDate, parseInt(difficulty) || 1);
                    console.log("Tarea añadida.");
                    showMainMenu(taskController);
                });
            });
        });
    });
}

module.exports = { showMainMenu };
