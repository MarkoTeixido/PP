//EJERCICIO 1 (Calculadora) - TP3 PP (ALA 3)

const readline = require('readline');

// Crear una interfaz para leer datos desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definición de la clase Calculator
class Calculator {
  constructor() {
    this.result = 0;
  }

  // Método para realizar la operación
  calculate(a, operator, b) {
    switch (operator) {
      case '+':
        this.result = a + b;
        break;
      case '-':
        this.result = a - b;
        break;
      case '*':
        this.result = a * b;
        break;
      case '/':
        if (b === 0) {
          console.log('Error: División por cero no permitida.');
          return null;
        }
        this.result = a / b;
        break;
      default:
        console.log('Operador no válido. Intente con +, -, *, /.');
        return null;
    }
    return this.result;
  }

  // Método para interactuar con el usuario y obtener entradas
  getInput() {
    rl.question('Ingrese el primer número: ', (num1) => {
      rl.question('Ingrese el operador (+, -, *, /): ', (operator) => {
        rl.question('Ingrese el segundo número: ', (num2) => {
          // Convertir las entradas a números con parseFloat()
          const a = parseFloat(num1);
          const b = parseFloat(num2);

          const result = this.calculate(a, operator, b);
          if (result !== null) {
            // Mostrar el resultado final
            console.log(`Resultado: ${result}`);
          }

          // Cerrar la interfaz de readline
          rl.close();
        });
      });
    });
  }
}

// Crear una instancia de la calculadora y llamar al método para obtener entradas
const calculator = new Calculator();
calculator.getInput();


/* Características de la Programación Orientada a Objetos Utilizadas:

1 - Clases y Objetos:

En OOP, las clases son plantillas para crear objetos. En el programa, 
se definió la clase Calculator, que encapsula toda la funcionalidad de la calculadora. 
Un objeto de esta clase (calculator) se creó para ejecutar las operaciones.

2 - Encapsulamiento:

El encapsulamiento es la práctica de ocultar los detalles internos de la implementación y 
exponer solo lo necesario. En este caso, la lógica de cálculo se encapsuló dentro del método calculate, 
y el estado del resultado se almacenó en el atributo result. 
Esto permite que el usuario interactúe con la calculadora sin necesidad de conocer los detalles internos de su funcionamiento.

3 - Métodos:

Los métodos son funciones que pertenecen a una clase. En el programa, se definieron dos métodos: 
calculate para realizar la operación aritmética y getInput para manejar la interacción con el usuario. 
Esta organización facilita la lectura y el mantenimiento del código, además de promover la reutilización.

Características de la OOP No Implementadas:

1 - Herencia:

La herencia permite que una clase (subclase) herede propiedades y métodos de otra clase (superclase). 
En este ejercicio, no se implementó herencia porque la calculadora es una entidad autónoma y 
no requería especialización o extensión de una clase base. Dado que el problema es sencillo y 
no involucra múltiples tipos de calculadoras o funcionalidades adicionales, la herencia no era necesaria.

2 - Polimorfismo:

El polimorfismo permite que métodos de diferentes clases tengan el mismo nombre pero se comporten de manera diferente. 
En este caso, no se implementó polimorfismo porque la funcionalidad era específica para la clase Calculator y 
no había otros tipos de operaciones o clases que lo requirieran.

-------

En resumen, el programa de la calculadora utilizó las características fundamentales de la OOP, 
como clases, encapsulamiento y métodos, para estructurar la lógica de manera modular y clara. 
La herencia y el polimorfismo no se consideraron necesarios en este contexto, 
ya que el problema era simple y no requería la complejidad que estas características traen. 
Este enfoque permite un código más mantenible y escalable en el futuro si se desea ampliar la funcionalidad de la calculadora.


*/