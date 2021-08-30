'use strict'
var numero= parseInt(prompt("Introducir Número, para conseguir sus divisoresque den residuo cero",0));
for (var i = 1; i<=numero; i++) { // iniciamos desde 1 hasta llegar al numero introducido por usuario
    if (numero%i==0) { // numero introducido se divide desde 1 hasta llegar al numero introducido
        document.write("<H4>"+i +"</H4>");// aqui se muestran los divisores que dan como residuo cero.
    }   
}