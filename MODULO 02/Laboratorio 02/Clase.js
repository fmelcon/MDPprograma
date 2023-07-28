const ejemeplo = (a,b,c,d) => {
    let suma = a+b+c+d;
    console.log(suma);
}

ejemeplo(1,3,4,6);

let firstname = 'Franco'

/*----------Objeto----------*/

const persona ={
    firstname, // firstname: firstname
    lastname: 'Melcon',
    age: 33,
    status:true,
    fullName:function(){
        return `${this.firstname} ${this.lastname}`;}
}
persona.address ='MDP';

console.log(persona);
console.log(persona.firstname);
console.log(persona['firstname']);
console.log(persona.fullName());
const {status,age} = persona;

console.log(status,age);//destructure

console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));
console.log(persona?.ejemplo);

/** ARRAY [] **/

const arr = new Array('hola',2,3,4,5,true);

console.log(arr.length); //length mostrar la cantidad de elementos dentro del array, "longitud"
const array = ['Hola','Chau',3,5,6,2];//[] Array Vacio
console.log(array[1]);

/* Operaciones y Funciones dentro de Arrays */

//push agrega uno o varios elementos al final del array o vector
//unshift agrega uno o varios elementos al principio del vector o del array

array.push(4,5,7,'pusheado');
array.unshift('*****');
//pop() //elimina el ultimo elemento del vector o array
//shift() //eliminar el primer elemento del vector

array.pop();
array.shift();
//splice(posicion,cantidad); borra segun posicion y cantidad

array.splice(2,1);
array.splice(1,0,'agregadisimo');
console.log(array);

////////////////* metodo de reccorido forEach*/////////////////

array.forEach((elements,posicion)=>{
console.log(`Elemento: ${elements} => posicion: ${posicion}`);

})

/* Metodo MAP crea un nuevo arreglo map() */
let dataArray = array.map((elements,posicion)=>{
    console.log(`Elemento: ${elements} => posicion: ${posicion}`);
});
/* filters find */

let filterArray = array.filter((elements)=>{
    return elements >= 4;
});
console.log(filterArray);

filterArray = array.find((elements)=>{
    return elements <= 4;
});
