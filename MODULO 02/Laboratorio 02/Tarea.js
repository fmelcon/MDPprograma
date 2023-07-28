//crear una serie de funciones que cree un array de objetos

function crearArrayPersonas() {
    const personas = [
    {
    fistName: "Franco",
    lastName: "Melcon",
    age: 33,
    status:true 
    },
    {
    fistName: "Salchi",
    lastName: "Papa",
    age: 23,
    status:true
    },
    {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    status: false,
    },
    {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    status: true,
    },
    {
    firstName: "Mike",
    lastName: "Johnson",
    age: 40,
    status: false,
    },
    ];
    return personas;
}

const personas = crearArrayPersonas();


console.log(personas)

console.log(`Nombre :${personas[0].fistName}\nApellido :${personas[0].lastName}\nEdad: ${personas[0].age}\nEstado: ${personas[0].status}`);
