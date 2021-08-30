'use strict'
//Mostras la secuencia de numeros, entre dos numeroa ingresados..es decir ejemplo 5 a -5 o -5 a 5
var numero1= parseInt(prompt("Introducir Numero INICIO:",0));
var numero2= parseInt(prompt("Introducir Numero FIN:",0));

document.write("<H1> del numero: " + numero1 +" al numero: "+ numero2 +"<H1>");

if (numero1<=numero2) {
    for ( var i=numero1; (i <= numero2); i++) {
        console.log(i);
        document.write(i + "<br/>");    
    }
} else {
    for (numero1;numero1>=numero2;numero1--) {
        console.log(i);
        document.write(numero1 +"<br/>");
    }
}
