import { storage } from "./storage.js";
let btn = document.querySelector('#btn1');
btn.addEventListener('click',()=>{
    let nuevonombre = document.querySelector('#nuevonombre')
    document.querySelector('#nom').innerHTML = nuevonombre.value;
    //window.localStorage.setItem('usuario',nuevonombre.value);
    storage.asignar('usuario',nuevonombre.value)
    nuevonombre.value = '';
});
let nombreLocal = storage.obtener('usuario');
document.querySelector('#nom').innerHTML = nombreLocal;
storage.limpiar();