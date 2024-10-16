import * as readline from 'readline';
import { viewTasks, addTask, searchTasks } from './taskFuctions';

export function showMenu(rl: readline.Interface, tasks: any[]): void {
    console.clear();
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');

    rl.question('Elige una opción: ', (option: string) => {
        switch (option) {
            case '1':
                viewTasksMenu(rl, tasks);
                break;
            case '2':
                searchTasks(rl, tasks);
                break;
            case '3':
                addTask(rl, tasks);
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

function viewTasksMenu(rl: readline.Interface, tasks: any[]): void {
    console.clear();
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');

    rl.question('Elige una opción: ', (option: string) => {
        const status = option === '0' ? null : parseInt(option);
        if (status === null) {
            showMenu(rl, tasks);
        } else {
            viewTasks(status, rl, tasks);
        }
    });
}
