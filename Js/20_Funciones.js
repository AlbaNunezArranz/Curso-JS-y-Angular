'use strict'

function panda() {
    // las instrucciones
    console.log("Esta es la función PANDA");
}

function perro() {
    console.log("Esta es la función PERRO");
}

function gato() {
    console.log("Esta es la función GATO");
}

// Se invoca
panda();
gato();
perro();

var animal1 = panda();
console.log(animal1);

/////////////////////////////////////////////////////////////////////////////////////

// Calculadora
function calculadora(num1, num2, mostrar = true) {

    if(mostrar == true)  {
        console.log("La suma es: " + (num1 + num2) + "<br/>"); 
        console.log("La resta es: " + (num1 - num2) + "<br/>"); 
        console.log("La multiplicación es: " + (num1 * num2) + "<br/>"); 
        console.log("La división es: " + (num1 / num2) + "<br/>");
        console.log(mostrar); 
    } else {
        document.write("La suma es: " + (num1 + num2) + "<br/>"); 
        document.write("La resta es: " + (num1 - num2) + "<br/>"); 
        document.write("La multiplicación es: " + (num1 * num2) + "<br/>"); 
        document.write("La división es: " + (num1 / num2) + "<br/>");
        console.log(mostrar); 
    }
    
}

/*for (var i = 1; i <= 10; i++) {
    console.log(i);
    calculadora(i, 50);
}*/

//calculadora (32, 64);
