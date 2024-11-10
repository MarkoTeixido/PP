"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenu = mainMenu;
exports.viewTasksMenu = viewTasksMenu;
const taskFunctions_1 = require("./taskFunctions");
function mainMenu(rl, tasks) {
    console.clear();
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');
    rl.question('Elige una opción: ', (option) => {
        switch (option) {
            case '1':
                viewTasksMenu(rl, tasks);
                break;
            case '2':
                (0, taskFunctions_1.searchTasks)(rl, tasks, mainMenu);
                break;
            case '3':
                (0, taskFunctions_1.addTask)(rl, tasks, mainMenu);
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('\nOpción no válida\n');
                mainMenu(rl, tasks);
                break;
        }
    });
}
function viewTasksMenu(rl, tasks) {
    console.clear();
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');
    rl.question('Elige una opción: ', (option) => {
        const statusTasks = option === '0' ? null : parseInt(option);
        if (statusTasks === null) {
            mainMenu(rl, tasks);
        }
        else {
            (0, taskFunctions_1.viewTasks)(statusTasks, rl, tasks, viewTasksMenu);
        }
    });
}
