'use strict'

//Operadores
var numero1 =7 ;
var numero2 =12;
var operacion = numero1 + numero2;

alert("Resultado " + operacion);

//Tipos de datos
var numero_entero =44;
var cadena_texto ='Hola que tal';
var verdadero_o_falso = false;
var numero_falso = "33.44";

console.log(String(numero_entero)+7); //447
console.log(parseInt(numero_entero)+7); //51
console.log(parseFloat(numero_entero)+7); //51
console.log(Number(numero_falso)+7); //40.44
console.log(cadena_texto +" "+ verdadero_o_falso +" "+ numero_entero); //Hola que tal 44

console.log(typeof(numero_entero));//number
console.log(typeof(cadena_texto));//string
console.log(typeof(verdadero_o_falso));//boolean
console.log(typeof(numero_falso));//string