export class Tarjeta{
    col ='';
    nombre ='';
    url ='';
    constructor(c,n,u){
        this.col=c;
        this.nombre=n;
        this.url=u;
    }
    async mostrar(){
        const info = await getDetalle(this.url);
        const img = info[0];
        const id = info [1];
        let habilidades = '';
        let types ='';
        const habis = info [2];
        habis.forEach(hab => {
            habilidades += hab.ability.name+' ';
        })
        const tipos = info [3];
        tipos.forEach(typ => {
            types += typ.type.name +' ';
        })
        const height = info [4] / 10;
        const weight = info [5] / 10;
        
       
        let card = '<div class="col-md-' + this.col + ' mb-3">';
        card +='<div class="card shadow border-danger rounded">'
        card +='<img src="'+img+'"height="120" class="card-img-top p-2" >';
        card +='<div class="card-body text-center bg-warning">';
        card +='<h5 class="card-title text-capitalize">';
        card +='<span class="badge text-bg-light text-dark">'+id+'</span> ';
        card +=this.nombre+'</h5>';
        card += '<p class="card-text rounded bg-danger text-white">Habilidades: <b>' + habilidades + '</b> ';
        card +='<p class"card-text rounded bg-danger text-orange">Tipo: <b>' + types + '</b>  Altura: <b>' + height + ' </b>  Peso: <b>'+weight+' </b> </b></p></div>';
        card +='</div></div></div>';
        return card;
    }
}

const getDetalle = async(liga) =>{
    let detalles=[];
    const peticion = await fetch(liga);
    if(peticion.ok){
        const info = await peticion.json();
        detalles.push(info.sprites.other.dream_world.front_default);
        detalles.push(info.id);
        detalles.push(info.abilities);
        detalles.push(info.types);
        detalles.push(info.height);
        detalles.push(info.weight);
        return detalles;
    }


}