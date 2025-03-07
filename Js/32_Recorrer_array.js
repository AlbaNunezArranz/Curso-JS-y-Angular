'use strict'

// Mostrar todos los elementos del array por pantalla
var mascotas = ["Perro", "Gato", "Conejo", "Pez"];
var lenguajes = new Array("JS", "PHP", "Go", "Java");

document.write("<h3>Todos los elementos del array de mascotas: </h3>")
// solo un elemento
// document.write(lenguajes[2]);


// recorremos el array y lo metemos en una lista
document.write("<ul>");

for(var i = 0; i < mascotas.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");


// con esta opción lo recorremos y lo mostramos
document.write("<h3>Todos los elementos del array de lenguajes: </h3>")
document.write("<ul>");

lenguajes.forEach((elemento, indice, arr)=> {
    console.log(arr);
    document.write("<li>" + indice + " - " + elemento[i] + "</li>");
    }
);

document.write("</ul>");
