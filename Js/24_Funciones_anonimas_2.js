'use strict'

// Funciones anónimas
// son funciones sin nonbre

function sumando (num1, num2, sumaYMuestra, sumarPorDos) {
    var sumar = num1 + num2;

    sumaYMuestra(sumar);
    sumarPorDos(sumar);

    return sumar;
}

sumando(74, 95, dato => {
        console.log("La suma es: ", dato)
    },

    dato => {
        console.log("La suma por dos es: ", (dato * 2))
    }
)