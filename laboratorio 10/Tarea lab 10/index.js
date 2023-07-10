const caja1=document.querySelector(".caja1");
const caja2=document.querySelector(".caja2");
const caja3=document.querySelector(".caja3");
const boton1 = document.getElementById("press1");

window.addEventListener("load",()=>{
    caja1.style.backgroundColor="pink";
    caja1.style.width="100%";
    caja1.style.height="20vh";
    caja1.style.border='2px solid black'
    caja2.style.backgroundColor="yellow";
    caja2.style.width="50%";
    caja2.style.height="40vh";
    caja2.style.border='2px solid black'
    caja3.style.backgroundColor="yellow";
    caja3.style.width="50%";
    caja3.style.height="40vh";
    caja3.style.border='2px solid black'

})


boton1.addEventListener("click", ()=>{ 
    caja1.style.backgroundColor="orange";
    caja1.style.width="100%";
    caja1.style.height="30vh";
    caja1.style.border='2px solid black'

});

boton1.addEventListener("click", ()=>{ 
    caja2.style.backgroundColor="orange";
    caja2.style.width="100%";
    caja2.style.height="30vh";
    caja2.style.border='2px solid black'

});

boton1.addEventListener("click", ()=>{ 
    caja3.style.backgroundColor="orange";
    caja3.style.width="100%";
    caja3.style.height="30vh";
    caja3.style.border='2px solid black'
});


const boton2 = document.getElementById("press2");

boton2.addEventListener("click", ()=>{ 
    caja1.style.backgroundColor="pink";
    caja1.style.width="100%";
    caja1.style.height="20vh";
});

boton2.addEventListener("click", ()=>{ 
    caja2.style.backgroundColor="yellow";
    caja2.style.width="50%";
    caja2.style.height="40vh";
});

boton2.addEventListener("click", ()=>{ 
    caja3.style.backgroundColor="yellow";
    caja3.style.width="50%";
    caja3.style.height="40vh";
});