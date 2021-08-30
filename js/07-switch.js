'use strict'
//Switch
var edad= 40;
var imprime="";

switch (edad) {
    case 40:
        imprime= "Tienes vacaciones de 2 semanas";
        break;
    case 18:
        imprime="obten tu INE";
        break;
    default:
        imprime="tu edad es neutra";
        break;
}  
console.log(imprime);