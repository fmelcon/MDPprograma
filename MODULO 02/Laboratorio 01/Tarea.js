//////////////////////TAREA////////////////////

const prompt = require('prompt-sync')({signit:true});
//paqueteria para leer el prompt desde consola...


//DADO 3 valores ingresados por el usuario saber cual es el mayor de ellos.

let a = prompt('Ingrese el valor de a: ');
let b= prompt('Ingrese el valor de b: ');
let c= prompt('Ingrese el valor de c: ');

let mayor = a

//con IF normal 
if (b > mayor && b > c) {
    mayor = b;
}else if (c > mayor && c > b && c > a) {
    mayor = c;
}

console.log('El numero mayor es:',mayor);

// ternario

/*mayor = (a > b && a > c) ? console.log(`El numero mayor es ${a}`):
        (b > a && b > c) ? console.log(`El numero mayor es ${b}`):
        console.log(`El numero mayor es ${c}`);*/


///////////////////////////////////////////////////////////////////////////////
//Realizar la tabla de multiplicar dado un valor por el usuario

let multiplo = prompt('Ingrese un numero para hacer tabla de multiplicar: ');
console.log(`Tabla de multiplicar del numero: ${multiplo}`);

for (let i = 1; i <= 10; i++) {
    const resultado = multiplo * i;

    console.log(`${multiplo} x ${i} = ${resultado}`);
}


///////////////////////////////////////////////////////////////////////////////

let divisor = prompt('Ingrese un numero para hacer tabla de dividir :');
console.log(`Tabla de multiplicar del numero: ${divisor}`);

for (let i = 1; i <= 10; i++) {
    const resultado = divisor / i;
    const numerosindecimales = resultado.toFixed(2);
    console.log(`${divisor} / ${i} = ${parseFloat(numerosindecimales)}`);
}