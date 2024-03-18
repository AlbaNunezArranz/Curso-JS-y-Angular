'use strict'

// Que avise si un numero es par o impar
// 1. Prompt
// 2. Si es invalido que vuelva a pedirlo
var num1 = parseInt(prompt('Introduce un numero', 0)); 

while (isNaN (num1)) {
    num1 = parseInt(prompt('Introduce un numero', 0));
}

if (num1 % 2 == 0) {
    console.log("El numero " + num1 + " es par");
} else if (num1 % 2 != 0) {
    console.log("El numero " + num1 + " es impar");
}

