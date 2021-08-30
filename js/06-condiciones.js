var edad= 18;
var nombre= 'David Suarez'
/* 
Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: != ,SOLO SIGNIFICA DISTINTO EL "=" NO CUENTA*/

if (edad) {
    //Es mayor de edad
    console.log(nombre+" tiene "+ edad + " años, es mayor de edad");
   if (edad <=33) {
       console.log("Todavia eres millenial");
   } else if (edad >=70){
       console.log("Eres Anciano")
   }else{
       console.log("Ya no eres millenial")
   }
} else{
    //Es menor de edad
    console.log(nombre+" tiene "+ edad +"  años, es Menor de edad");
}
/* Operadores logicos
AND(Y): &&
OR(O): ||
NEGACIÓN: != */

//Negación
var year = 2018;
if (year != 2016 ) {
    console.log("El año no es 2016, realemente es: "+ year);
}
//AND
if (year >= 2000 && year <= 2020 && year != 2018) {
   console.log("Estamos en la era ctual"); 
}else{
   console.log("Estamos en la era postmoderna")
}
//OR
if (year == 2008 || (year >= 2018 && year == 2020)) {
   console.log("El año acaba en 8"); 
} else{
    console.log("Año NO registrado");
}
//
