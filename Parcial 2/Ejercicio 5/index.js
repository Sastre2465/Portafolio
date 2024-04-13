const url = 'https://pokeapi.co/api/v2/pokemon/';

window.onload =  async() =>{
    await getPokemones();
}

const getPokemones = async() =>{
    const peticion = await fetch(url);
    if(peticion.ok){
        const info = await peticion.json();
        const pokemones = info.results;
        let tabla='';
        pokemones.forEach( async (pok,i) => {
            let img = await getImagen(pok.url);
            tabla ='<tr><td>'+(i+1)
            +'</td><td>'+pok.name
            +'</td><td><img src="'+img+'" height="80"></td></tr>';
            document.getElementById('tabla').innerHTML += tabla;
        });
    }
}

const getImagen = async(liga) =>{
    const peticion = await fetch(liga);
    if(peticion.ok){
        const info = await peticion.json();
        return info.sprites.other.dream_world.front_default;
    }


}