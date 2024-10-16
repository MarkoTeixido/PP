//  Importaciones necesarias para que funcione el programa
import * as readline from 'readline'; // Importa el módulo readline para interactuar con el usuario mediante la consola
import { showMenu } from './src/taskMenus';

// Crea la interfaz readline para recibir entradas del usuario y mostrar salidas en la consola
const rl = readline.createInterface({
    input: process.stdin, // Entrada estándar del usuario (teclado)
    output: process.stdout, // Salida estándar (consola)
});

// Arreglo para almacenar las tareas
const tasks: any[] = [];

// Llama a la función que muestra el menú principal de la aplicación
showMenu(rl, tasks);
