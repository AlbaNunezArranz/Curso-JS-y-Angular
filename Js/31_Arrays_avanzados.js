'use strict'

// Arrays, matrices
var mascota = "Perro";
var mascotas = ["Perro", "Gato", "Conejo", "Pez", true, 10];

var lenguajes = new Array("JS", "PHP", "Go", "Java");

console.log(mascotas.length);
console.log(lenguajes[3]);

var elemento = parseInt(prompt("¿Que elemento del array quieres ver?", 0));
if(elemento >= lenguajes.length){
    alert("Introduce un numero correcto");
} else {
    alert("El lenguaje es: " + lenguajes[elemento]);
}

