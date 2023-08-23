/*
*Asincronia de metodos
*callbacks funcion que tiene recive otra funciono como parametro
*promise se cumple, error, no se cumple
*async (resuelve) / await(promesa)


let ejemplo = () => {
    alert('Hola...')
};

setTimeout(ejemplo, 1000);

setTimeout(()=> {
    alert('Hola...');
},2000)

const elements = [1,2,3,4,5,6,7,8,9];

elements.forEach((index)=> {
    console.log(index);
});

*/
//repetir los numeros aleatorios hasta que de un valor 10, el usuario debe ingresar la cantidad de repeticiones.

const aleatorios = (repeticiones, callbacks) => {
    let numeros = [];
    for (let i=0; i<repeticiones; i++) {
        const numAleatorio = Math.floor(Math.random()*repeticiones+1)
        numeros.push(numAleatorio);
        if(numAleatorio === 10){
            callbacks({error:true, message: 'salio 10...',numeros})
            return;
        }
    }
    return callbacks(null,{error:false, message:'exitoso', numeros});
}
// callbacks(error,exito)

aleatorios(20,(error,succes)=>{
    if(error){
        console.log(error)
        return;
    }
    console.log(succes);
})

//PROMESAS
/*
*Promesa se cumple es una promesa RESUELTA then(resolve)
*Promesa no se cumple es una promesa RECHAZADA catch(reject)
*promesa indefinida promesa pendiente 
*finaliza la promesa finally(end)
*then(resolve,reject)
*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
    .finally (()=>{console.log('finalizado')})


/*
new Promise((resolve,reject)=>{

})
*/

const aleatoriosPromise = (repeticiones)=>{
    return new Promise((resolve,reject)=>{
        let numeros = [];
        for (let i=0; i<repeticiones; i++) {
            const numAleatorio = Math.floor(Math.random()*repeticiones+1)
            numeros.push(numAleatorio);
            if(numAleatorio === 10){
                reject({error:true, message:'Salio 10',numeros});
            }
        }
        resolve({error:false,message:'exitoso',numeros});
    })

}

aleatoriosPromise(14)
.then((data)=>{
    console.log(data);
    }).catch((e)=>{
    console.error(e);
    })