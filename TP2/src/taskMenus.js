"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMenu = showMenu;
const taskFuctions_1 = require("./taskFuctions");
function showMenu(rl, tasks) {
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
                (0, taskFuctions_1.searchTasks)(rl, tasks);
                break;
            case '3':
                (0, taskFuctions_1.addTask)(rl, tasks);
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('\nOpción no válida\n');
                showMenu(rl, tasks);
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
        const status = option === '0' ? null : parseInt(option);
        if (status === null) {
            showMenu(rl, tasks);
        }
        else {
            (0, taskFuctions_1.viewTasks)(status, rl, tasks);
        }
    });
}
