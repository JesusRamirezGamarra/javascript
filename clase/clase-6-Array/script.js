

// // // // // Ejercicio 01
// const array0 =[]        //RECOMENDADO para que no exista cambio de estructura
// let array1 =[true,1,'HOLA',4]
// const array2 =[true,1,'HOLA',4,'false','chau']
// console.log (array2)
// console.log (array2[2])


// // for ( let i =0 ; i<5;i++){//No genera error al acceder a incide inexistente.
// //     console.log(i +' : '+array1[i]) //si se intenta acceder a un indice no existente te retorna undefined , No genera error
// // }

// array2[1] =999
// //array2 = array1 // no se puede hacer xq habria cambio de estructura de const a let

// for ( let i =0 ; i<= array2.length-1;i++){
//     console.log(i +' : '+array2[i])
// }

// console.log("Agregar Elemento")
// array2.unshift(10)  // Agrega elemento al inicio , no es ta usado xq altera indices
// array2.push(20)     // Agrega elemento al final
// // array2.push(prompt()) 

// for ( let i =0 ; i<= array2.length-1;i++){
//     console.log(i +' : '+array2[i])
// }

// console.log("Eliminar Elemento")
// array2.shift()
// array2.pop()

// for ( let i =0 ; i<= array2.length-1;i++){
//     console.log(i +' : '+array2[i])
// }


// // // // // Ejercicio 02

// let nombres = ['Francisco','Lucia','Lucas','Juan','Cristian']
// let nombres1 = nombres.splice(1,3)  // corta y retorna el array con elementos eliminados
// let nombres2 = ['Elmily','Emma']

// console.log(nombres)
// console.log(nombres1)
// nombres.splice(2, 0, 'drum');
// console.log(nombres)

// let Nombre3 = nombres1.concat(nombres2)
// let Nombre4 = nombres1 + nombres2
// console.log(Nombre3)
// console.log(Nombre4)


// // // // // // Ejercicio 03

let nombres1 = ['Francisco','Lucia','Lucas','Juan','Cristian']
let nombres2 = ['Elmily','Emma']

// console.log(nombres1)
// nombres3 = nombres1.splice(0, 3, 'drum');
// console.log(nombres3)
// nombres4 = nombres1.splice(1, 0, 'drum');
// console.log(nombres4)


let nombreAEliminar = prompt("Ingrese un nombre : ")
let indice = nombres1.findIndex(nombres => nombres == nombreAEliminar) // retorna -1 en caso no se encuentre ningun valor
if( indice != -1){
    nombres1.splice(indice,1,'Nemo') // elimina el elemento[indice] y Agrega 'Nemo' en su lugar
}
else{
    alert("Ingrese un nombre valido")
}
console.log(nombres1)




// // // // // Ejercicio 04

// let nombres1 = ['Francisco','Lucia','Lucas','Juan','Cristian']
// let nombres2 = ['Elmily','Emma']

// // console.log(nombres1)
// // nombres3 = nombres1.splice(0, 3, 'drum');
// // console.log(nombres3)
// // nombres4 = nombres1.splice(1, 0, 'drum');
// // console.log(nombres4)


// let nombreAEliminar = prompt("Ingrese un nombre : ")
// let indice = nombres1.findIndex(nombres => nombres == nombreAEliminar) // retorna -1 en caso no se encuentre ningun valor
// if( indice != -1){
//     nombres1.splice(indice,1,'Nemo') // elimina el elemento[indice] y Agrega 'Nemo' en su lugar
// }
// else{
//     alert("Ingrese un nombre valido")
// }
// console.log(nombres1)
// console.log(nombres1.reverse()) // cambia el orden de elementos ( inverso )

//inccludes ( verificar existencia)
//join


// // // // // Ejercicio 05

// class Persona{
//     constructor(nombre , apellido, edad){
//         this.nombre =nombre;
//         this.apellido =apellido;
//         this.edad = edad;
//     }
// }

// class Mascota{
//     constructor(nombre , raza, edad){
//         this.nombre =nombre;
//         // this.apellido =apellido;
//         this.edad = edad;
//         this.raza =raza;

//     }
// }

// const persona1 = new Persona("Francisco","Pugh",40)
// const persona2 = new Persona("Juan","Chapur",14)
// const persona3 = new Persona("Milton","Salazar",20)

// const mascota1 = new Mascota("Dishy","Perro",1)
// const mascota2 = new Mascota("Boby","Gato",2)

// let personas = [persona1,persona2,persona3]
// console.log(personas)

// for(let personaEnArray of personas){
//     console.log(personaEnArray)
// }

// let seresVivos = [persona1,persona2,persona3,mascota1,mascota2]
// console.log(seresVivos)

// let seresVivos2 = [mascota1 ,mascota2,persona1,persona2,persona3]
// console.log(seresVivos2)

// for(let elemento of seresVivos){
//     console.log(elemento)
// }


