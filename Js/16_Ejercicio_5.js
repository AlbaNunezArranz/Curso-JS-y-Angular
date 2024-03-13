'use strict'

// Mostrar los divisores de un numeros introducido por pantalla
var num1 = parseInt(prompt('Introduce un numero', 1)); 

for (var i; i <= num1; i++) {
    if (num1%i == 0) {
        console.log("Divisor: " + i)
    }
}