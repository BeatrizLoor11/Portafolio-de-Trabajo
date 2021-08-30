'use strict'
//Transformaciones de textos p.2 
var numero=444;
var texto1="Bienvenido al curso de JavaScript del curso Victor Robles, curso";
var texto2="Es muy buen curso";
 
//Métodos de Busqueda
//var busqueda=texto1.indexOf("Bienvenido");//indexOf da la posición N#. de la palabra en el paréntesis primer palabra encontrada
var busqueda=texto1.lastIndexOf("curso");//lastIndexOf da la ultima posición N#. de la ultima palabra repetida en el paréntesis.
//var busqueda= texto1.search("curso");//parecido a indexOf  la primer palabra en caso de no encontrar la palabra saldra valor -1
//var busqueda= texto1.match("curso"); // nos da: ["curso", index: 14, input: "Bienvenido al curso de JavaScript del curso Victor Robles", groups: undefined]

//var busqueda= texto1.match(/curso/g);//imprime global: (2) ["curso", "curso"]0: "curso" 1: "curso"length: 2

//var busqueda= texto1.substr(14,5);//imprime caracteres de 14 cinco mas: curso
//var busqueda= texto1.charAt(14);//imprime solo un carácter: c

//var busqueda=texto1.includes("Victor");//true palabra exacta. existe o no existe mas exacto
//var busqueda=texto1.startsWith("Bienve");//resultado true Bienve, hace la busqueda solo al inicio del string, si busco Victor es false.
//var busqueda=texto1.endsWith("Victor");// resultado false Victor, Robles da true busqueda al final del string solo palabras correctas

console.log(busqueda);


//Transformaciones de textos p.1
/* var numero=444;
var texto1="Bienvenido al curso de JavaScript de Victor Robles";
var texto2="Es muy buen curso"; */

/* var dato=numero.toString();-.

    dato= texto1.toUpperCase();//mayusculas
    dato= texto1.toLowerCase();//minuscula

console.log(dato);

//Calcular longitud
var nombre="oso"; // caracteres length: 3
    nombre=[oso,puma]; lenght:2
console.log(nombre.length);//numero de elementos de letras y elementos de arreglo.//var nombre="" lenght: 0, var nombre="null" lenght: Error
//Concatenar
//var texto_total= texto1 +" "+texto2;
var texto_total= texto1.concat(" "+texto2); //concat o uso de + es lo mismo para unir variables.
console.log(texto_total); */