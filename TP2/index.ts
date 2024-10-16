import * as readline from 'readline';
import { showMenu } from './src/taskMenus';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tasks: any[] = [];  // Usamos un arreglo de objetos sin interfaz

showMenu(rl, tasks);
