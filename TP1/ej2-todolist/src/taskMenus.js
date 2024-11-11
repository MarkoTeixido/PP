// Importa las funciones necesarias de otro archivo
const { viewTasks, editTask, addTask, searchTasks } = require('./taskFuctions');

// Función para mostrar el menú principal de opciones del ToDo List al usuario
function showMenu(rl) {
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');

    // Solicita al usuario que elija una opción a realizar
    rl.question('Elige una opción: ', (option) => {
        switch (option) {
            case '1':
                console.clear();
                showViewTasksMenu(rl);
                break;
            case '2':
                console.clear();
                searchTasks(rl);
                break;
            case '3':
                console.clear();
                addTask(rl);
                break;
            case '0':
                rl.close();
                break;
            default:
                console.clear();
                console.log('\nOpción no válida\n');
                showMenu(rl);
                break;
        }
    });
}

// Función para mostrar el menú de opciones para visualizar las tareas
function showViewTasksMenu(rl) {
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');
    rl.question('Elige una opción: ', (option) => {
        switch (option) {
            case '1':
                console.clear();
                viewTasks(null, rl);
                break;
            case '2':
                console.clear();
                viewTasks(1, rl);
                break;
            case '3':
                console.clear();
                viewTasks(2, rl);
                break;
            case '4':
                console.clear();
                viewTasks(3, rl);
                break;
            case '0':
                console.clear();
                showMenu(rl);
                break;
            default:
                console.log('\nOpción no válida\n');
                showViewTasksMenu(rl);
                break;
        }
    });
}

// Exporta las funciones para que puedan ser usadas en otros archivos
module.exports = {
    showMenu,
    showViewTasksMenu
};