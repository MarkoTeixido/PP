import * as readline from 'readline';
import { Task } from './task';
import { viewTasks, addTask, searchTasks } from './taskFunctions';

function mainMenu(rl: readline.Interface, tasks: Task[]): void {
    console.clear();
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');

    rl.question('Elige una opción: ', (option : string) => {
        switch (option) {
            case '1':
                viewTasksMenu(rl, tasks);
                break;
            case '2':
                searchTasks(rl, tasks, mainMenu);
                break;
            case '3':
                addTask(rl, tasks, mainMenu);
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

function viewTasksMenu(rl: readline.Interface, tasks: Task[]): void {
    console.clear();
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');

    rl.question('Elige una opción: ', (option: string) => {
        const statusTasks = option === '0' ? null : parseInt(option);
        if (statusTasks === null) {
            mainMenu(rl, tasks);
        } else {
            viewTasks(statusTasks, rl, tasks, viewTasksMenu);
        }
    });
}

export { mainMenu, viewTasksMenu };