// PRUEBAS CON VAR 
// los cambios se hacen en general
var num1 = 50;
console.log(num1); // valor 50

if (true) {
    var num1 = 100;
    console.log(num1); // valor 100
}

console.log(num1); // valor 100


// PRUEBAS CON LET
// los cambios se hacen solo en el bloque en el que esta
var texto1 = "Prueba1";
console.log(texto1); // valor Prueba1

if (true) {
    let texto1 = "Prueba2";
    console.log(texto1); // valor Prueba2
}

console.log("Prueba1"); // valor Prueba1