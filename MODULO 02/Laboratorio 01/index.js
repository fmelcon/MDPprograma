//instalar un paquete  para ver el prompt desde la consola, usando NPM para
//npm install -g prompt-sync (global) ese paquete lo podes usar en cualquier parte del PC

// npm install prompt-sync (comando para instalar el paquete)
/* Cuadro dialogo input Prompt */

const prompt = require('prompt-sync')({signit:true});
//paqueteria para leer el prompt desde consola...


let numeroUno = prompt('Ingrese el valor de uno: ');
let numeroDos= prompt('Ingrese el valor de dos: ');

/condicinal if--else saber el mayor de 2 numeros ingresados por el usuario/


numeroUno = parseint(numeroUno);
// parseInt => de string => numerico
// Number() => true, false =>
// String()

/*
if( (typeof numeroUno == 'string') || (typeofnumeroDos == 'string')){
    console.log('el dato es invalido')
}else
*/

if(!(Number(numeroUno) || Number(numeroDos))){
    console.log('el dato es invalido , ingrese numeros');
}else if (numeroUno < numeroDos) {
    console.log('el Mayor es el numero dos', numeroDos);

}else if(numeroUno == numeroDos){
    console.log('los numeros son iguales');

}else{
    console.log('Mayor es el numero uno: ', numeroUno);
}

let date = new Date()
console.log(date.getMonth()+1);
let month = date.getMonth();


switch (month) {
    case 0: mes='Enero';break;
    case 1: mes='Febrero';break;
    case 2: mes='Marzo';break;
    case 3: mes='Abril';break;
    case 4: mes='Mayo';break;
    case 5: mes='Junio';break;
    case 6: mes='Julio';break;
    case 7: mes='Agosto';break;
    case 8: mes='Septiembre';break;
    case 9: mes='Octubre';break;
    case 10: mes='November rain';break;
    default: mes='diciembre';break;

}

/* while mientras la condicion se cumple se repite hasta que salga de la condicion*/
// tiene una variable de inicializacion
//while (condition){}
//accion (incremento, decremento)

//repetir los numeros de 1 hasta el 10

let contador = 1;

while (contador <= 10) {
    console.log(' el numero es: ',contador);
    contador++
}

//FOR (inicializacion, condicion; accion)

for (let i = 1; i < 10; i++) {
    console.log('el numero de i: ', i );

}

//repetir los numeros hasta el usuario indique

let xy = prompt('Ingrese un valor: ');

for (let i = 0; i <= xy; i++) {
    console.log('el numero de i: ', i );
}


/*
*DADO 3 valores ingresados por el usuario saber cual es el mayor de ellos.
*Realizar la tabla de multiplicar dado un valor por el usuario
*Realizar la tabla de dividir dado un valor ingresado por el usuario
*/