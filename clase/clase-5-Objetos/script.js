

// // // // // Ejercicio 01
// const persona0 = {
//     nombre: "Francisco",
//     apellido : "Pugh",
//     edad:45,
//     cuentaBancaria:45,
//     esProfe: true
 
// }

// let persona1 = {
//     nombre: "Francisco",
//     apellido : "Pugh",
//     edad:45,
//     cuentaBancaria:45,
//     esProfe: true
 
// }

// let persona2 = {
//     nombre: "Milton",
//     apellido : "Salazar",
//     edad:22,
//     cuentaBancaria:100,
//     esProfe: false,
//     domicilio : "calle falsa 123"
// }


// console.log(persona1)
// console.log(persona2)
// // Formas de mostrar contenido
// console.log(persona1.cuentaBancaria)
// console.log(persona1["cuentaBancaria"])
// // Modificar valores de cuenta bancaria
// persona1.cuentaBancaria = 40000;

// console.log(persona1)
// console.log(persona2)
// // no se puede xq persona0 es const ( su estructura no es modificable ni reempalble)
// //persona0 = persona2

// // // // // Ejercicio 02
// Convencion si es funcion consturctura en singular y Mayuscula
// function Persona(nombre, apellido,edad,dni){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.dni = dni;
// }

// const persona1 = new Persona("Lucio Jesus","Ramirez Gamarra",37,42499657)
// let persona2 = new Persona("Lucio Jesus","Ramirez Gamarra",37)

// console.log(persona1)
// console.log(persona2)

// // // // // // Ejercicio 03
// function Persona(nombre, apellido,edad,dni){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.dni = dni;
//     this.saluda = () => console.log("hola estoy saludando!")
//     this.saludar = () => console.log(`hola mi nombre es : ${this.nombre},estoy saludando!`)
//     this.mostrar = () => console.log(this)

// }

// const persona1 = new Persona("Jose Martin","Ramirez Gamarra",37,42499657)
// let persona2 = new Persona("Lucio Jesus","Ramirez Gamarra",37)

// console.log(persona1)
// console.log(persona2)
// console.dir(persona2)
// // Metodo es una funcion llamada desde un objeto
// persona1.saludar()
// persona1.mostrar()


// // // // // Ejercicio 04
class Persona{
    constructor(nombre, apellido,edad,dni,cuentaBancaria){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.cuentaBancaria= cuentaBancaria;
    // // // this.saluda = () => console.log("hola estoy saludando!")
    // // // this.saludar = () => console.log(`hola mi nombre es : ${this.nombre},estoy saludando!`)
    // // // this.mostrar = () => console.log(this)
    }

    saludar(){
        console.log(`hola mi nombre es : ${this.nombre},estoy saludando!`)        
    }

    mostrar(){
        console.log(this)
    }

    deposito(cantDeposito){
        this.cuentaBancaria += cantDeposito
    }
    depositoPromt(){
        let cantDeposito = parseFloat(prompt("Ingrese un deposito"))
        this.cuentaBancaria += cantDeposito
    }

    retiro(cantRetiro){
        if(this.cuentaBancaria-cantRetiro >=0){
            this.cuentaBancaria -= cantRetiro
        }
        else{
            console.log(`No tiene el saldo disponible necesario, su saldo actual es de : ${this.cuentaBancaria}`)
        }
    }
}

const persona1 = new Persona("Jose Martin","Ramirez Gamarra",37,42499657,300)
let persona2 = new Persona("Lucio Jesus","Ramirez Gamarra",37,42499657,300)

const persona3 = new Persona(
    prompt("Ingrese un nombre"),
    prompt("Ingrese un apellido"),
    parseInt( prompt("Ingrese la edad")),
    parseInt( prompt("Ingrese el DNI")),
    parseFloat( prompt("Ingrese el saldo de cuenta Bancaria"))
)

// console.log(persona1)
// console.log(persona2)
// console.dir(persona2)
// Metodo es una funcion llamada desde un objeto
persona1.saludar()
persona1.mostrar()
persona1.deposito(300)
persona1.mostrar()
persona1.deposito(500)
persona1.mostrar()
persona1.deposito(parseFloat(prompt("Ingrese un deposito")))
persona1.mostrar()
persona1.depositoPromt()
persona1.mostrar()
persona1.retiro(10000)
persona3.mostrar()
