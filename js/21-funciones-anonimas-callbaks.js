'use strict'
//FUNCION ANONIMA: Es una función que no tiene nombre, ese conjunto de instrucciones no tendra nombre y lo podemos guardar en variable
var pelicula= function (nombre) {
    return "la pelicula es: "+ nombre;
}
//console.log(pelicula("Harry Potter"));

//CALLBACKS: Es una función que se ejecuta dentro de otra 
function sumame(numero1, numero2,SumaResultado,SumaPorDos) {
    var sumar=numero1+numero2;

    SumaResultado(sumar);
    SumaPorDos(sumar); 

    return sumar;
}
 sumame(5,7 , dato =>{                     //function(dato){} ..es lo mismo que.. dato =>{}
    console.log("La suma es: ", dato);
},
function (dato) {
    console.log("La suma por dos es: "+(dato*2));
}); 
