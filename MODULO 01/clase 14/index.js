const div1= document.querySelector('#contenedor1');
const div2= document.querySelector('#contenedor2');
const div3= document.querySelector('#contenedor3');

const cambiar = document.getElementById('cambiar');
const volver = document.querySelector('#volver');

cambiar.addEventListener('click', ()=>{
    //div1.style.backgroundColor='orange!important';
    //div2.style='background-color:orange!important;width:100%';
    //div1.setAttribute('style','background-color:orange!important;');
    //div2.setAttribute('class','col-12 py-4 bg-secondary');
    //div3.setAttribute('class','col-12 py-4 bg-danger');
    div2.classList.remove('col-8');
    div2.classList.add('col-12');
    div3.classList.add('col-12');
    div3.classList.remove('col-4');

    cambiar.setAttribute('disabled',true);
    volver.removeAttribute('disabled');
})

volver.addEventListener('click',()=>{
    div1.removeAttribute('style');
    div1.setAttribute('style','col-12 py-4 bg-primary;');
    div2.setAttribute('class','col-8 py-4 bg-secondary');
    div3.setAttribute('class','col-4 py-4 bg-danger');
    volver.setAttribute('disabled',true);
    cambiar.removeAttribute('disabled');
})

/*
const divAll= document.querySelectorAll('.items');
divAll[0].setAttribute('style','background-color:orange!important;');
divAll[0].setAttribute('data-number',10);//ejemplo para pasar un parametro
console.log(divAll);
console.log(divAll[0]);
*/

//Verificar si el elemento seleccionado tiene atributos o no devuelve un valor booleano (true, false)

let veratributos = div1.hasAttributes();
console.log(veratributos);
//Verificar si el elemento seleccionado tiene un atributo o no devuelve un valor booleano (true, false)

let vatributo = div1.hasAttribute('id');
console.log(vatributo);
//Obtenemos los valores de los atributos.

console.log(div1.getAttribute('id'));
//Obtenemos en un array todos los atributos usado por el elemento seleccionado
console.log(div1.getAttributeNames());
div1.classList.remove('col-12');
div1.classList.add('col-8','otra clase');//ejemplo.

/* Creacion de elementos HTML desde JS */

//div1.appendChild() // añadir elemento como hijo
//div1.removeChild() // eliminar elemento
//div1.replaceChild() // reemplazar elemento

/* agregar elementos HTML desde JS */
//div1.insertBefore() // añadir elemento como anterior
//div1.insertAfter() // añadir elemento despues 

const elementoDiv = document.createElement('div'); //
elementoDiv.innerHTML = 'hola mundo'; 
elementoDiv.classList.add('classone');

div1.before(elementoDiv); // agrega elemento antes.

//prepend => añade el primero hijo
//append => añade el ultimo hijo