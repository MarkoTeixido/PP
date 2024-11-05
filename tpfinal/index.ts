// index.ts
import * as readline from 'readline';
import { showMenu } from './src/taskMenus';
import { Task } from './src/taskInterface';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tasks: Task[] = [];
showMenu(rl, tasks);
