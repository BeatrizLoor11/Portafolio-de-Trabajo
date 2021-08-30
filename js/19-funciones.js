'use strict'
//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones
function porConsola(numero1,numero2) {
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multiplicación: "+ (numero1*numero2));
        console.log("División: "+ (numero1/numero2));        
}
function porPantalla(numero1,numero2) { //se muestra en la pag. html
        document.write("Suma: "+ (numero1+numero2)+ "<br/>"); 
        document.write("Resta: "+ (numero1-numero2)+ "<br/>"); 
        document.write("Multiplicación: "+ (numero1*numero2) + "<br/>");
        document.write("División: "+ (numero1/numero2)+ "<br/>"); 
        
}

//Defino la función
function calculadora(numero1, numero2,mostrar=false) { //parametros opcionales:(No es obligatorio pasar valor de la variable true/false), ya estan inicializados
    //Conjunto de instrucciones a ejecutar
    //console.log("Hola soy la calculadora");
    //console.log("Si, soy yo");
    if (mostrar==false) {
        porConsola(numero1,numero2);
    } else {//mostrar==true
       porPantalla(numero1,numero2);
    }
   return true;
 
    //return "Hola soy la calculadora Nena";    
}
//**************Invocar o llamar a la función************
//console.log(calculadora(), calculadora());
/* var resultado= calculadora();

//Teniendo este metodo con console.log y return...en Consola solo se mostrara console.log,
console.log(resultado); */
//solo escribiendo en Consola este metodo se mostrara contenido el return y console.log. de la función
//No se recomienda usar los dos return y console.log en la funcion."function"
calculadora(12,8);//aqui no es necesario poner true/false.ya esta inicializado con valor el la variable mostrar.
calculadora(2,5,true);


for (var i=1;i<=10;i++) {
    console.log(i);
    calculadora(i,8);   
} 

  