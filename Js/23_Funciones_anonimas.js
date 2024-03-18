'use strict'

// Funciones anónimas
// son funciones sin nonbre

function sumando (num1, num2) {
    var sumar = num1 + num2;

    return sumar;
}

sumando(74, 95, function(dato) {
        console.log("La suma es: ", dato)
    },

    function(dato) {
        console.log("La suma por dos es: ", (dato * 2))
    }
)
