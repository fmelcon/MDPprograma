import Ejemplo from "./ejemplo";
import HijoEjemplo from "./clasehija";

/* Class
* Declaraciones
*/

/**Instanciar una clase
 * inicializarla
 * new nombreClase => iniciarlizar o instanciar
 */

const auto = new Ejemplo('rojo','ferrari','f1');
const hijo = new HijoEjemplo('rojo','ferrari','f1',4);
/*
*vehiculo
* color , marca , puertas , modelo
*/
Ejemplo.prueba(); //por que es estatico
//Ejemplo.show(); //esto da error por que no esta definido como static
auto.show();
hijo.newColor('verde'); //cambiamos color
hijo.show();