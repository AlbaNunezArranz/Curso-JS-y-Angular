var edad1 = 18;

// IF
if (edad1 >= 18) {
    console.log ("Eres mayor de edad, tiene " + edad1);
    if (edad1 <= 33) {
        console.log ("Eres milenial");
    } else if (edad1 >= 70) {
        console.log ("Eres anciano");
    } else {
        console.log ("Ya no eres milenial");
    }
} else {
    console.log ("No es mayor de edad, tiene " + edad1);
}

// OPERADORES LÓGICOS
var anyo = 2024;

// negación
if (year != 2024) {
    console.log ("El año no es correcto, estamos en 2024");
} 

// and
if (year >! 2023 && year <! 2025 && year) {
    console.log ("Estas en el año actual");
} else {
    console.log ("No estas en el año actual");
}

// or
if (year == 2024 || year == 2014 || year == 2004) {
    console.log ("El año acaba en 4");
} else {
    console.log ("El año no acaba en 4");
}

