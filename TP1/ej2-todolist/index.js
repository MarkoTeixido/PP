// Importa la función y modulo que se necesitan
const readline = require('readline');
const { showMenu } = require('./src/taskMenus');

// Crea una interfaz de readline para interactuar con el usuario a través de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Inicializa un array global para almacenar las tareas
global.tasks = [];

// Inicializar la aplicación
showMenu(rl);
