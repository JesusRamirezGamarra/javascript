/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
for(let i=1; i<=10; i++) {  //i = i + 1
    
    if(i == 5) {
        console.log("i es igual a 5")
        break
    }
    console.log(i)
}
for(let i=1; i<=10; i++) {  //i = i + 1
    
    if(i % 2 == 0) { // 2 % 2 == 0
        continue
    }
    console.log(i)
} */
/*
let repetir = true
let acumulador = 0
let contador = 0
while(repetir) { //repetir == true
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota //acumulador = acumulador + nota
    contador++ //contador = contador + 1
    let confirma = prompt("¿Desea ingresar otra nota mas?").toLowerCase()
    if(confirma == "no") { //NO No nO no
        repetir = false // break
    }
}
console.log(`El promedio de las notas es ${acumulador / contador}`)
let acumulador = 0
let contador = 0
let confirma
do {
    let nota = parseInt(prompt("Ingrese una nota"))
    acumulador += nota 
    contador++ 
    confirma = prompt("¿Desea ingresar otra nota mas?").toLowerCase()
} while(confirma != "no")
console.log(`El promedio de las notas es ${acumulador / contador}`)*/

let numero1
let numero2
let operador

do {
    numero1 = parseFloat(prompt("Ingrese un numero")) //
    numero2 = parseFloat(prompt("Ingrese otro numero")) //a
    operador = prompt("Ingrese una operacion (+,-,/,*)")
    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor ingresa un numero valido")
    }
} while(isNaN(numero1) || isNaN(numero2))

switch(operador) {
    case "+":
            alert(numero1 + numero2)
            break
    case "-":
            alert(numero1 - numero2)
            break
    case "/":
            alert(numero1 / numero2) 
            break
    case "*":
            alert(numero1 * numero2)
            break
    default: 
            alert("Operacion no valida")
            break
}