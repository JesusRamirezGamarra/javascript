//////////////// Ejercicio 0123

// Documentación sobre getElementById():
// https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
// Documentación sobre getElementsByClassName():
// https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName

////////////////////////////////Encuentra el elemento Parrafo1 :
//dopocument.getElementById('parrafo1')
let parrafoById = document.getElementById("parrafo1") // es indistinto accder usando comillas simples o dobles
console.log('document.getElementById')
console.log(parrafoById) //si existen mas de 1 elemento con el mismo id getElementById te devuelve el 1er elmento que encuentra

let parrafoByClassName = document.getElementsByClassName("parrafos") 
console.log('document.parrafoByClassName')
console.log(parrafoByClassName) // devuelve 1 HTML.collection(n) con todos los elementos que lo contienen
console.log(parrafoByClassName[0]) 
console.log(parrafoByClassName[0].children[0] )

let parrafoByTagName = document.getElementsByTagName("p") 
console.log('document.getElementsByTagName')
console.log(parrafoByTagName) // devuelve 1 HTML.collection(n) con todos los elementos que lo contienen
console.log(parrafoByTagName[0]) 

console.log('innerHTML')
parrafoById.innerHTML = "Hola Coders!"
parrafoByClassName[0].innerHTML += `<p class="colores" id="parrafo5">Hola Coders!!!</p>`;

console.log('Agregar nodo document.createElement <div><p>Buenas buenas, elemento agregado</p></div>')
let divGeneral = document.createElement('div')
divGeneral.innerHTML = `<p>Buenas buenas, elemento agregado</p>`
document.body.appendChild(divGeneral)


console.log('Eliminar nodo document.body.removeChild : <div><p>Buenas buenas, elemento agregado</p></div>')
document.body.removeChild(divGeneral)




class Persona {
    constructor(id,nombre, apellido, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    
}


const persona1 = new Persona(1,"Milton", "Salazar", "20")
const persona2 = new Persona(2,"Emiliano", "Grange", "21")
const persona3 = new Persona(3,"Juan", "Chapur", "22")
const persona4 = new Persona(4,"Matias", "Miro", "24")
let arrayPersonas = [persona1,persona2,persona3,persona4]

let divPersonas = document.getElementById('divPersonas')
// arrayPersonas.forEach(personaEnArray =>{
//     console.log(personaEnArray)
// })

arrayPersonas.forEach(personaEnArray =>{
    divPersonas.innerHTML += `
    <div id="persona_${personaEnArray.id}">
            <h1>${personaEnArray.nombre} ${personaEnArray.apellido} </h1>
            <p>Edad : ${personaEnArray.edad}</p>
    </div>            
    `
})