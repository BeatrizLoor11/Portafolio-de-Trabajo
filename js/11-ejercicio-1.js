'use strict'
//Programa que pida dos numeros y digan si son iguales entre ellos y cual es mayor y menor 
var numero1= parseInt(prompt("Introduce un número",0));
var numero2= parseInt(prompt("Indroduce otro número",0));
//Si se ingresa una letra, cero, o menor a cero...pedira que ingreses de nuevo un número
while (numero1 <=0|| numero2<=0|| isNaN(numero1)|| isNaN(numero2)) {
    numero1= parseInt(prompt("Introduce un número",0));
    numero2= parseInt(prompt("Indroduce otro número",0));   
}       
if (numero1==numero2) {
    console.log("Los números introducidos son iguales");
    } else if (numero1>numero2) {
        console.log("El numero1: "+ numero1+ " es mayor, que numero2: "+numero2);
    }else if(numero1<numero2){
        console.log("El numero1: "+ numero1+ " es menor, que numero2: "+numero2);
}else{
    console.log("Repetir proceso");
}
  