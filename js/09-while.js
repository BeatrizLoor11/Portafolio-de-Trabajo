'use strict'
//Bucle while
 var year=2021;
// se imprimira desde el 2021, 2022, ... hasta 2029..porque cuando year sea 2030 (distinto "!=") no sera distinto a 2030
 while (year != 2030) {
     console.log("WHILE, el año es: " + year);
     //parar while
     if (year==2025) {
         break; //detiene
     }
     year++;
 }
 // Bucle Do while
 //aqui num=18 diferente != 18, ya no se cumple
 //se imprimira 3 veces 15,16,17
 var num=15
 do {
     alert("Se imprime el alert hasta que no se cumpla la condición: " + num);
     num++;
} while (num!=18);

 year=2020;
 do {
     console.log("Do While, year: "+ year);
     year++;
 } while (year<2025); 

 /* i++; significa lo mismo que i=i+1; es decir aumentar una unidad a la variable. */