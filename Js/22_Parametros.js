'use strict'

// REST y SPREAD
function listaanimales(animal1, animal2, restoanimales) {
    console.log("Lista animales: ", animal1);
    console.log("Lista animales: ", animal2);
    console.log(restoanimales);
}

listaanimales("panda", "perro", "gato", "zorro");

var animales = ["panda", "perro"];
listaanimales(...animales, "gato", "zorro")

