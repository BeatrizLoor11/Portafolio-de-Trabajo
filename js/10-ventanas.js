'use strict'
//alerta
alert("es mi alerta");
alert("es mi texto");
//confirmación
var resultado= confirm("¿Desea continuar?");
console.log(resultado); //true btn aceptar, false btn cancelar
//Ingreso de datos
var mi_resultado= prompt("¿Qué edad tienes?", 18); //defecto 18 aparece recuadro
console.log(mi_resultado);
console.log(typeof mi_resultado);//string
//convierte de string a entero aquí
console.log(parseInt(mi_resultado));