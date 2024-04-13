import { Tarjeta } from "./tarjeta.js";
const url = 'https://pokeapi.co/api/v2/pokemon/';

window.onload =  async() =>{
    await getPokemones();
}

const getPokemones = async() =>{
    const peticion = await fetch(url);
    if(peticion.ok){
        const info = await peticion.json();
        const pokemones = info.results;        
        pokemones.forEach( async (pok,i) => {
            const card = new Tarjeta(3,pok.name,pok.url);
            const poketarjeta = await card.mostrar();
            document.getElementById('fila').innerHTML += poketarjeta;
        });
    }
}