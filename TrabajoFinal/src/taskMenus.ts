//  Importaciones necesarias para que funcione el programa
import * as readline from 'readline';
import { viewTasks, addTask, searchTasks } from './taskFuctions';
import { Task } from './taskInterface';

// Función principal que muestra el menú de opciones para gestionar tareas.
export function showMenu(rl: readline.Interface, tasks: Task[]): void {
    console.clear();
    console.log('\n¿Qué deseas hacer?\n');
    console.log('[1] Ver Mis tareas');
    console.log('[2] Buscar una tarea');
    console.log('[3] Agregar una tarea');
    console.log('[0] Salir');

    // Muestra las opciones del menú.
    rl.question('Elige una opción: ', (option: string) => {
        switch (option) {
            case '1': // Ver tareas
                viewTasksMenu(rl, tasks);
                break;
            case '2': // Buscar tarea
                searchTasks(rl, tasks, showMenu);
                break;
            case '3': // Agregar tarea
                addTask(rl, tasks, showMenu);
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
function viewTasksMenu(rl: readline.Interface, tasks: Task[]): void {
    console.clear();
    console.log('\n¿Qué tareas deseas ver?\n');
    console.log('[1] Ver todas las tareas');
    console.log('[2] Ver tareas pendientes');
    console.log('[3] Ver tareas en curso');
    console.log('[4] Ver tareas terminadas');
    console.log('[0] Volver al menú principal');

    // Muestra las opciones para filtrar las tareas según el estado seleccionado y luego muestra las tareas correspondientes.
    rl.question('Elige una opción: ', (option: string) => {
        const status = option === '0' ? null : parseInt(option); // Asigna el estado según la opción seleccionada
        if (status === null) {
            showMenu(rl, tasks);
        } else {
            viewTasks(status, rl, tasks, showMenu); // Filtra y muestra las tareas según el estado seleccionado
        }
    });
}
