//crear una serie de funciones que cree un array de objetos

const prompt = require('prompt-sync')({signit:true});

let dataPersona = []

const crearArrayPersonas = (firstName,lastName,age,status,adress,orientacion) => {

    let persona = {
        firstName,
        lastName,
        age,
        status,
        adress
    };

    if(orientacion){
        dataPersona.push(persona);
    }else{
        dataPersona.unshift(persona);
    }
}

crearArrayPersonas('Franco','Melcon',33,1,true,'Berutti 5750');
crearArrayPersonas('Mikasa','Jaeger',24,0,true,'dentro de la muralla');
crearArrayPersonas('jose','eduard',15,1,true,'dentro de la muralla');
crearArrayPersonas('salchi','papa',15,0,true,'dentro de la muralla');
crearArrayPersonas('eren','Jaeger',15,1,true,'dentro de la muralla');

/*for (let i = 0; i < 3; i++){

    let firstName = prompt('Ingrese el Nombre:');
    let lastName = prompt('Ingrese el Apellido:');
    let age = prompt('Ingrese la Edad:');
    let status = parseInt(prompt('Ingrese el status:'));
    let adress = prompt('Ingrese la direccion:');
    crearArrayPersonas(firstName,lastName,age,status,adress, true);
    console.log('***************************************')
}
*/

/** Funciones de array devuelve un nuevo array**/

// filter realizamos un filtrado
// arr.filter();

//let dataPersonaFilter = dataPersona.filter((persona)=>{
//    return (persona.birthday > 15) && (persona.status == 1);
//});
//console.log(dataPersonaFilter);

/*
* MAP crea un nuevo array , pero podes modificar y transformar el arreglo resultante
*/

let dataPersonaEdad = dataPersona.map((persona)=>{
    let dataNewPerson = {
        names:persona.firstName + ' ' + persona.lastName,
        edad: 'Menor de Edad'
    }
    if(persona.age <= 18){
        dataNewPerson.edad='Menor de Edad';
        
    }else{
        dataNewPerson.edad='Mayor de Edad';
    }
    return dataNewPerson;
})

console.log(dataPersonaEdad);


//console.table(dataPersona.sort((a,b)=>{return a.age - b.age}));
//console.table(dataPersona.sort((a,b)=>{return b.age - a.age}));
let ordenarAscendente = dataPersona.sort((a,b)=>{return a.age - b.age})
console.table(ordenarAscendente);
let ordenearDescendente = dataPersona.sort((a,b)=>{return b.age - a.age})
console.table(ordenearDescendente);

// INCLUDE
dataPersonaEdad.includes('jose'); // true false

//agregar 10 objeto personas con diferente datos
//1 Filtrado por nombre (coincidencia) solicitar al usuario el nombre a buscar
//2 mostrar el promedio de las edades 
