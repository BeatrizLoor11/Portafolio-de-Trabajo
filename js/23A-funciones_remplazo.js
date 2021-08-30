'use strict'
//Funciones de remplazo
var numero=444;
var texto1=" Bienvenido al curso de JavaScript del curso Victor Robles";
var texto2="Es muy buen curso";
//replace: REMPLAZAR
//var busqueda= texto1.replace("Bienvenido","Hola");//replace cambia el texto, primero se escribe lo escrito y luego lo nuevo.

//slice: RODAJA
//var busqueda= texto1.slice(10);//al curso de JavaScript del curso Victor Robles"(rescata desde el indice mencionado);
//var busqueda= texto1.slice(10,19);//al curso 

//split: SEPARAR
//var busqueda= texto1.split();//introduce todo en un array (de var a array)
var busqueda= texto1.split(" ");//separa todo por elementos palabras, numeros con comas,

//trim:PODAR
var busqueda= texto1.trim();//quita los espacios de inicio y fin. php trim(variable) 
console.log(busqueda);

