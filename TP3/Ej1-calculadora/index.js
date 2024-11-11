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
            console.log(`Resultado: ${result}`);
          }

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

En el programa, se definió la clase Calculator, que encapsula toda la funcionalidad de la calculadora. 
Un objeto de esta clase (calculator) se creó para ejecutar las operaciones.

2 - Encapsulamiento:

En este caso, la lógica de cálculo se encapsuló dentro del método 'calculate', y el estado del resultado se almacenó en el atributo 'result'. 
Esto permite que el usuario interactúe con la calculadora sin necesidad de conocer los detalles internos de su funcionamiento.

3 - Métodos:

En el programa, se definieron dos métodos: 
'calculate' para realizar la operación aritmética y 'getInput' para manejar la interacción con el usuario.

*/

/*

Características de la OOP No Implementadas:

1 - Herencia:

En este ejercicio, no se implementó herencia porque la calculadora es una entidad independiente y 
no requería especialización o extensión de una clase base.

2 - Polimorfismo:

En este caso, no se implementó polimorfismo porque la funcionalidad era específica para la clase Calculator y 
no había otros tipos de operaciones o clases que lo requirieran.

*/