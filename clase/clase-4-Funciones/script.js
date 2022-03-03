

// // // // // Ejercicio 01
// function saludar(){
//     console.log("Hola Coders !")
// }

// saludar();
// saludar();
// saludar();
// saludar();


// // // // // // Ejercicio 02
// let numero1 = prompt("Ingresar Numero 1")
// let numero2 = prompt("Ingresar Numero 2")

// function suma(numero1,numero2){
//     console.log(numero1+numero2)
// }
// suma(5,10)

// function mostrarMensaje(mensaje){
//     console.log("Resultado :" + mensaje)
// }


// // // // // Ejercicio 03
// let numero1 = prompt("Ingresar Numero 1")
// let numero2 = prompt("Ingresar Numero 2")

// function suma(numero1,numero2){
//     resultado =numero1 + numero2;
//     mostrarMensaje(resultado)
// }
// suma(5,10)

// function mostrarMensaje(mensaje){
//     console.log("Resultado :" + mensaje)
// }


// // // // // Ejercicio 04
// function suma(numero1,numero2){
//     resultado =numero1 + numero2;
//     mostrarMensaje(resultado)
// }
// function mostrarMensaje(mensaje){
//     console.log("Resultado :" + mensaje)
// }

// let numero1 = parseFloat(prompt("Ingresar Numero 1"))
// let numero2 = parseFloat(prompt("Ingresar Numero 2"))
// suma(numero1,numero2)
// suma(numero1+ 10,numero2+ 10)
// suma(numero1+ 100,numero2+ 100)


// // // // // Ejercicio 05
// function suma(numero1,numero2){
//     return numero1 + numero2;    
// }
// function mostrarMensaje(mensaje){
//     console.log("Resultado :" + mensaje)
// }

// let numero1 = parseFloat(prompt("Ingresar Numero 1"))
// let numero2 = parseFloat(prompt("Ingresar Numero 2"))
// let resultado = suma(numero1,numero2)
// resultado = suma(10,20)
// mostrarMensaje(resultado)
// console.log(console.log(5+20)) // 1er Consolo.log retorna la suma (25) y el segundo retorna undefined.
// // suma(numero1+ 10,numero2+ 10)
// // suma(numero1+ 100,numero2+ 100)

// // // // // Ejercicio 06
// const IVA = 1.21
// function calcularIVA (producto){
//     const IVA = 1.30
//     return producto * IVA
// }
// console.log(IVA)
// console.log(calcularIVA(100))
// console.log(IVA)

// // // // // Ejercicio 07
// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// console.log(calculadora(10, 5, "*"));


// // // // // Ejercicio 08

// const suma = function (num1,num2){return num1+num2}
// const sumaFlecha =  (num1,num2) => num1+num2
// const OperacionFlecha =  (num1,num2) => num1+num2*5

// console.log(suma(5,10))
// console.log(sumaFlecha(5,10))
// console.log(OperacionFlecha(5,10))


// // // // // // Ejercicio 09



// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//             break;
//         case "-":
//             return primerNumero - segundoNumero;
//             break;
//         case "*":
//             return primerNumero * segundoNumero;
//             break;
//         case "/":
//             return primerNumero / segundoNumero;
//             break;
//         default:
//             return "Operacion No valida";
//             break;
//     }
// }
// let numero1 = parseFloat(prompt("Ingresar Numero 1"))
// let numero2 = parseFloat(prompt("Ingresar Numero 2"))
// let operador = prompt("Ingresar Operador")
// console.log(calculadora(numero1,numero2,operador))
// // console.log(calculadora(numero1,numero2,'+'))
// // console.log(calculadora(numero1,numero2,'-'))
// // console.log(calculadora(numero1,numero2,'*'))
// // console.log(calculadora(numero1,numero2,'/'))



// // // // // Ejercicio 10
function calculadora(primerNumero, segundoNumero, operacion) {
    if (operacion == "+") { return primerNumero + segundoNumero;}
    else if (operacion == "-") { return primerNumero - segundoNumero;}
    else if (operacion == "*") { return primerNumero * segundoNumero;}
    else if (operacion == "/") { return primerNumero / segundoNumero;}
    else return "Operacion No valida";
}
let numero1 = parseFloat(prompt("Ingresar Numero 1"))
let numero2 = parseFloat(prompt("Ingresar Numero 2"))
let operador = prompt("Ingresar Operador")
console.log(calculadora(numero1,numero2,operador))
// console.log(calculadora(numero1,numero2,'+'))
// console.log(calculadora(numero1,numero2,'-'))
// console.log(calculadora(numero1,numero2,'*'))
// console.log(calculadora(numero1,numero2,'/'))




// // // // // Ejercicio 11
function calculadora(primerNumero, segundoNumero, operacion) {
    if (operacion == "+") { console.log( primerNumero + segundoNumero);}
    else if (operacion == "-") { console.log( primerNumero - segundoNumero);}
    else if (operacion == "*") { console.log( primerNumero * segundoNumero);}
    else if (operacion == "/") { console.log( primerNumero / segundoNumero);}
    else console.log( "Operacion No valida");
}
let numero1 = parseFloat(prompt("Ingresar Numero 1"))
let numero2 = parseFloat(prompt("Ingresar Numero 2"))
let operador = prompt("Ingresar Operador")
console.log(calculadora(numero1,numero2,operador))
// console.log(calculadora(numero1,numero2,'+'))
// console.log(calculadora(numero1,numero2,'-'))
// console.log(calculadora(numero1,numero2,'*'))
// console.log(calculadora(numero1,numero2,'/'))

 
// // // // // Ejercicio 12
function calculadora(primerNumero, segundoNumero, operacion) {
    if (operacion == "+") { console.log( primerNumero + segundoNumero);}
    if (operacion == "-") { console.log( primerNumero - segundoNumero);}
    if (operacion == "*") { console.log( primerNumero * segundoNumero);}
    if (operacion == "/") { console.log( primerNumero / segundoNumero);}
    else console.log( "Operacion No valida");
}
let numero1 = parseFloat(prompt("Ingresar Numero 1"))
let numero2 = parseFloat(prompt("Ingresar Numero 2"))
let operador = prompt("Ingresar Operador")
console.log(calculadora(numero1,numero2,operador))
// console.log(calculadora(numero1,numero2,'+'))
// console.log(calculadora(numero1,numero2,'-'))
// console.log(calculadora(numero1,numero2,'*'))
// console.log(calculadora(numero1,numero2,'/'))