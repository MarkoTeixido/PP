import * as readline from 'readline';
import { Task } from './src/task';
import { mainMenu } from './src/taskMenus';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tasks: Task[] = [];
mainMenu(rl, tasks);