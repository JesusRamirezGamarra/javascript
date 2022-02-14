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

const buttons=document.querySelectorAll('button')
const display=document.querySelector('#display')
const reto=document.querySelector('#reto')
const bitacora=document.querySelector('#bitacora')
let timerId =0;
const tiempoNivel =120; //segundos
let tiempo = tiempoNivel;
let puntaje = 10;

let nroJugadas = -1;
let nroJugadasMaximoSuma =0
let nroJugadasMaximoResta =0
let nroJugadasMaximoMultiplicacion =0
let nroJugadasMaximoDivision =0
let nroJugadasSuma =-1;
let nroJugadasResta =-1;
let nroJugadasMultiplicacion =-1;
let nroJugadasDivision =-1;

const calculator = {
    displayValue:'',
    firstOperand:null,
    waitingForSecondOperand:false,
    operator:null,
    retoValue:'',
    bitacoraValue:'',
}


function NumeroJugadasRandom()
{
    let numeroRandomFloatToFixed = Math.random(); 
    return Math.round(numeroRandomFloatToFixed *10).toFixed(0);
}

function NumeroRandom()
{
    let numeroRandomFloatToFixed;
    let numeroRandomFloatToFixedA = Math.random(); 
    let numeroRandomFloatToFixedB = Math.random(); 
    numeroRandomFloatToFixed = numeroRandomFloatToFixedA * numeroRandomFloatToFixedB *10000
    console.log(numeroRandomFloatToFixed.toFixed(0))
    return Math.round(numeroRandomFloatToFixed).toFixed(0);
}

function updateJugadas(operador){
    // nroJugadas++;
    if(operador=='+'){
        nroJugadasSuma++;
        document.getElementById("suma").innerHTML=  "[ + ] : "  + nroJugadasSuma +"/" 
                                                                + nroJugadasMaximoSuma ;  
    }else if(operador=='-'){
        nroJugadasResta++;
        document.getElementById("resta").innerHTML=  "[ - ] : " + nroJugadasResta +"/" 
                                                                + nroJugadasMaximoResta ;  
    }else if(operador=='*'){
        nroJugadasMultiplicacion++;
        document.getElementById("multiplicacion").innerHTML=  "[ * ] : "+ nroJugadasMultiplicacion +"/" 
                                                                        + nroJugadasMaximoMultiplicacion ;  
    }else if(operador=='/'){
        nroJugadasDivision++;
        document.getElementById("division").innerHTML=  "[ / ] : "  + nroJugadasDivision +"/" 
                                                                    + nroJugadasMaximoDivision ;  
    }

}


//funcion para actualizar las operaciones = potencial respuesta
function updateBitacora(){
    bitacora.value += calculator.bitacoraValue;
    calculator.bitacoraValue =''
}

//funcion para actualizar el reto = desafio
function updateReto(){
    reto.value = calculator.retoValue;
}

// funcion para actualizar el display = resultado
function updateDisplay(){
    display.value = calculator.displayValue;
    if( reto.value !='' && (display.value == reto.value)){
        clearInterval(timerId);
        timerId =0;
        alert('Felicitaciones lograste cumplir el reto')
    }
}

function iniciarEstados(){
    calculator.displayValue=''
    calculator.firstOperand=null
    calculator.waitingForSecondOperand=false
    calculator.operator=null
    reto.value = NumeroRandom();
    calculator.bitacoraValue=''
    bitacora.value =''
    nroJugadasMaximoSuma =NumeroJugadasRandom();
    updateJugadas('+')
    nroJugadasMaximoResta =NumeroJugadasRandom();
    updateJugadas('-')
    nroJugadasMaximoMultiplicacion =NumeroJugadasRandom();
    updateJugadas('*')
    nroJugadasMaximoDivision = NumeroJugadasRandom();
    updateJugadas('/')
    

}


function performcCalculation(operator,key){

    if( calculator.displayValue!='')
    {
        const value = parseFloat(calculator.displayValue)
        if(calculator.firstOperand == null){
                calculator.bitacoraValue = key;
                calculator.firstOperand = value;
        }
        //else if(calculator.operator){
        else if(key =='='){
            const result = calculator.operator(calculator.firstOperand,value);
            calculator.displayValue =result;
            calculator.firstOperand =result;
        }
        else {
            calculator.bitacoraValue = key;
        }
        calculator.waitingForSecondOperand =true;
        calculator.operator = operator;
        updateDisplay();
    }
    else{
        alert('Debe seleccionar un numero')
    }
}

buttons.forEach(button => {
    button.addEventListener('click',() =>{
            const key = button.innerText;        
        if(key=='Iniciar Coders'){
            calculator.displayValue = ''
            calculator.firstOperand = null
            calculator.waitingForSecondOperand = false
            calculator.operator = null
            calculator.bitacoraValue = ''
            calculator.retoValue = NumeroRandom();
        }
        else if(key == 'c'){
            calculator.displayValue = ''
            calculator.firstOperand = null
            calculator.waitingForSecondOperand = false
            calculator.operator = null
            calculator.bitacoraValue = ''
        }else if (  key == '='  ){
            performcCalculation(calculator.operator,key)
        }else if(   key =='+' ||
                    key =='*' ||
                    key =='-' ||
                    key =='/' ){
            updateJugadas(key)                        
            performcCalculation( new Function('a','b',`return a ${key} b`),key)
        // }else if(   key=='.'){
        //     if(!calculator.displayValue.includes('.')){
        //         calculator.displayValue += '.'
        //     }
        }else {
            calculator.bitacoraValue = key;
            if(calculator.waitingForSecondOperand){
                calculator.displayValue = key
                calculator.waitingForSecondOperand =false
            }
            else{
                calculator.displayValue +=key
            }   
        }
        updateBitacora();
        updateDisplay();
        
    })
})


function restarTiempo(){
    tiempo--;
    document.getElementById("puntaje").innerHTML = "<br># Jugadas Permitidas : " + puntaje; 
    document.getElementById("tiempo").innerHTML = "<br>Tiempo : " + tiempo ; 
    if(tiempo ==0 ){ //&& puntos<puntosNivel
        clearInterval(timerId);
        alert("continua intentando , muy pronto subiras de nivel")
        tiempo=tiempoNivel;
        puntos=0;
        timerId =0;
    }
    // else if (tiempo<=0){
    //     tiempo=tiempoNivel;
    //     puntos=0;
    // }

}


function iniciar(){   
    updateBitacora();
    updateReto();
    updateDisplay();
    iniciarEstados();
    if(timerId==0){
        timerId = setInterval(restarTiempo,1000);
    }
    
}