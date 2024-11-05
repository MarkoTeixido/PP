"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewTasks = viewTasks;
exports.addTask = addTask;
exports.editTask = editTask;
exports.searchTasks = searchTasks;
const taskHelpers_1 = require("./taskHelpers");
const taskInterface_1 = require("./taskInterface");
function viewTasks(status, rl, tasks, showMenu) {
    console.clear();
    const filteredTasks = status === 1 ? tasks : tasks.filter(task => task.status === (status ? status - 1 : 0));
    if (filteredTasks.length === 0) {
        console.log(status === 1 ? 'No hay tareas a mostrar.' : 'No hay tareas con ese estado.');
    }
    else {
        filteredTasks.forEach((task, index) => {
            console.log(`[${index + 1}] - ${task.title} | Estado: ${task.showStatus()} | Dificultad: ${task.showDifficulty()} | Vencimiento: ${task.expiration ? task.expiration.toLocaleDateString() : 'Sin vencimiento'}`);
        });
    }
    rl.question('\n¿Deseas editar alguna tarea? Introduce el número o [0] para volver: ', (option) => {
        const taskIndex = parseInt(option) - 1;
        const task = filteredTasks[taskIndex];
        if (option === '0' || !task) {
            console.log(option === '0' ? '' : 'Número de tarea no válido.');
            showMenu(rl, tasks);
        }
        else {
            editTask(task, rl, tasks, showMenu);
        }
    });
}
function addTask(rl, tasks, showMenu) {
    rl.question('Ingrese el título de la tarea: ', (title) => {
        rl.question('Ingrese la descripción de la tarea (opcional): ', (description) => {
            rl.question('Ingrese el vencimiento de la tarea (opcional, formato DD/MM/AAAA): ', (expiration) => {
                const validExpiration = (0, taskHelpers_1.parseDate)(expiration);
                rl.question('Ingrese la dificultad (1: Fácil, 2: Medio, 3: Difícil): ', (difficulty) => {
                    const newTask = new taskInterface_1.Task(title, description, 1, validExpiration, parseInt(difficulty) || 1);
                    tasks.push(newTask);
                    console.clear();
                    console.log('Tarea agregada.');
                    showMenu(rl, tasks);
                });
            });
        });
    });
}
function editTask(task, rl, tasks, showMenu) {
    console.log(`Editando la tarea: ${task.title}\n`);
    rl.question('Nuevo título (dejar vacío para mantener el actual): ', (newTitle) => {
        rl.question('Nueva descripción (dejar vacío para mantener la actual): ', (newDescription) => {
            rl.question('Nuevo estado (1: Pendiente, 2: En Curso, 3: Terminada, 4: Cancelada, dejar vacío para mantener el actual): ', (newStatus) => {
                rl.question('Nuevo vencimiento (en formato DD/MM/AAAA, dejar vacío para mantener el actual): ', (newExpiration) => {
                    const validExpiration = (0, taskHelpers_1.parseDate)(newExpiration);
                    rl.question('Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil, dejar vacío para mantener el actual): ', (newDifficulty) => {
                        task.title = newTitle || task.title;
                        task.description = newDescription || task.description;
                        task.status = newStatus ? parseInt(newStatus) : task.status;
                        task.expiration = validExpiration || task.expiration;
                        task.difficulty = newDifficulty ? parseInt(newDifficulty) : task.difficulty;
                        task.updateLastEdited();
                        console.log('\nTarea actualizada correctamente.\n');
                        showMenu(rl, tasks);
                    });
                });
            });
        });
    });
}
function searchTasks(rl, tasks, showMenu) {
    rl.question('Ingrese el término de búsqueda (por título): ', (searchTerm) => {
        console.clear();
        const results = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
        if (results.length === 0) {
            console.log('No se encontraron tareas con ese título.');
        }
        else {
            results.forEach((task, index) => {
                console.log(`[${index + 1}] - ${task.title} | Estado: ${task.showStatus()} | Dificultad: ${task.showDifficulty()} | Vencimiento: ${task.expiration ? task.expiration.toLocaleDateString() : 'Sin vencimiento'}`);
            });
        }
        rl.question('\nPresiona [Enter] para volver al menú principal.', () => {
            showMenu(rl, tasks);
        });
    });
}
