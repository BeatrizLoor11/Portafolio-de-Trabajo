'use strict'
var categorias=['Acción','Terror','Comedia'];
var peliculas=['La verdad duele','La vida es bella','Gran torino'];
//Array multidimencional en un arreglo se guardan otros arreglos
var cine=[categorias,peliculas];

//console.log(cine);
//Para buscar dentro del arreglo multi cine, "(categorias 1er arreglo) elemento Terror";
//console.log(cine[0][1]);//imprime: Terror
//console.log(cine[1][2]);//imprime: Gran torino

var elemento="";
do {
    elemento=prompt("Introduce new elemento");
    peliculas.push(elemento);//agrega elemento al array   

} while (elemento !="acabar");
peliculas.pop(); //elimina el ultimo elemento de un array
//peliculas.pop();
//peliculas[0]=undefined; //cambiamos el nombre del elemento en cero
 var indice = peliculas.indexOf('Gran torino');//buscamos el elemento del array
 if (indice > -1) {//-1 es no encontrado
     peliculas.splice(indice,1);//elimina: desde el indice + numero de elementos a borrar apartir de ese indice
 }
 var peliculas_string=peliculas.join();// array a variable..Todo a un String separado todo por comas, en un renglon
 
var cadena="text1, text2,text3";
var cadena_array=cadena.split(" ,");//introduce todo en un array (de variable a array)
console.log(cadena_array);

// **********
/* categorias.sort();
peliculas.reverse(); */
console.log(peliculas_string);
document.write("<h3>"+ categorias+"</h3>");//sort ordena abecedario
document.write("<h3>"+ peliculas+"</h3>");//invertido el ultimo el primero..ordenados