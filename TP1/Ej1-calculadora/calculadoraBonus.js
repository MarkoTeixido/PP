//EJERCICIO 1 (Calculadora Bonus) - TP1 PP (ALA 1)

const readline = require('readline');

// Crear una interfaz para leer datos desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para calcular el resultado basado en el operador y los operandos
function calculate(operator, numbers) {
  if (numbers.length === 0) {
    console.log('Error: No se han ingresado números.');
    rl.close();
    return;
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const num = numbers[i];
    switch (operator) {
      case '+':
        result += num;
        break;
      case '-':
        result -= num;
        break;
      case '*':
        result *= num;
        break;
      case '/':
        if (num === 0) {
          console.log('Error: División por cero no permitida.');
          rl.close();
          return;
        }
        result /= num;
        break;
      default:
        console.log('Operador no válido. Intente con +, -, *, /.');
        rl.close();
        return;
    }
  }

  console.log(`Resultado: ${result}`);
  rl.close();
}

// Función para convertir una cadena de texto en un array de números (sin usar métodos especiales)
function parseNumbers(input) {
  const numbers = [];
  let currentNumber = '';
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === ' ') {
      if (currentNumber) {
        numbers.push(parseFloat(currentNumber));
        currentNumber = '';
      }
    } else {
      currentNumber += char;
    }
  }
  
  // Agregar el último número si existe
  if (currentNumber) {
    numbers.push(parseFloat(currentNumber));
  }
  
  return numbers;
}

// Función para interactuar con el usuario, pedir los datos entrada y realizar la operación
function getInput() {
  rl.question('Ingrese los números separados por espacios: ', (numbersInput) => {
    const numbers = parseNumbers(numbersInput);
    rl.question('Ingrese el operador (+, -, *, /): ', (operator) => {
      if (numbers.some(isNaN)) {
        console.log('Error: Entrada no válida. Asegúrese de ingresar solo números.');
        rl.close();
        return;
      }
      calculate(operator, numbers);
    });
  });
}

// Llamar a la función para iniciar la calculadora
getInput();