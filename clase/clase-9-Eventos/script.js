// -------------- ACTIVIDAD 1 --------------
// Eventos : addEventListener click
// https://developer.mozilla.org/es/docs/Web/Events
let boton1 = document.getElementById('boton1');
boton1.addEventListener('click',()=>{   
            console.log('Diste Click con addEventListener')
})
//-------------- ACTIVIDAD 2 --------------//
// Eventos : onclick a traves de una propiedad de html
boton1.onclick = () =>{   console.log('Diste Click con onCLick ')}


// https://www.iteramos.com/pregunta/6823/addeventlistener-vs-onclick
// https://ichi.pro/es/cual-es-la-diferencia-entre-event-handlers-y-addeventlistener-en-js-165150920301620

// const button = document.querySelector(".btn")
// button.onclick = () => {
//   console.log("Hello!");
// };
// button.onclick = () => {
//   console.log("How are you?");
// };
// // This wil log "How are you?" to the console.
// De esa forma, el primero se sobrescribirá y cuando un usuario haga clic en el botón, se registrará "¿Cómo estás?" a la consola.


// const button = document.querySelector(".btn")
// button.addEventListener("click", event => {
//   console.log("Hello!");
// })
// button.addEventListener("click", event => {
//   console.log("How are you?");
// })
// // This wil log 
// // "Hello!"
// // "How are you?"
// // to the console
// De esta manera, cuando un usuario hace clic en él, activará ambas funciones y registrará “¡Hola! ¿Cómo estás?" a la consola.

// Eventos Practicos
//https://www.w3schools.com/js/js_events.asp  

//-------------- ACTIVIDAD 3 --------------//
// Eventos : para imput

let input1 = document.getElementById('input1');
input1.addEventListener('input',() => {
    console.log('escriste en el input1')    
})
// se imprime x cada tecla ingresasa
let input2 = document.getElementById('input2');
input2.addEventListener('input',() => {
    console.log(input2.value)    
})

// input type=color
let input3 = document.getElementById('input3');
input3.addEventListener('input',() => {
    console.log(input3.value)   
    document.body.style.backgroundColor = input3.value;
})



//-------------- ACTIVIDAD 4 --------------//
// Eventos para form.
// let formPersona =  document.getElementById('form');
// formPersona.addEventListener('submit',(e) =>{
//     console.log(e)    
//     e.preventDefault() // evita que se genere el comportamiento por defecto del evento
//     // form hace x defecto un submitted form data al server.
//     console.log(e)    
//     let nombre =document.getElementById('idnombre').value;
//     let apellido =document.getElementById('idapellido').value;
//     let edad =document.getElementById('idedad').value;

//     console.log(`${nombre} ${apellido} tienne : ${edad}`)
//     formPersona.reset()
// })


//-------------- ACTIVIDAD 5 --------------//
class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;
    }

}

let arrayPersonas =[]

// Eventos para form.
let formPersona =  document.getElementById('form');
let botonPersonas =  document.getElementById('botonPersonas');
let divPersonas =  document.getElementById('divPersonas');


formPersona.addEventListener('submit',(e) =>{
    console.log(e)    
    e.preventDefault() // evita que se genere el comportamiento por defecto del evento
    // form hace x defecto un submitted form data al server.
    console.log(e)    
    let nombre =document.getElementById('idnombre').value;
    let apellido =document.getElementById('idapellido').value;
    let edad =document.getElementById('idedad').value;

    const persona = new Persona(nombre,apellido,edad)
    arrayPersonas.push(persona);

    console.log(`${nombre} ${apellido} tienne : ${edad}`)
    console.log(arrayPersonas)
    formPersona.reset()
})

botonPersonas.addEventListener('dblclick',() =>{
    arrayPersonas.forEach((personaEnArray,indice)=>{
        divPersonas.innerHTML +=`        
        <div class="card" id="persona${indice}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Persona N°: ${indice + 1}</h5>
                <p class="card-text">Nombre: ${personaEnArray.nombre}</p>
                <p class="card-text">Apellido: ${personaEnArray.apellido}</p>
                <p class="card-text">Edad : ${personaEnArray.edad}</p>
                <button class="btn btn-dark">Eliminar Persona</button>
            </div>
        </div>
        `
    })
})


   // <div class="card" id="persona${indice}" style="width: 18rem;">
        //     <img src="..." class="card-img-top" alt="...">
        //     <div class="card-body">
        //         <h5 class="card-title">Persona Nro : ${indice+1}</h5>
        //         <p class="card-text">Nomnbre : ${personaEnArray.nombre}</p>
        //         <p class="card-text">Apellido :  ${personaEnArray.apellido}</p>
        //         <p class="card-text">Edad : ${personaEnArray.edad}</p>
        //         <button class ="btn btn-dark"> Eliminar Persona</button>
        //     </div>
        // </div>  
  


// <a href="#" class="btn btn-primary">Go somewhere</a>