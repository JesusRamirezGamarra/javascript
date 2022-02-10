// CREAR UN ALGORITMO UTILIZANDO UN CICLO
// Tomando como base los ejemplos anteriores de la estructura for, while y do...while, crear un algoritmo que repita un bloque de instrucciones.

// Formato: Página HTML y  código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “claseApellido”. 
// Sugerencia: Usamos la instrucción for para repetir un número fijo de veces. Mientras que usamos while cuando queremos repetir algo hasta que se deje de 
// cumplir una condición.

// >> Consigna: Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. 
// En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
// >>Aspectos a incluir en el entregable:
// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo
// en JavaScript que emplee bucles e instrucciones condicionales.

// >>Ejemplo:

// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
// Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.


let marca  , modelo; 
let continuar = true;
const descuento = 20;

do{
    // marca = (prompt("Ingresar la Marca de vechiculo que desea comprar : ( ford,bmw,toyota,kia )")).toLowerCase();
    marca = 'ford'
    if( marca == 'ford'|| marca == 'bmw'  || marca == 'toyota' || marca == 'kia' ){
        continuar = false;
    }
    else{
        alert('Lo sentimos , no tenemos estas marcas en venta . Por favor ingrese otra marca para continuar.')
    }
}while(continuar)

continuar = true;

do{
    // alert(marca)
    modelo = 'focus'
    // modelo = (prompt("Ingresar el modelo que deseas adquirir  : ")).toLowerCase();
    // alert(modelo)
    if((marca == 'ford' & modelo=='focus')|| (marca=='bmw' || marca =='x3') || (marca == 'kia' && modelo=='optima' ) ){
        continuar = false;

        console.log(`Felicidades !! uds cuenta con un descuento del : ${descuento} % `)
    }
    else{
        alert('Lo sentimos , no tenemos estos modelos con promociones . Por favor ingrese otra marca para continuar.')
    }
}while(continuar)






function probabilidadRandom(seed)
{
    let numeroRandomFloatToFixed2A = parseFloat(Math.random().toFixed(2));
    let numeroRandomFloatToFixed2B = Number(Math.round(Math.random()+'e2')+'e-2'); 
    const numeroMagico = seed
    let probabilidadDeGanarLoteria = numeroRandomFloatToFixed2A * numeroRandomFloatToFixed2B /  (  1/numeroMagico *numeroRandomFloatToFixed2B  ) /  ; 
    console.log(probabilidadDeGanarLoteria  )
    return probabilidadDeGanarLoteria.toFixed(2);
}


function Jugar(nroJugadas){
    
    for(nroJugadas =1 ;nroJugadas<=3; nroJugadas++)
    {
        const seed = nroJugadas/0.0123
        let descuentoAdicional =  probabilidadRandom(seed)
        console.log(descuentoAdicional)
        console.log(`decuento adicional de :${descuentoAdicional}%`)
    }
}



Jugar(3)