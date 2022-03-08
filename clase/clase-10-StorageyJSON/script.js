// localStorage.setItem("Saludo","HOLA");
// sessionStorage.setItem("Saludo","HOLA");

// console.log(    localStorage.getItem("Adios")   )
// console.log(    sessionStorage.getItem('Saludo')    )




localStorage.setItem("Saludo","HOLA");
localStorage.setItem("Uno","1");
localStorage.setItem("Despedida","Adios");


localStorage.removeItem("Uno");



class Persona{
    constructor(nombre , apellido, edad){
        this.nombre =nombre;
        this.apellido =apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco","Pugh",40)
const persona2 = new Persona("Juan","Chapur",14)
const persona3 = new Persona("Milton","Salazar",20)



for (let i=0;i<localStorage.length;i++){
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}

localStorage.setItem('persona',JSON.stringify(persona1))
//localStorage.clear()

// Ejemplo : clase persona en localStorage




let personas

if( localStorage.getItem('personas')){     // (if NULL ) == FALSE
    personas = JSON.parse( localStorage.getItem('personas') )
}else{
    personas = []
    localStorage.setItem('personas',JSON.stringify(personas))

}

// localStorage.setItem('personas',JSON.stringify(personas))


let form = document.getElementById('formUser')
let btnUser = document.getElementById('btnUser')
let divUser = document.getElementById('divUser')


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nombre = document.getElementById('name').value
    let apellido = document.getElementById('apellido').value
    let edad = document.getElementById('edad').value


    const persona = new Persona(nombre,apellido,edad)
    personas.push(persona)

    localStorage.setItem('personas',JSON.stringify(personas))
})


btnUser.addEventListener('click', () => {
    let arrayStorage = JSON.parse( localStorage.getItem('personas'))
    console.log(arrayStorage)
    divUser.innerHTML =""

    arrayStorage.forEach((personaEnArray,indice)=> {
        divUser.innerHTML += `
                <div class="card" style="width: 18rem;" ${indice}>
                    <div class="card-body">
                        <h5 class="card-title">Persona</h5>
                        <p class="card-text">Nombre : ${personaEnArray.nombre} </p>
                        <p class="card-text">Apellido : ${personaEnArray.apellido} </p>
                        <p class="card-text">Edad : ${personaEnArray.edad} </p>
                        <a href="#" class="btn btn-primary">GO [Para Despues]</a>
                    </div>
                </div>
        
        `
    })
})