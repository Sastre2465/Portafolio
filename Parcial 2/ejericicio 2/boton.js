export class Boton{
    texto;
    color;
    id;
    name;
    constructor(t,c,i,n){
        this.texto=t;
        this.color=c;
        this.id=i;
        this.name=n;
    }
    mostrar(){
        return '<button id="'+this.id+'" name="'+this.name+'" class="btn btn-'+this.color+'" >'+this.texto+'</button>'
    }
}