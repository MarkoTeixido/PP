// Importaciones necesarias
const { Task } = require('./task');
const { showStatus, showDifficulty, parseDate } = require('./taskHelpers');

// Función constructora TaskController
function TaskController(rl) {
    this.rl = rl;
    this.tasks = [];
}

// Menú principal de opciones
TaskController.prototype.showMenu = function () {
    console.clear();
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');

    this.rl.question('Elige una opción: ', (option) => {
        switch (option) {
            case '1':
                this.viewTasksMenu();
                break;
            case '2':
                this.searchTasks();
                break;
            case '3':
                this.addTask();
                break;
            case '0':
                this.rl.close();
                break;
            default:
                console.log('\nOpción no válida\n');
                this.showMenu();
        }
    });
};

// Menú para ver tareas
TaskController.prototype.viewTasksMenu = function () {
    console.clear();
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');

    this.rl.question('Elige una opción: ', (option) => {
        const status = option === '0' ? null : parseInt(option);
        if (status === null) {
            this.showMenu();
        } else {
            this.viewTasks(status);
        }
    });
};

// Mostrar tareas
TaskController.prototype.viewTasks = function (status) {
    console.clear();
    const filteredTasks = (status === 1) ? this.tasks : this.tasks.filter(task => task.status === (status ? status - 1 : 0));

    if (filteredTasks.length === 0) {
        console.log(status === 1 ? 'No hay tareas a mostrar.' : 'No hay tareas con ese estado.');
    } else {
        filteredTasks.forEach((task, index) => {
            console.log(`[${index + 1}] - ${task.title} | Estado: ${showStatus(task.status)} | Dificultad: ${showDifficulty(task.difficulty)} | Vencimiento: ${task.expiration ? task.expiration.toLocaleDateString() : 'Sin vencimiento'}`);
        });
    }

    this.rl.question('\n¿Deseas editar alguna tarea? Introduce el número o [0] para volver: ', (option) => {
        const taskIndex = parseInt(option) - 1;
        const task = filteredTasks[taskIndex];

        if (option === '0' || !task) {
            console.log(option === '0' ? '' : 'Número de tarea no válido.');
            this.showMenu();
        } else {
            this.editTask(task);
        }
    });
};

// Añadir tarea
TaskController.prototype.addTask = function () {
    this.rl.question('Ingrese el título de la tarea: ', (title) => {
        this.rl.question('Ingrese la descripción de la tarea (opcional): ', (description) => {
            this.rl.question('Ingrese el vencimiento de la tarea (opcional, formato DD/MM/AAAA): ', (expiration) => {
                const validExpiration = parseDate(expiration);
                this.rl.question('Ingrese la dificultad (1: Fácil, 2: Medio, 3: Difícil): ', (difficulty) => {
                    const newTask = new Task(title, description, validExpiration, parseInt(difficulty) || 1);
                    this.tasks.push(newTask);
                    console.clear();
                    console.log('Tarea agregada.');
                    this.showMenu();
                });
            });
        });
    });
};

// Editar tarea
TaskController.prototype.editTask = function (task) {
    console.log(`Editando la tarea: ${task.title}\n`);
    this.rl.question('Nuevo título (dejar vacío para mantener el actual): ', (newTitle) => {
        this.rl.question('Nueva descripción (dejar vacío para mantener la actual): ', (newDescription) => {
            this.rl.question('Nuevo estado (1: Pendiente, 2: En Curso, 3: Terminada, 4: Cancelada, dejar vacío para mantener el actual): ', (newStatus) => {
                this.rl.question('Nuevo vencimiento (en formato DD/MM/AAAA, dejar vacío para mantener el actual): ', (newExpiration) => {
                    const validExpiration = parseDate(newExpiration);
                    this.rl.question('Nueva dificultad (1: Fácil, 2: Medio, 3: Difícil, dejar vacío para mantener el actual): ', (newDifficulty) => {
                        task.update(newTitle, newDescription, newStatus, validExpiration, newDifficulty);
                        console.log('\nTarea actualizada correctamente.\n');
                        this.showMenu();
                    });
                });
            });
        });
    });
};

// Buscar tareas
TaskController.prototype.searchTasks = function () {
    this.rl.question('Introduce el título de una tarea para buscarla: ', (keyword) => {
        const trimmedKeyword = keyword.trim();

        if (trimmedKeyword === '') {
            console.log('No ingresaste ninguna palabra clave.');
            return this.showMenu();
        }

        const results = this.tasks.filter(task =>
            task.title.toLowerCase().includes(trimmedKeyword.toLowerCase()) ||
            (task.description && task.description.toLowerCase().includes(trimmedKeyword.toLowerCase()))
        );

        if (results.length > 0) {
            results.forEach((task, index) => {
                console.log(`${index + 1}. ${task.title} - ${showStatus(task.status)}`);
            });
        } else {
            console.log('No se encontraron tareas con esa palabra clave.');
        }

        this.rl.question('¿Deseas volver al menú? (si/no): ', (answer) => {
            if (answer.toLowerCase() === 'si') {
                this.showMenu();
            } else {
                this.rl.close();
            }
        });
    });
};

module.exports = { TaskController };
