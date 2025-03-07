'use strict'

var num1 = 111;
var tex1 = 'Primera parte del texto';
var tex2 = 'Segunda parte del texto';

var buscador = tex1.indexOf ("parte");
console.log(buscador);

// LA ULTIMA OCURRENCIA
var buscador2 = tex1.lastIndexOf ("parte");
console.log(buscador2);

// SI SE INTRODUCEN DATOS QUE NO ENCUENTRA APARECE -1
var buscador3 = tex1.search ("parte");
console.log(buscador3);

// DEVUELVE UN ARRAY
var buscador4 = tex1.match ("parte");
console.log(buscador4);

//BUSQUEDA GLOBAL
var buscador5 = tex1.match (/parte/gi);
console.log(buscador5);

// SOLO ALGUNOS CARACTERES
var buscador5 = tex1.substr (7, 12);
console.log(buscador5);

// UNA LETRA
var buscador6 = tex1.charAt (15);
console.log(buscador6);

// BUSCAR UN TEXO - BOOLEAN
var buscador7 = tex1.startsWith("Segunda");
var buscador8 = tex1.endsWith("texto");
console.log(buscador7);
console.log(buscador8);

// BUSCA PALABRA - BOOLEAN
var buscador9 = tex1.includes ("del");
console.log(buscador9);