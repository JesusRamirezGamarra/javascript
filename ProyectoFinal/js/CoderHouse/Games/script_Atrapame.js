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

// Parametros de configuracion general del sistema.
console.log('1.ARMAR UN SIMULADOR INTERACTIVO, LA ESTRUCTURA FINAL DE TU PROYECTO INTEGRADOR')
let puntos = 0;
let puntosNivel = 20;  //cantidad de puntos para pasar de nivel
const tiempoNivel =20; //segundos
let tiempo = tiempoNivel;
let timerId =0;
document.getElementById('player').addEventListener("mouseover",sumarPuntos);

//////////////////////////////// Funcion encargada de Sumar puntos cuandos se cumple la condicion
function sumarPuntos(){
    puntos++
    MostarCabecera(puntos,puntosNivel);
    moverObjeto();
    if(puntos == puntosNivel){
        localStorage.setItem('Game',true)
    }
}

//////////////////////////////// Funcion encargada de actualiza la bitacora de puntajes 
function MostarCabecera(puntos,puntosNivel){
    document.getElementById("puntaje").innerHTML=  "<br>Puntos: "   + puntos +"/" 
                                                                    + puntosNivel + "  </br>";
}

//////////////////////////////// Funcion en cargada de mover de forma aleatoria la bola a atrapar con el cursos del mouse.
function moverObjeto(){
    let numero = probabilidadRandom()
    console.log(numero)
    document.getElementById("player").style.marginTop = probabilidadRandom() + "px";
    document.getElementById("player").style.marginLeft= probabilidadRandom() + "px";

}

//////////////////////////////// Funcion que que genera el ramdom aleatorio para ser utilizado por funciones como : MoverObjeto
function probabilidadRandom()
{
    let numeroRandomFloatToFixed = Math.random(); 
    numeroRandomFloatToFixed *= 500
    if( numeroRandomFloatToFixed>= 450)
        numeroRandomFloatToFixed = 450;
    
    // console.log(numeroRandomFloatToFixed.toFixed(0))
    return Math.round(numeroRandomFloatToFixed).toFixed(0);
}
//////////////////////////////// Funcion encargada verificar el estado del juego (Gano o Perdio) en funcion a la disminucion del tiempo ( Timer)
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = "Tiempo:" + tiempo ; 
    if(tiempo >=0 && puntos>=puntosNivel){
        clearInterval(timerId);
        swal.fire("Felicidades", "Has ganado", "success");
        tiempo=tiempoNivel;
        puntos=0;
        timerId =0;
    }
    else if (tiempo<=0){
        tiempo=tiempoNivel;
        puntos=0;
        swal.fire("continua intentando , muy pronto subiras lograras obtener grandes descuentos!!! ")
        localStorage.setItem('Game',false);
        // self.close();
    }

}

//////////////////////////////// Funcion encargada de inicializar el juego.
function iniciar(){
    // console.log(timerId)
    localStorage.setItem('Game',false)
    puntos = 0;
    puntosNivel = 20;  //cantidad de puntos para pasar de nivel
    tiempo = tiempoNivel;

    MostarCabecera(0);
    MostarCabecera(0,tiempoNivel);
    restarTiempo();
    if(timerId==0){
        timerId = setInterval(restarTiempo,1000);
    }
    

}

iniciar()
