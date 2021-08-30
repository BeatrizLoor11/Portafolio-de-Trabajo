'use strict'
//obtener 2 numeros con promt y hacer sus operaciones basicas, 
//mostrar resultado en la pagina con web con document.write, alert y consola

var numero1= parseInt(prompt("Introducir 1er. número",0));
var numero2= parseInt(prompt("Introducir 2do Número",0));

while (numero1<0||numero2<0||isNaN(numero1)||isNaN(numero2)) {
    var numero1= parseInt(prompt("Introducir 1er. número",0));
    var numero2= parseInt(prompt("Introducir 2do Número",0));
}

var resultado= "La suma de: " + numero1+ " + "+numero2+ " es: " + (numero1 + numero2)+ "<br/>" +
               "La resta de: " + numero1+ " - "+numero2+ " es: " + (numero1 - numero2)+ "<br/>" +
               "La multiplicación de: " + numero1+ " * "+numero2+ " es: " + (numero1 * numero2)+ "<br/>" +
               "La división de: " + numero1+ " / "+numero2+ " es: " + (numero1/ numero2)+ "<br/>" ;

               //</br> salto de linea html...en body página
var resultadoCMD= "La suma de: " + numero1+ " + "+numero2+ " es: " + (numero1 + numero2)+ "\n" +
               "La resta de: " + numero1+ " - "+numero2+ " es: " + (numero1 - numero2)+ "\n" +
               "La multiplicación de: " + numero1+ " * "+numero2+ " es: " + (numero1 * numero2)+ "\n" +
               "La división de: " + numero1+ " / "+numero2+ " es: " + (numero1/ numero2)+ "\n" ;
               //  (\n) salto de linea en texto javascript  barra invertida n...ctrl+alt+\=\         
/* Caracteres especiales en JavaScript
\n: Salto de línea.
\r: Retorno de carro.
\t: Tabulación horizontal.
\v: Tabulación vertical. */
document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
