// ESTRUCTURA DE CONTROL DE JS
/*CONDICIONALES

if CONDICION SIMPLE SI OCURRE ALGO EJECUTA LO SIGUIENTE

if(condicion) {}
if(condicion && condicion || condicion) {}

*/

/* if / else */

/*if(condicion){

}
else {

}

(condicion) ? 'aqui': 'otro';*/

let nota = 10;
var mensaje ='';
// condicion si la nota es mayor a 10 paso...
if(nota > 10){
    console.log('Aprobado');
    mensaje = 'Aprobado';
}
else{
    mensaje = 'Reprobado';
}

console.log('If & else = el usuario esta:', mensaje);

mensaje = (nota > 10) ? 'aprobado' : 'Reprobado';
console.log('Ternario = el usuario esta:', mensaje);

if(nota > 10){
    console.log('Aprobado...');
}
if(nota<=10){
    console.log('reprobado')
}

/*Condicional Multiple IF - ELSE IF - ELSE 
*Nota < 5 insuficiente , nota <10 suficiente , nota <15 bien, Mayor 15 Excelente
*/

nota = 10
if(nota<5){
    mensaje = 'Insuficiente';
}else if (nota < 10){
    mensaje = 'Suficiente';
}else if (nota < 15){
    mensaje = 'Bien';
}else{
    mensaje = 'Excelente';
}

console.log('su nota es:' ,mensaje);

/*Condicional Switch Caso de uso*/
// switch(variable){
//*case '': bloque....break
//*case '': bloque....break
//**case '': bloque....break
//}

switch(nota){
    case 0: case 1: case 2: case 3: case 4:
    mensaje= 'insuficiente';
    break;

    case 5: case 6: case 7: case 8: case 9:
    mensaje= 'Suficiente';
    break;

    case 10: case 11: case 12: case 13: case 14:
    mensaje= 'Bien';
    break;

    default: mensaje= 'Excelente';break;
    
}

console.log('CASE = su nota es:',mensaje);


let dia='Viernes';

switch(dia){
    case 'Lunes':
        mensaje = 'Buen dia feliz inicio de semana';
    break;
    case 'Martes':
        mensaje = 'Buen dia esa comenzando la semana';
    break;
    case 'Miercoles':
        mensaje = 'Buen dia es media semana';
    break;
    case 'Jueves':
        mensaje = 'Buen dia es casi fin de semana';
    break;
    case 'Viernes':
        mensaje = 'Buen dia es Viernes y tu cuerpo lo sabe';
    break;
    case 'Sabado':
        mensaje = 'Buen dia es Sabado Fiesta fiesta ';
    break;
    default:
        mensaje = 'Buen dia es Domingo y hay que no hacer NADA';
    break;
}
console.log(mensaje);

/*Operador Ternario anidado de condiciones multiples (IF-ELSE IF - ELSE) ?: */

mensaje= (nota < 5) ? 'Insuficiente' :
        (nota < 10) ? 'Suficiente' :
        (nota < 15)? 'Bien' :'Excelente';


// Calcular el numero MAYOR y MENOR de 3 variables if else ? :
// Calcular si un numero es par o impar
// Dado dos variables realizar las operaciones basicas(+,-,*,/)mediante casos de usos
