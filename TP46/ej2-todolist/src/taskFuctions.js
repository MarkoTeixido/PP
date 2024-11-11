// Importa las funciones necesarias de otro archivo
const { parseDate, showStatus, showDifficulty } = require('./taskHelpers');

// Función para mostrar las tareas basadas en su estado
function viewTasks(status, rl) {
    if (global.tasks.length === 0) {
        console.log('No hay tareas.');
    } else {
        const filteredTasks = status === null ? global.tasks : global.tasks.filter(task => task.status === status);
        if (filteredTasks.length === 0) {
            console.log('No hay tareas a mostrar.');
        } else {
            filteredTasks.forEach((task, index) => {
                console.log(`[${index + 1}] ${task.title} | Estado: ${showStatus(task.status)} | Vencimiento: ${task.expiration || 'Sin vencimiento'} | Dificultad: ${showDifficulty(task.difficulty)}`);
            });
            
            rl.question('\n¿Deseas editar alguna tarea? Introduce el número o [0] para volver: ', (option) => {
                if (option === '0') {
                    console.clear();
                    require('./taskMenus').showViewTasksMenu(rl);
                } else {
                    const taskIndex = parseInt(option) - 1;
                    const task = filteredTasks[taskIndex];
                    if (task) {
                        editTask(task, rl);
                    } else {
                        console.log('Número de tarea no válido.');
                        require('./taskMenus').showViewTasksMenu(rl);
                    }
                }
            });
        }
    }
}

// Función para editar una tarea existente
function editTask(task, rl) {
    console.log(`Editando la tarea: ${task.title}\n`);
    rl.question('Nuevo título (dejar vacío para mantener el actual): ', (newTitle) => {
        rl.question('Nueva descripción (dejar vacío para mantener la actual): ', (newDescription) => {
            rl.question('Nuevo estado (1: Pendiente, 2: En Curso, 3: Terminada, 4: Cancelada, dejar vacío para mantener el actual): ', (newStatus) => {
                rl.question('Nuevo vencimiento (en formato DD/MM/AAAA, dejar vacío para mantener el actual): ', (newExpiration) => {
                    const validExpiration = parseDate(newExpiration);
                    rl.question('Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil, dejar vacío para mantener el actual): ', (newDifficulty) => {
                        task.title = newTitle || task.title;
                        task.description = newDescription || task.description;
                        task.status = parseInt(newStatus) || task.status;
                        task.expiration = validExpiration || task.expiration;
                        task.difficulty = parseInt(newDifficulty) || task.difficulty;
                        task.lastEditedAt = new Date();
                        
                        console.log('\nTarea actualizada correctamente.\n');
                        require('./taskMenus').showViewTasksMenu(rl);
                    });
                });
            });
        });
    });
}

// Función para agregar una nueva tarea
function addTask(rl) {
    rl.question('Ingrese el título de la tarea: ', (title) => {
        rl.question('Ingrese la descripción de la tarea (opcional): ', (description) => {
            rl.question('Ingrese el vencimiento de la tarea (opcional, formato DD/MM/AAAA): ', (expiration) => {
                const validExpiration = parseDate(expiration);
                rl.question('Ingrese la dificultad (1: Fácil, 2: Medio, 3: Difícil): ', (difficulty) => {
                    const newTask = {
                        id: global.tasks.length + 1,
                        title,
                        description,
                        status: 1,
                        createdAt: new Date(),
                        lastEditedAt: new Date(),
                        expiration: validExpiration,
                        difficulty: parseInt(difficulty) || 1
                    };
                    global.tasks.push(newTask);
                    console.clear();
                    console.log('Tarea agregada.');
                    require('./taskMenus').showMenu(rl);
                });
            });
        });
    });
}

// Función para buscar tareas por título o descripción
function searchTasks(rl) {
    rl.question('Introduce el título de una tarea para buscarla: ', (keyword) => {
        const results = global.tasks.filter(task => task.title.includes(keyword) || (task.description && task.description.includes(keyword)));
        if (results.length > 0) {
            results.forEach((task, index) => {
                console.log(`${index + 1}. ${task.title} [${task.status}] - ${task.description || 'Sin descripción'}`);
            });
        } else {
            console.log('No se encontraron tareas con esa palabra clave.');
        }
        require('./taskMenus').showMenu(rl);
    });
}

// Exporta las funciones para que puedan ser usadas en otros archivos
module.exports = {
    viewTasks,
    editTask,
    addTask,
    searchTasks
};