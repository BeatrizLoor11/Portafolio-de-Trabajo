'use stict'
//ingrsar dos numeros mostrando la suceción de números y diciendo cual es impar
var numero1= parseInt(prompt("Introducir Numero INICIO:",0));
var numero2= parseInt(prompt("Introducir Numero FIN:",0));
document.write("<H3> del número: " + numero1 +" ,al número: "+ numero2 +"<H3>");
 //numero1%2 ==0.....numero1 dividido entre 2 residuo se valora, aqui cero residuo de division

if (numero1<=numero2) {
    while (numero1<=numero2) {
        if (numero1%2 ==0) {
            console.log(numero1 + " par");
            document.write(numero1 +" par <br/>");   
           }   
             numero1++;  
  }
} else if (numero1>=numero2) {
    while (numero1>=numero2) {
        if (numero1%2 ==0) {
            console.log(numero1 + " par");
            document.write(numero1 +" par <br/>");   
           }   
             numero1--;  
  }
} 
    
