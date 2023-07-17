console.log("Hola mundo");
console.info("info");
console.warn("Advertencia");
console.error("error");


// comentamos una Linea

/* parrafo */

/* Metodo para acceder al DOM = document
getElementById() => buscar elemento de html con el ID especificado;
*/

/* DECLARACIONES DE VARIABLES EN JS

const => constante

Var - let => variable

*/

const parrafo = document.getElementById('parrafo');

parrafo.style.color="red";
parrafo.innerHTML= 'Ejemplo cambiado por <b><h1>JS<h1><b>'

console.log(document.getElementById("parrafo"));

setTimeout(()=> {
    parrafo.textContent += '  texto extra con setTimeout'
},3000);

//añadir cualquier evento a un elemento de HTML addEventListener

parrafo.addEventListener('click',()=> {
    parrafo.style.color='green'
});

// getElementByName => por etiqueta de Html

document.getElementsByName('p');
document.getElementsByClassName('p');

// getElementByClassName() => por clase de ejemplo
// getElementById() => buscar elemento de html con el ID especificado;
// getElementbyTagsName

//Metodos Modernos
//document.querySelector(); coincide 1 elemento de css
//document.querySelectorAll();  coincide todos elemento de css

const parrafo2 = document.querySelectorall('#parrafo');
console.log('parrafo2')
console.log(parrafo2.innerText);

console.log(parrafo==parrafo2);

