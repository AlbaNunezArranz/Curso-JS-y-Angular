'use strict'

var mascotas = ["Perro", "Gato", "Conejo", "Pez"];

// para meter un elemento en un array
mascotas.push ("Pajaro");


// en bucle hasta acabar
do {
    var nueva_mascota = prompt("Introduce una nueva mascota hasta ACABAR");
    mascotas.push(nueva_mascota);
}
while (nueva_mascota != "ACABAR");


// para eliminar el último elemento del array
// mascotas.pop();


// elimina el elemento del array dejandolo a undefined
// mascotas[0] = undefined;


// se puede eliminar mediante indice
var indice = mascotas.indexOf("ACABAR");

if (indice > 1) {
    mascotas.splice(indice, 1);
}

// lo convertimos a string separado por comas
var cadena = mascotas.join();

console.log(cadena);


