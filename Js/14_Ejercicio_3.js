'use strict'

// Hacer un programa que muestre todos los numeros entre dos numeros introducidos por pantalla
var num1 = parseInt(prompt('Introduce el primer numero', 0)); 
var num2 = parseInt(prompt('Introduce el segundo numero', 0));

document.write("<h1>De " + num1 + " a " + num2 + "están estos números: </h1>")
for (var i = num1; i <= num2; i++) {
    document.write(i + "<br/>")
}
