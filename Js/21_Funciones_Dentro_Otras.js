'use strict'
// Calculadora
function consola(num1, num2) {
    console.log("La suma es: " + (num1 + num2) + "<br/>"); 
    console.log("La resta es: " + (num1 - num2) + "<br/>"); 
    console.log("La multiplicación es: " + (num1 * num2) + "<br/>"); 
    console.log("La división es: " + (num1 / num2) + "<br/>");
    console.log(mostrar); 
} 
    
function pantalla(num1, num2) {
    document.write("La suma es: " + (num1 + num2) + "<br/>"); 
    document.write("La resta es: " + (num1 - num2) + "<br/>"); 
    document.write("La multiplicación es: " + (num1 * num2) + "<br/>"); 
    document.write("La división es: " + (num1 / num2) + "<br/>");
    console.log(mostrar); 
}
    
function calculadora(num1, num2, mostrar = true) {
    if(mostrar == true) {
        consola(num1, num2);
    } else {
        pantalla(num1, num2);
    }

    return true;
}

calculadora(18, 32);
calculadora(100, 74, true);