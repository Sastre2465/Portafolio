import { storage } from "./storage.js";

// Obtener los colores del almacenamiento local y dividirlos solo si es una cadena
var coloresString = storage.obtener('colores');
var colores = coloresString && typeof coloresString === 'string' ? coloresString.split(',') : [];

// Llenar la tabla con los colores obtenidos
llenaTabla();

// Escuchar el evento de presionar una tecla en el campo de entrada de color
var inputcolor = document.querySelector('#color');
inputcolor.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        // Agregar el nuevo color al array de colores
        colores.push(inputcolor.value);
        // Almacenar los colores actualizados en el almacenamiento local
        storage.asignar('colores', colores.join(','));
        inputcolor.value = ''; // Limpiar el campo de entrada
        llenaTabla(); // Actualizar la tabla con los nuevos colores
    }
});

// Función para llenar la tabla con los colores
function llenaTabla() {
    var body = '';
    for (var i = 0; i < colores.length; i++) {
        var btnEditar = '<button id="btnEditar' + i + '" data-indice="' + i + '" class="btn btn-warning btnEditar">Editar</button>';
        var btnEliminar = '<button data-indice="' + i + '" class="btn btn-danger btnEl">Eliminar</button>';
        var input = '<input id="input' + i + '" class="form-control d-none" value="' + colores[i] + '">';
        var guardar = '<button class="btn btn-success btnGuar d-none" id="boton' + i + '" data-indice="' + i + '">Guardar</button>';
        body += '<tr><td>' + (i + 1) + '</td><td>' + input + '<div id="div' + i + '" >' + colores[i] + '</div></td><td>' + btnEditar + '' + guardar + '</td><td>' + btnEliminar + '</td></t>';
    }
    document.querySelector('#datos').innerHTML = body;
    eventos(); // Agregar eventos a los elementos de la tabla
}

// Función para agregar eventos a los elementos de la tabla
function eventos() {
    var btnEliminar = document.querySelectorAll('.btnEl');
    btnEliminar.forEach(elem => elem.addEventListener('click', event => {
        var indice = event.target.getAttribute('data-indice');
        eliminar(indice); // Eliminar el color correspondiente al botón Eliminar
    }));
    var btnEditar = document.querySelectorAll('.btnEditar');
    btnEditar.forEach(elem => elem.addEventListener('click', event => {
        var indice = event.target.getAttribute('data-indice');
        show(indice); // Mostrar el campo de entrada para editar el color correspondiente al botón Editar
    }));
    var btnGuardar = document.querySelectorAll('.btnGuar');
    btnGuardar.forEach(elem => elem.addEventListener('click', event => {
        var indice = event.target.getAttribute('data-indice');
        actualizar(indice); // Actualizar el color correspondiente al botón Guardar
    }));
}

// Función para eliminar un color del array de colores y actualizar la tabla y el almacenamiento local
function eliminar(indice) {
    colores.splice(indice, 1); // Eliminar el color del array de colores
    storage.asignar('colores', colores.join(',')); // Actualizar los colores en el almacenamiento local
    llenaTabla(); // Actualizar la tabla con los colores actualizados
}

// Función para mostrar el campo de entrada para editar un color
function show(indice) {
    var div = document.querySelector('#div' + indice);
    var campo = document.querySelector('#input' + indice);
    var botonEd = document.querySelector('#btnEditar' + indice);
    var botonG = document.querySelector('#boton' + indice);
    div.classList.add('d-none');
    campo.classList.remove('d-none');
    botonEd.classList.add('d-none');
    botonG.classList.remove('d-none');
}

// Función para actualizar un color en el array de colores y en el almacenamiento local, y actualizar la tabla
function actualizar(indice) {
    var nuevoColor = document.querySelector('#input' + indice).value;
    colores[indice] = nuevoColor; // Actualizar el color en el array de colores
    storage.asignar('colores', colores.join(',')); // Actualizar los colores en el almacenamiento local
    llenaTabla(); // Actualizar la tabla con los colores actualizados
}
