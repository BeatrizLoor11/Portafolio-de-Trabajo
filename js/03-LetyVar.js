'use strict'
/* Let hace a la variable local, por ejemplo if solo su valor sera ahi de Emmanuel 

/* Prueba con Var */
var numero= 40;
console.log(numero);  /*valor 40 */
if (true) {
    var numero=50;
    console.log(numero); /* valor 50 */
}
console.log(numero); /* valor 50 */

/* Prueba con Left */
var texto = "Pollita"
console.log(texto); /* valor Pollita */

if (true) {
    let texto="Emmanuel";
    console.log(texto); /* valor Beatra */
   // y=8;//Las variables no declaradas siempre son globales   
}
console.log(texto); /* valor Pollita */
//console.log(y); //8 imprime, pero anza un error de tipo "ReferenceError" en modo estricto ('use strict')