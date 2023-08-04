export default class HijoEjemplo extends Ejemplo {
    constructor(color,marca,modelo,ruedas){
        super(color,marca,modelo);                  //super es obligatorio y llama a lo declarado en el padre Ejemplo();
        this.ruedas = ruedas;
    }

    newColor(color){
        super.setColor(color);
    }
}