// Calcular el numero MAYOR y MENOR de 3 variables if else ? :

function calcularMayorMenor(a, b, c) {
    var mayor, menor;
    
    // Verificar el número mayor
    if (a > b && a > c) {
    mayor = a;
    } else if (b > a && b > c) {
    mayor = b;
    } else {
    mayor = c;
    }
    
    // Verificar el número menor
    if (a < b && a < c) {
    menor = a;
    } else if (b < a && b < c) {
    menor = b;
    } else {
    menor = c;
    }
    
    return "Mayor: " + mayor + ", Menor: " + menor;
}

  // Ejemplo de uso
var num1 = 5, num2 = 10, num3 = 3;
console.log(calcularMayorMenor(num1, num2, num3));


////////////////////////////////////////////////////////////////////////////////////////////

// Calcular si un numero es par o impar

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
    return "El número es par";
    } else {
    return "El número es impar";
    }
}

  // Ejemplo de uso
var num = 7;
console.log(verificarParImpar(num));

// Dado dos variables realizar las operaciones basicas(+,-,*,/)mediante casos de usos

function operacionesBasicas(num1, num2, operacion) {
    var resultado;
    
    switch (operacion) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        return "Operación no válida";
    }
    
    return "Resultado: " + resultado;
}

// Ejemplo de uso
var numero1 = 10, numero2 = 5;
console.log(operacionesBasicas(numero1, numero2, '+')); 
console.log(operacionesBasicas(numero1, numero2, '-')); 
console.log(operacionesBasicas(numero1, numero2, '*')); 
console.log(operacionesBasicas(numero1, numero2, '/')); 
console.log(operacionesBasicas(numero1, numero2, '%'));