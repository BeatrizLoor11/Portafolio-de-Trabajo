'use strict'
//Array, Arreglos,Matrices

var nombre = "Victor Robles";//nombre.length cuenta normal del 1 al infinito

var nombres =["Victor Robles","Juan López","Manolo Garcia","Jose Martin",52, true];
var lenguajes= new Array("PHP","JS","Go","Java");

document.write("<H1> Los lenguajes son: </H1>");
document.write("<ul>");
/* for (var i=0; i< nombres.length; i++) {
    document.write("<li>" + nombres[i]+"</li>");   
} */

/* nombres.forEach((element ,i,arreglo )=> {
    console.log(arreglo);//variable original, elementos en renglon del arreglo
    document.write("<li>" + i +" "+ element+"</li>"); 
}); */

for (let lenguajeindex in lenguajes) {
    document.write("<li>" + lenguajeindex +" "+ lenguajes[lenguajeindex]+"</li>");   
}
document.write("</ul>");

//Busqueda
var busqueda = lenguajes.find(function (lenguaje) {
    return lenguaje == "PHP"
})
console.log(busqueda);

/* var elemento=parseInt(prompt("¿Qué elemento del array quieres?",0));
if (elemento >= nombres.length) {
    alert("Introduce un número menor a: " + nombres.length);
} else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
} */

/* alert(nombres[elemento]);
console.log(nombres[5]);
console.log(lenguajes.length);
console.log(lenguajes); */