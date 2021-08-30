'use strict'
//Parametro Rest ."..."Se representa con tres puntos a los parametros que faltan o que se pudieran recibir en los ().
//*Los parámetros REST son usados para crear funciones que "acepten cualquier número de argumentos".
function listadoFrutas(fruta1,fruta2,...resto_de_frutas) {//...REST(resto_de_frutas es un arreglo)
    console.log("fruta1: "+ fruta1); 
    console.log("fruta2: "+ fruta2);
    console.log("resto_de _frutas: " + resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melón","Coco");
/* fruta1: Naranja
fruta2: Manzana
resto_de_frutas: Sandia,Pera,Melón,Coco */
console.log("*******");

//Array: coleccion de elementos desde indice cero
var frutas=["Naranja","Manzana"];

listadoFrutas(frutas,"Sandia","Pera","Melón","Coco");
/* fruta1: Naranja,Manzana
fruta2: Sandia
resto_de_frutas: Pera,Melón,Coco */
console.log("*******");

//SPREAD "..."sin estos puntos (fruta1 vale= frutas=["Naranja","Manzana"];) con los puntos vale fruta1 vale= frutas=["Naranja"],fruta2 vale= frutas=["Manzana"]
//*El operador SPREAD es usado para pasar un array a "funciones que normalmente requieren una lista de muchos argumentos".
listadoFrutas(...frutas,"Sandia","Pera","Melón","Coco");//...SPREAD(frutas es un arreglo)
fruta1: Naranja
fruta2: Manzana