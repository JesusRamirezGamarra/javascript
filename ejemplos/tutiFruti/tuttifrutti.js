// JUGADA DEL USUARIO
let letra
let jugador1=prompt("¿Cuál es el nombre del Jugador 1?")
let nombres1
let animales1
let colores1
let lugares1
let comidas1
let objetos1
let puntosJugador1=0
let puntosTotalesJugador1=0

// JUGADA DEL USUARIO2 (LUEGO PUEDE SER UNA LISTA, PARA JUGAR CONTRA LA PC)
let jugador2=prompt("¿Cuál es el nombre del Jugador 2?")    
let nombres2
let animales2
let colores2
let lugares2
let comidas2
let objetos2
let puntosJugador2=0
let puntosTotalesJugador2=0

// CONSTANTES DE PUNTOS
const perfecto = 20
const bien = 10
const repetido = 5
const nada = 0

/* FALTA:
    - VALIDAR QUE LOS ELEMENTOS COMIENCEN CON LA LETRA ESCOGIDA
    - DAR UN TIEMPO PARA ACEPTAR EL ALERT, O SE ACEPTA AUTOMATICAMENTE
    - UNA LISTA DE OPCIONES PARA LA JUGADA DE MAQUINA */


function elegirLetra (){

    letra=(prompt("Elige una letra")).toLowerCase();
        
    if (isNaN(parseInt(letra)) && letra.length ==1) {
        alert(`¡Vamos a jugar con la "${letra}"!`) 
    } else {
        do {
            letra=(prompt("Elige una letra válida")).toLowerCase();
        } while (!isNaN(parseInt(letra)) || (letra.length !=1)) {
            alert(`¡Vamos a jugar con la "${letra}"!`)  // CON ESTO TENGO DUDAS, FUNCIONA, PERO NO SE SI ES VÁLIDO
        }
    }
}

function solicitarElementos(){
    alert (`¡Adelante ${jugador1}!`)
    nombres1 = prompt(`Pensemos un NOMBRE con "${letra}"`).toLowerCase()
    animales1 = prompt(`Pensemos un ANIMAL con "${letra}"`).toLowerCase()
    colores1 = prompt(`Pensemos un COLOR con "${letra}"`).toLowerCase()
    lugares1 = prompt(`Pensemos un LUGAR con "${letra}"`).toLowerCase()
    comidas1 = prompt(`Pensemos una COMIDA con "${letra}"`).toLowerCase()
    objetos1 = prompt(`Pensemos un OBJETO con "${letra}"`).toLowerCase()
    alert (`Ahora es turno de ${jugador2}`)
    nombres2 = prompt(`Pensemos un NOMBRE con "${letra}"`).toLowerCase()
    animales2 = prompt(`Pensemos un ANIMAL con "${letra}"`).toLowerCase()
    colores2 = prompt(`Pensemos un COLOR con "${letra}"`).toLowerCase()
    lugares2 = prompt(`Pensemos un LUGAR con "${letra}"`).toLowerCase()
    comidas2 = prompt(`Pensemos una COMIDA con "${letra}"`).toLowerCase()
    objetos2 = prompt(`Pensemos un OBJETO con "${letra}"`).toLowerCase()
}
function calculoDePuntos (elemento1,elemento2){
    if (elemento1==elemento2 && elemento1!=""){
        puntosJugador1+=repetido;
        puntosJugador2+=repetido;
        alert("¡Han puesto el mismo elemento! 5 puntos para cada uno")
    } else if (elemento1!="" && elemento2!=""){
        puntosJugador1+=bien;
        puntosJugador2+=bien;
        alert(`${jugador1} escribió "${elemento1}" y ${jugador2} escribió "${elemento2}". ¡10 puntos para cada uno!`)
    } else if (elemento1=="" && elemento2!=""){
        puntosJugador1+=nada;
        puntosJugador2+=perfecto;
        alert(`¡${jugador1} no escribió nada! ¡20 puntos para  ${jugador2}!`)
    }else if (elemento1!="" && elemento2==""){
        puntosJugador1+=perfecto;
        puntosJugador2+=nada;
        alert(`¡${jugador2} no escribió nada! ¡20 puntos para  ${jugador1}!`)
    } else {
        puntosJugador1+=nada;
        puntosJugador2+=nada;
        alert(`Ninguno de los dos escribió nada! Ningún punto para repartir`)

    }
}

function ganador (){
    alert ("Y el GANADOR ES...")
    if (puntosJugador1 > puntosJugador2){
        alert(`¡${jugador1}! ¡Con ${puntosJugador1} puntos!`);
    }else if (puntosJugador1 < puntosJugador2){
        alert(`¡${jugador2}! ¡Con ${puntosJugador2} puntos!`);
    }else {
        alert(`¡Es un empate, señoras y señores! ¡Con ${puntosJugador1} puntos! `)
    }
    puntosTotalesJugador1+=puntosJugador1
    puntosTotalesJugador2+=puntosJugador2
}

function jugar(){
    let confirma
    puntosJugador1=0
    puntosJugador2=0
    do{
        elegirLetra();
        solicitarElementos ();
        alert("¡Vamos a calcular los puntos!")
        alert("¡Comencemos con los NOMBRES!")
        calculoDePuntos(nombres1,nombres2)
        alert("¡Ahora los ANIMALES!")
        calculoDePuntos(animales1,animales2)
        alert("¡Y los COLORES!")
        calculoDePuntos(colores1,colores2)
        alert("¡Ahora los LUGARES!")
        calculoDePuntos(lugares1,lugares2)
        alert("Y las COMIDAS ¡Qué Rico!")
        calculoDePuntos(comidas1,comidas2)
        alert("¡Por último los OBJETOS!")
        calculoDePuntos(objetos1,objetos2)
        ganador()
        console.log(`¡${jugador1} sumó ${puntosJugador1} puntos! Tiene ${puntosTotalesJugador1} puntos totales`)
        console.log(`¡${jugador2} sumó ${puntosJugador2} puntos! Tiene ${puntosTotalesJugador2} puntos totales`)
        
        confirma=prompt("¿Desean seguir Jugando?").toLowerCase()
    
    }while (confirma!="no") {
        if (puntosTotalesJugador1 > puntosTotalesJugador2){
            alert(`¡El ganador de toda la partida es ${jugador1}! ¡Con ${puntosTotalesJugador1} puntos!`);
        }else if (puntosTotalesJugador1 < puntosTotalesJugador2){
            alert(`¡El ganador de toda la partida es ${jugador2}! ¡Con ${puntosTotalesJugador2} puntos!`);
        }else {
            alert(`¡Este juego ha resultado en un empate, señoras y señores! ¡Con ${puntosTotalesJugador1} puntos cada uno! `)
        }
    }
}

jugar()