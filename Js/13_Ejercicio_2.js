'use strict'

// Usando un bucle, mostrar la suma y la media de los numeros
// hasta introducir un negativo y mostrar el resultado
var suma = 0; 
var contador = 0;

do {
    var num1 = parseInt(prompt('Introduce un numero (cero o negativo para parar)', 0));

    if (isNaN(num1)) {
        num1 = 0;
        
    } else if (num1 >= 0) {
        suma = suma + num1;

        contador++;
    }

    console.log(suma);
    console.log(contador);

} while (num1 >= 0)

alert("La suma es: " + suma);
alert("La media es: " + (suma/contador));