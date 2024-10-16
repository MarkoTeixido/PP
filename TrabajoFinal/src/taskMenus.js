"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMenu = showMenu;
const taskFuctions_1 = require("./taskFuctions");
// Función principal que muestra el menú de opciones para gestionar tareas.
function showMenu(rl, tasks) {
    console.clear();
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');
    // Muestra las opciones del menú.
    rl.question('Elige una opción: ', (option) => {
        switch (option) {
            case '1': // Ver tareas
                viewTasksMenu(rl, tasks);
                break;
            case '2': // Buscar tarea
                (0, taskFuctions_1.searchTasks)(rl, tasks, showMenu);
                break;
            case '3': // Agregar tarea
                (0, taskFuctions_1.addTask)(rl, tasks, showMenu);
                break;
            case '0': // Salir
                rl.close();
                break;
            default: // Opción inválida - Vuelve a mostrar el menú principal si no se elige una opción válida
                console.log('\nOpción no válida\n');
                showMenu(rl, tasks);
                break;
        }
    });
}
// Submenú que permite seleccionar qué tipo de tareas se desean ver.
function viewTasksMenu(rl, tasks) {
    console.clear();
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');
    // Muestra las opciones para filtrar las tareas según el estado seleccionado y luego muestra las tareas correspondientes.
    rl.question('Elige una opción: ', (option) => {
        const status = option === '0' ? null : parseInt(option); // Asigna el estado según la opción seleccionada
        if (status === null) {
            showMenu(rl, tasks);
        }
        else {
            (0, taskFuctions_1.viewTasks)(status, rl, tasks, showMenu); // Filtra y muestra las tareas según el estado seleccionado
        }
    });
}
