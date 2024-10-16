"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewTasks = viewTasks;
exports.addTask = addTask;
exports.editTask = editTask;
exports.searchTasks = searchTasks;
const taskHelpers_1 = require("./taskHelpers");
// Función para visualizar tareas. Filtra y muestra tareas según el estado seleccionado.
function viewTasks(status, rl, tasks, showMenu) {
    console.clear();
    // Filtra las tareas en función del estado proporcionado
    const filteredTasks = (status === 1) ? tasks : tasks.filter(task => task.status === (status ? status - 1 : 0));
    // Muestra un mensaje si no hay tareas con el estado filtrado
    if (filteredTasks.length === 0) {
        console.log(status === 1 ? 'No hay tareas a mostrar.' : 'No hay tareas con ese estado.');
    }
    else {
        // Muestra las tareas filtradas
        filteredTasks.forEach((task, index) => {
            console.log(`[${index + 1}] - ${task.title} | Estado: ${(0, taskHelpers_1.showStatus)(task.status)} | Dificultad: ${(0, taskHelpers_1.showDifficulty)(task.difficulty)} | Vencimiento: ${task.expiration ? task.expiration.toLocaleDateString() : 'Sin vencimiento'}`);
        });
    }
    // Pregunta si el usuario desea editar alguna tarea
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
// Función para agregar una nueva tarea
function addTask(rl, tasks, showMenu) {
    // Pregunta por los detalles de la nueva tarea (título, descripción, vencimiento, dificultad)
    rl.question('Ingrese el título de la tarea: ', (title) => {
        rl.question('Ingrese la descripción de la tarea (opcional): ', (description) => {
            rl.question('Ingrese el vencimiento de la tarea (opcional, formato DD/MM/AAAA): ', (expiration) => {
                const validExpiration = (0, taskHelpers_1.parseDate)(expiration);
                rl.question('Ingrese la dificultad (1: Fácil, 2: Medio, 3: Difícil): ', (difficulty) => {
                    // Crea la nueva tarea con los datos ingresados y la agrega al array de tareas
                    const newTask = {
                        id: tasks.length + 1,
                        title,
                        description,
                        status: 1,
                        createdAt: new Date(),
                        lastEditedAt: new Date(),
                        expiration: validExpiration,
                        difficulty: parseInt(difficulty) || 1,
                    };
                    tasks.push(newTask); // Agrega la nueva tarea
                    console.clear();
                    console.log('Tarea agregada.');
                    showMenu(rl, tasks); // Regresa al menú principal
                });
            });
        });
    });
}
// Función para editar una tarea
function editTask(task, rl, tasks, showMenu) {
    console.log(`Editando la tarea: ${task.title}\n`);
    // Permite editar los campos de la tarea
    rl.question('Nuevo título (dejar vacío para mantener el actual): ', (newTitle) => {
        rl.question('Nueva descripción (dejar vacío para mantener la actual): ', (newDescription) => {
            rl.question('Nuevo estado (1: Pendiente, 2: En Curso, 3: Terminada, 4: Cancelada, dejar vacío para mantener el actual): ', (newStatus) => {
                rl.question('Nuevo vencimiento (en formato DD/MM/AAAA, dejar vacío para mantener el actual): ', (newExpiration) => {
                    const validExpiration = (0, taskHelpers_1.parseDate)(newExpiration);
                    rl.question('Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil, dejar vacío para mantener el actual): ', (newDifficulty) => {
                        // Actualiza los campos de la tarea si se proporcionaron nuevos valores
                        task.title = newTitle || task.title;
                        task.description = newDescription || task.description;
                        task.status = newStatus ? parseInt(newStatus) : task.status;
                        task.expiration = validExpiration || task.expiration;
                        task.difficulty = newDifficulty ? parseInt(newDifficulty) : task.difficulty;
                        task.lastEditedAt = new Date();
                        console.log('\nTarea actualizada correctamente.\n');
                        showMenu(rl, tasks); // Regresa al menú principal
                    });
                });
            });
        });
    });
}
// Función para buscar tareas por palabra clave en el título o descripción
function searchTasks(rl, tasks, showMenu) {
    rl.question('Introduce el título de una tarea para buscarla: ', (keyword) => {
        const trimmedKeyword = keyword.trim();
        // Si no se ingresó ninguna palabra clave, regresa al menú principal
        if (trimmedKeyword === '') {
            console.log('No ingresaste ninguna palabra clave.');
            return showMenu(rl, tasks);
        }
        // Filtra las tareas cuyo título o descripción coincida con la palabra clave ingresada
        const results = tasks.filter(task => task.title.toLowerCase().includes(trimmedKeyword.toLowerCase()) ||
            (task.description && task.description.toLowerCase().includes(trimmedKeyword.toLowerCase())));
        // Muestra las tareas que coinciden con la búsqueda o indica si no se encontró ninguna
        if (results.length > 0) {
            results.forEach((task, index) => {
                console.log(`${index + 1}. ${task.title} [${task.status}] - ${task.description || 'Sin descripción'}`);
            });
        }
        else {
            console.log('No se encontraron tareas con esa palabra clave.');
        }
        // Pregunta si desea volver al menú principal
        rl.question('¿Deseas volver al menú? (si/no): ', (answer) => {
            if (answer.toLowerCase() === 'si') {
                showMenu(rl, tasks);
            }
            else {
                rl.close();
            }
        });
    });
}
