// Importaciones necesarias
const readline = require('readline');
const { TaskController } = require('./src/taskController');

// Configuración de la interfaz de entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Creación de instancia de TaskController
const taskController = new TaskController(rl);
taskController.showMenu();



/*
Características de la Programación Orientada a Objetos Utilizadas:

1 - Clases y Objetos:

En este programa, he utilizado clases para modelar conceptos clave como las tareas. La clase `Task` representa una tarea individual, 
con atributos propios, que son propiedades necesarias para definir la estructura de cada tarea.
Cada tarea creada es una instancia de la clase `Task`, lo que me permite tratar las tareas como objetos con propiedades específicas 
y comportamientos definidos.

2 - Encapsulamiento:

En este caso, la clase `Task` encapsula las propiedades de cada tarea y los métodos para modificarlas de manera controlada.   
Un ejemplo de encapsulamiento es el método `update` de la clase `Task`. 
Este método permite actualizar los atributos de una tarea, pero sin exponer directamente las propiedades de la tarea al usuario. 
El acceso y la modificación de los atributos se realizan a través de métodos definidos, 
lo que garantiza que se sigan ciertas reglas al realizar cambios.

3 - Métodos:

En este programa, los métodos dentro de las clases y funciones controladoras, como `addTask`, `editTask`, y `viewTasks`, permiten interactuar con las tareas de manera estructurada y lógica.


*/

/*

Características de la OOP No Implementadas:

1 - Herencia:

En este caso, herencia no fue utilizada. La razón principal es que la lista de tareas no necesita heredad atributos o metodos entre clases.

2 - Polimorfismo:

tampoco fue utilizado, ya que las tareas no requieren un comportamiento diferente según su tipo. 
En este programa, todas las tareas comparten los mismos atributos y métodos.
   

*/
