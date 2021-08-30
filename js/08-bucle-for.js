'use strict'
//bucle
//Bucle es una estructura de control que se repiten varias veces

var numero=100;
//i=100 es (< menor) que 100, aqui no se cumple y se imprime al 99
for (var i= 0; i < numero; i++) {
    console.log("el numero es: " + i);  
    debugger; //Nos abrira pestaña Sources en las herramientas del programador y en WATCH PODEMOS ver la variable "i" agragandola en Watch; 
    //con la flecha circulo lo ejecuto poco a poco haciendo click para ver el incremento de "i =1, i=2...etc.";
    //ejecutando poco a poco con lo anterior en la pestaña Consola veremos los valores de i, console.log("el numero es: " + i);
}