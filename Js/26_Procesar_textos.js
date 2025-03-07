'use strict'

var num1 = 111;
var tex1 = 'Primera parte ';
var tex2 = 'Segunda parte';

var dato = num1.toString();
    dato = tex1.toLowerCase();
    dato = tex2.toUpperCase();

console.log(typeof dato);
console.log(dato); 


// CALCULAR LONGITUD
var prue = "calculado";
var arr = ["primer elemento", "segundo elemento"];

console.log(prue.length);


// CONCATENAR
var texto_completo = tex1 + " y "+ tex2 + ".";
var texto_completo2 = tex1.concat(" y ", tex2);

console.log(texto_completo);