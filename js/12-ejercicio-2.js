'use strict'
//utilizando un bucle mostrar la suma y la media de los numeros introducidos, 
//hasta introducir un número negativo, ahí mostrar el resultado.
var suma=0;
var contador=0;
do {
var numero= parseInt( prompt("Introducir calificaciónes aprobatorias",0));
    
    if (isNaN(numero)) {
        numero=0;
    }else if(numero>=0) {
        suma= suma + numero;
        //suma+=numero;
        contador++;
         /* i++; significa lo mismo que i=i+1; es decir aumentar una unidad a la variable. */
    }
    console.log("la suma es: "+ suma);
    console.log("contador: "+ contador);

} while (numero>=0);
alert("la suma de las calificaciones es: "+ suma);
alert("La media o promedio es: "+ (suma/contador));