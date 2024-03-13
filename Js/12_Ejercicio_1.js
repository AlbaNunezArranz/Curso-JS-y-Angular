'use strict'

// Programa que pide 2 numeros y avise del mayor
// Si introduce algo diferente de numero, negativos o cero debe volver a pedirlos
var num1 = parseInt(prompt('Introduce el primer numero', 0)); 
var num2 = parseInt(prompt('Introduce el segundo numero', 0));

while (num1 <= 0 || num2 <= 0 || isNaN (num1) || isNaN (num2)) {
    num1 = parseInt(prompt('Introduce el primer numero', 0));
    num2 = parseInt(prompt('Introduce el segundo numero', 0));
}


if (num1 == num2) {
    alert("El primer número y el segundo son iguales");
} else if (num1 > num2) {
    alert("El número " + num1 + " es mayor que el numero " + num2);
} else if (num1 < num2) {
    alert("El número " + num2 + " es mayor que el numero " + num1);
} else {
    alert("Error");
}

