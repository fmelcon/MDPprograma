const prompt = require('prompt-sync')({signit:true});


// Mostrar mensaje de opciones una vez al inicio del programa
const opciones = console.log(
"┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n" +
"┃Ingrese la acción que desea realizar: ┃\n" +
"┃--------------------------------------┃\n" +
"┃1. Mostrar tabla de multiplicar       ┃\n" +
"┃2. Sumar                              ┃\n" +
"┃3. Restar                             ┃\n" +
"┃4. Dividir                            ┃\n" +
"┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n");
  
  
const accion = prompt(opciones);
const opcion = parseInt(accion);

function realizarAccion() {
  // Solicitar al usuario que ingrese una acción

  // Convertir la acción ingresada a un número entero

  // Realizar la acción seleccionada
  switch (opcion) {
    case 1:
      mostrarTablaMultiplicar();
      break;
    case 2:
      realizarOperacion(suma);
      break;
    case 3:
      realizarOperacion(restar);
      break;
    case 4:
      realizarOperacion(dividir);
      break;
    default:
      console.log("La acción ingresada no es válida.");
  }
}

// Función para mostrar la tabla de multiplicar
function mostrarTablaMultiplicar() {
  const numero = parseInt(prompt("Ingrese el número para la tabla de multiplicar:"));
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Función para realizar operaciones matemáticas (sumar, restar, dividir)
function realizarOperacion(operacionFunc) {
  const valor1 = parseInt(prompt("Ingrese el primer número:"));
  const valor2 = parseInt(prompt("Ingrese el segundo número:"));
  const resultado = operacionFunc(valor1, valor2);
  console.log(`El resultado es: ${resultado}`);
}

// Función para sumar
function suma(a, b) {
  return a + b;
}

// Función para restar
function restar(a, b) {
  return a - b;
}

// Función para dividir
function dividir(dividendo, divisor) {
  if (divisor === 0) {
    return "No se puede dividir entre cero.";
  }
  return dividendo / divisor;
}

// Llamar a la función para comenzar el programa
realizarAccion();