export class Mascota{
    nombre='';
    tipo='';
    constructor(n,t){
        this.nombre = n;
        this.tipo = t;
    }
    saludar (){
        return 'Hola, soy ' +this.nombre+' y soy un '+this.tipo;
    }
}