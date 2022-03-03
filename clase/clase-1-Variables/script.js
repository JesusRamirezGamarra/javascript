// Comentario una linea


/*
Comentario multi-linea
*/
/*
var nombre = "Francisco"
var edad = 40
console.log(nombre)
var nombre = 20
console.log(nombre)
console.log(edad) 
//let nombre_apellido = "Francisco"
let nombreApellido = "Francisco Pugh"
console.log(nombreApellido)
let nombreApellido = "Pepe Pepito"
console.log(nombreApellido)
*/

const IVA = 1.21
const IMPUESTO_PAIS = 1.30
const RETENCION_GANANCIAS = 1.35
let dolar = 109

let dolarSolidario = dolar * IMPUESTO_PAIS * RETENCION_GANANCIAS
//console.log(dolarSolidario)

/*
let numero1 = Number(prompt("Ingrese un numero"))
    Number("5") == 5
    Number("Hola") == NaN (Not a Number)
let numero2 = Number(prompt("Ingrese otro numero"))
let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))
*/

let numero1 = parseInt(prompt("Ingrese un numero"))
let numero2 = parseInt(prompt("Ingrese otro numero"))

alert(numero1)
alert(numero2)
alert(numero1 + numero2 )
//console.log("Fran" * "Pugh")