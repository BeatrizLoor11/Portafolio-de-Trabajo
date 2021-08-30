'use strict'
// programa que diga si el número ingresado es par o impar, Ventana prompt, pedir numero si no es valido
var numero= prompt("Introducir Número",0);

while (isNaN(numero)) {
    var numero= prompt("Introducir Número",0);
}

if (numero%2==0) {
    document.write("<h4>"+numero +" es par </h4>");
} else {
    document.write("<H4>"+numero +" es impar</H4>");
}