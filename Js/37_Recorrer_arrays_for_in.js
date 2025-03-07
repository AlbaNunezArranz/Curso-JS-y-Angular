'use strict'

var mascotas = ["Perro", "Gato", "Conejo", "Pez"];

document.write("</ul>");

for (let mascota in mascotas) {
    document.write("<li>" + mascotas[mascota] + "</li>");
}

document.write("</ul>");


