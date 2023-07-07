/** Obtener o Buscar Elementos HTML desde JS
 * 
 * Metodos modernos
 * QuerySelector() Busca un solo elemento / y querySelectorALL() Busca todos los elementos
 * 
 * Metodos tradicionales
 * 
 * getElementById() => busca el elemento solo por ID
 * getElementByClass() => busca los elementos por clase
 * getElementByTagName() => busca los elementos por Tag de HTML
 */

const elementoP = document.querySelector("#prueba");
console.log(elementoP);

elementoP.style.color="red";

const divContainer = document.querySelector('.container');

//Insertar un elemento de HTML IMG

const img = document.createElement('img'); // crea cualquier elemento de HTML

img.src='https://picsum.photos/id/600/400/400';
img.alt='Texto alternativo';

//Agregar Elementos creados a un objeto del DOM al final
divContainer.appendChild(img);
//REMOVE.Child Elimina Elementos en HTML
//elementoP.remove();

//divContainer.appendChild('<img src="" alt="prueba">');

// Propiedad WINDOWS
// el window. no hace falta

// window.alert('Mensaje');
// confirm("estas segurito ?");
//open('https://google.com'); abre una pagina popup
//print(); hace lo mismo que Ctrl+P
//prompt("Ingrese nombre"); 
//close();
//history.back();

//console.log(document.URL);
//document.write('Escribe en el documento de HTML');
document.title='Ejemplo de titulo';

// EVENTOS

// KeyPress (teclado)
// KeyUP - KeyDown
// click
// change
// blur 
// cut
// copy
// focus
// scrollUp - scrollDown
// focus
// online - offline
// mouseover -mouseOut - mouseUp - mouseDown
// play , pause, volumechange
// submit

const boton = document.getElementById('boton');

boton.addEventListener('click', ()=>{
    document.querySelector('.ejemplo').style.color="green";
});


