'use strict'

var tex1 = ' Primera parte del texto ';

var buscador = tex1.replace("texto", "buscador");
console.log(buscador);

// HACE UN CORTE Y EMPIEZA DESDE ESE CARACTER
var buscador1 = tex1.slice(11, 20); // SI LE PONEMOS OTRO NUMERO CORTA ELANTE Y DETRAS
console.log(buscador1);


// HACE UN CORTE Y LO METE EN ARRAY
var buscador2 = tex1.split(); // SI LE PONEMOS OTRO NUMERO CORTA ELANTE Y DETRAS
var buscador3 = tex1.split(" "); // CORTA POR ESPACIO, UN ELEMENTO POR ESPACIO
console.log(buscador2);
console.log(buscador3);

// RECORTAR ESPACIO DELANTE Y DETRAS
var buscador4 = tex1.trim; 
console.log(buscador4);