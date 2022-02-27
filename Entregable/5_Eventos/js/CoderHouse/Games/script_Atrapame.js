// ARMAR UN SIMULADOR INTERACTIVO, LA ESTRUCTURA FINAL DE TU PROYECTO INTEGRADOR

// Formato: Página HTML y código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “claseApellido”.

// Sugerencia: Algunos criterios a tener en cuenta para seleccionar un proceso a simular por primera vez son: 
// “ELEGIR UN PROCESO BIEN CONOCIDO” :  Si conozco una situación que implique adquirir cierta información y estoy bien familiarizado en “cómo se hace”, 
// es más fácil traducir la solución a un lenguaje de programación.
// “ELEGIR UN PROCESO QUE ME RESULTE INTERESANTE” : Si me siento motivado sobre el tema, es más llevadero enfrentar los retos de desarrollo e interpretación. 
// Antes de programar existe la etapa de relevamiento y análisis que me permite identificar cómo solucionar el proceso.

// >> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. 
// A partir de los ejemplos mostrados la primera clase, deberás:
// Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
// Armar la estructura HTML del proyecto.
// Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
// Utilizar funciones para realizar esas operaciones.
// >>Aspectos a incluir en el entregable:
// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador
// >>Ejemplo:
// Calcular costo total de productos y/o servicios seleccionados por el usuario.
// Calcular pagos en cuotas sobre un monto determinado.
// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
// Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
// Calcular edad promedio de personas registradas.
// Calcular nota final de alumnos ingresados.


console.log('1.ARMAR UN SIMULADOR INTERACTIVO, LA ESTRUCTURA FINAL DE TU PROYECTO INTEGRADOR')
let puntos = 0;
let puntosNivel = 15;  //cantidad de puntos para pasar de nivel
const tiempoNivel =20; //segundos
let tiempo = tiempoNivel;
let timerId =0;
document.getElementById('player').addEventListener("mouseover",sumarPuntos);


function sumarPuntos(){
    puntos++
    MostarCabecera(puntos,puntosNivel);
    moverObjeto();
    if(puntos == puntosNivel){
        clearInterval(timerId);
        timerId =0;
        // alert("Ganaste excelente , muy pronto mas niveles de dificultad")
        localStorage.setItem('Game',true)
        self.close();
    }
}

function MostarCabecera(puntos,puntosNivel){
    document.getElementById("puntaje").innerHTML=  "<br>Puntos: "   + puntos +"/" 
                                                                    + puntosNivel + "  </br>";
}

function moverObjeto(){
    let numero = probabilidadRandom()
    console.log(numero)
    document.getElementById("player").style.marginTop = probabilidadRandom() + "px";
    document.getElementById("player").style.marginLeft= probabilidadRandom() + "px";

}

function probabilidadRandom()
{
    let numeroRandomFloatToFixed = Math.random(); 
    numeroRandomFloatToFixed *= 500
    if( numeroRandomFloatToFixed>= 450)
        numeroRandomFloatToFixed = 450;
    
    // console.log(numeroRandomFloatToFixed.toFixed(0))
    return Math.round(numeroRandomFloatToFixed).toFixed(0);
}

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "Tiempo:" + tiempo ; 
    if(tiempo ==0 && puntos<puntosNivel){
        clearInterval(timerId);
        alert("continua intentando , muy pronto subiras lograsras obtener grandes descuentos!!! ")
        tiempo=tiempoNivel;
        puntos=0;
        timerId =0;
    }
    else if (tiempo<=0){
        tiempo=tiempoNivel;
        puntos=0;
        alert("continua intentando , muy pronto subiras lograsras obtener grandes descuentos!!! ")
        localStorage.setItem('Game',false);
        self.close();
    }

}

function iniciar(){
    // console.log(timerId)
    puntos = 0;
    puntosNivel = 15;  //cantidad de puntos para pasar de nivel
    tiempo = tiempoNivel;

    MostarCabecera(0);
    MostarCabecera(0,tiempoNivel);
    restarTiempo();
    if(timerId==0){
        timerId = setInterval(restarTiempo,1000);
    }
    

}
