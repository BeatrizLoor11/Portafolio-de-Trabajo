'use strict'
var numero=parseInt(prompt("Numero de la tabla",0));
document.write("<h3>"+"Tabla del: "+numero+"</h3>");
while (isNaN(numero)) {
    var numero=parseInt(prompt("Numero de la tabla",0));   
}
//Tabla del 1 al 10 del numero introducido
for (var i = 1; i <=10; i++) {
    document.write(numero+"*"+i+"="+(numero*i)+"</br>");  
}
//Todas las tablas del 1 al 10
 for (var i =1; i <=10;i++){ 
    document.write("<h3>"+"Tabla del: "+i+"</h3>");
    for (var c=1;c<=10;c++) {// for anidado: dentro de otro bloque de sentencias osea otro for(bucle)
        document.write(i+"*"+c+"="+(i*c)+"</br>");   
    }
}   
