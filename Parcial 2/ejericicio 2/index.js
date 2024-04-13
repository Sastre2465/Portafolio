import { Mascota } from "./mascota.js";
import { Boton } from "./boton.js";

const firu = new Mascota('Firulais','perro');
const Michi = new Mascota('Michi','gato');
console.log(Michi.saludar());
console.log(firu.saludar());

const btn1 = new Boton('Eliminar','danger','btn1','btnEliminar');
const btn2 = new Boton('Guardar','success','btn2','btnGuardar');
const btn3 = new Boton('Duplicar','light','btn3','btnDuplicar');

var div1 = document.querySelector('#div1');
div1.innerHTML=btn1.mostrar()+btn2.mostrar()+btn3.mostrar();