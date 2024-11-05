// Importaciones necesarias
const readline = require('readline');
const { TaskController } = require('./src/taskController');

// Crea la interfaz readline para recibir entradas del usuario y mostrar salidas en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Inicializa el TaskController
const taskController = new TaskController(rl);
taskController.showMenu();
