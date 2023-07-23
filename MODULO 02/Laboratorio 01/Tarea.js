/*
*DADO 3 valores ingresados por el usuario saber cual es el mayor de ellos.
*Realizar la tabla de multiplicar dado un valor por el usuario
*Realizar la tabla de dividir dado un valor ingresado por el usuario
*/

const prompt = require('prompt-sync')({signit:true});
//paqueteria para leer el prompt desde consola...


let a = prompt('Ingrese el valor de a: ');
let b= prompt('Ingrese el valor de b: ');

//con IF normal 
if (a > b ) {
    mayor = a;
    } else {
    mayor = b;
    } 
    
//console.log('El numero mayor es:',mayor);
// ternario

mayor = (a > b) ? console.log(`El numero mayor es ${a}`) : console.log(`El numero mayor es ${b}`);


