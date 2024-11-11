//EJERCICIO 1 (Calculadora) - TP1 PP (ALA 1)

const readline = require('readline');

// Crear una interfaz para leer datos desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para interactuar con el usuario, pedir los datos entrada y realizar la operación
function calculate() {
  rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el operador (+, -, *, /): ', (operator) => {
      rl.question('Ingrese el segundo número: ', (num2) => {

        // Convertir las entradas a números con parseFloat()
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;

        // Realizar la operación basada en el operador ingresado
        switch (operator) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            // Comprobar si el divisor es cero
            if (b === 0) {
              console.log('Error: División por cero no permitida.');
              rl.close();
              return;
            }
            result = a / b;
            break;
          default:
            console.log('Operador no válido. Intente con +, -, *, /.');
            rl.close();
            return;
        }

        // Mostrar el resultado final
        console.log(`Resultado: ${result}`);

        // Cerrar la interfaz de readline
        rl.close();
      });
    });
  });
}

// Llamar a la función para iniciar la calculadora
calculate();