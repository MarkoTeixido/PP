"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//  Importaciones necesarias para que funcione el programa
const readline = __importStar(require("readline")); // Importa el módulo readline para interactuar con el usuario mediante la consola
const taskMenus_1 = require("./src/taskMenus");
// Crea la interfaz readline para recibir entradas del usuario y mostrar salidas en la consola
const rl = readline.createInterface({
    input: process.stdin, // Entrada estándar del usuario (teclado)
    output: process.stdout, // Salida estándar (consola)
});
// Inicializa un arreglo vacío que almacenará las tareas
const tasks = [];
// Llama a la función que muestra el menú principal de la aplicación
(0, taskMenus_1.showMenu)(rl, tasks);
