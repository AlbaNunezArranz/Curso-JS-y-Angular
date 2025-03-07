'use strict'

// Plantillas de texto
var nombre = promt('Nombre: ');
var apellidos = prompt("Apellidos: ")

var nombre_completo = "Me llamo " + nombre + "</br> y mis apellidos son " + apellidos;
document.write(nombre_completo);

var plantilla = `
    <h1>Hola</h1>
    <h3>Nombre: ${nombre} </h3>
    <h3>Apellidos: ${apellidos} </h3>
`;
document.write(plantilla);
