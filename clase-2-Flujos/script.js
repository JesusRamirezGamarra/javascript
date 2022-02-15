/*
let numero = 3
if(numero == 2) {
    console.log("Numero igual a 2")
} else {
    console.log("Numero no es igual a 2")
}
if(NaN) {
    console.log("NaN")
}
*/

let numero = 2//parseInt(prompt("Ingrese un numero entero para saber si es par o impar"));
/*
if(numero % 2 == 0) { // 5 / 2 = 2.5   5 % 2 = 1
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}
if(numero % 2) { 
    console.log("El numero es impar")
} else {
    console.log("El numero es par")
}
if(0) {
    console.log("distinto de cero")
} else {
    console.log("0")
}
let deudas = parseInt(prompt("Ingrese unas deudas"))
let noHayDeudas = (deudas >= 0)
let hayDeudasMenores = (deudas >= -1000)
//> < >= <=
if(noHayDeudas) {
    console.log("No tengo deudas")
} else if(hayDeudasMenores) {
    console.log("deudas aceptable")
} else {
    console.log("Te fuiste de deudas")
}
let numero1 = 5
let numero2 = "5"
 
// == o != Analizo valores 
// === o !== Analizo valores y tipos 
if(numero1 !== numero2) {
    console.log("V")
} else {
    console.log("F")
}
*/
/*
let numero1 = 5
let numero2 = 15
if(numero1 == 10 && numero2 == 20) {
    console.log("V")
} else {
    console.log("F")
}
/*
    numero1     &&      numero2
      V         V           V
      V         F           F
      F         F           V
      F         F           F
*/
/*
if(numero1 == 10 || numero2 == 20) {
    console.log("V")
} else {
    console.log("F")
}
*/
/*
    numero1     ||      numero2
      V         V           V
      V         V           F
      F         V           V
      F         F           F
*/


/*
    !    expresion
    F       V
    V       F    
*/
/*
let numeroX = parseFloat(prompt("Ingrese un numero"))
//isNan(numeroX) retorna verdadero si numeroX es NaN, retorna falso si no loes
if(!(isNaN(numeroX))) {
    console.log("Numero valido")
} else {
    console.log("Numero no valido")
}
*/


let nota = parseInt(prompt("Ingrese una nota"))

if(nota >= 1 && nota <= 5) {
    console.log("Estas desaprobado/a")
} else if(nota === 6 || nota === 7) {
    console.log("Estas aprobado con nota de Bien")
} else if(nota === 8 || nota === 9) {
    console.log("Estas aprobado con nota de Muy Bien")
} else if(nota === 10) {
    console.log("Estas aprobado con nota de Excelente")
} else {
    console.log("Nota no valida")
}
© 2022 GitHub, Inc.
Terms
Privacy
Security