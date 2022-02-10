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

console.log('2.CREAR UN ALGORITMO UTILIZANDO UN CICLO')
let marca  , modelo; 
let continuar = true;
const descuento = 20;
const titulo = "Venta de Automoviles CODER House sucursal PERU"

do{
    marca = (prompt(titulo + '.Nuestras Marcas recomendadas : \nFORD \nBMW \nKIA ',"Ingresar la Marca de vechiculo que desea comprar : "));
    // marca = 'ford'
    if( marca!=null && 
        ( marca.toLowerCase() == 'ford'|| marca.toLowerCase() == 'bmw'  || marca.toLowerCase() == 'toyota' || marca.toLowerCase() == 'kia') ){
        continuar = false;
    }
    else{
        alert('Lo sentimos , debe seleccionar una de marcas de los vehiculos que vendemos . Por favor ingrese otra marca para continuar.')
    } 
}while(continuar)


continuar = true;

do{
    // modelo = 'focus'
    modelo = (prompt(titulo + '.Nuestros modelos con promociones en este mes : \nFORD : Focus\nBMW : X3\nKIA : Optima','Ingresar el modelo que deseas adquirir  : '));
    if(    modelo!=null && 
            (   (marca.toLowerCase() == 'ford' && modelo.toLowerCase()=='focus')|| 
                (marca.toLowerCase()=='bmw' && modelo.toLowerCase() =='x3') || 
                (marca.toLowerCase() == 'kia' && modelo=='optima' ) 
            ) ){
        continuar = false;

        console.log(`Felicidades !! ud. cuenta con un descuento del : ${descuento} % `)
    }
    else{
        alert(`Lo sentimos , no tenemos estos modelos con promociones para ${marca.toUpperCase()}. Por favor ingrese otra marca para continuar.`)
    }
}while(continuar)






function probabilidadRandom(seed)
{
    let numeroRandomFloatToFixed2A = parseFloat(Math.random().toFixed(2));
    let numeroRandomFloatToFixed2B = Number(Math.round(Math.random()+'e2')+'e-2'); 
    let probabilidadDeGanarLoteria = numeroRandomFloatToFixed2A * numeroRandomFloatToFixed2B /  (  1/seed *numeroRandomFloatToFixed2B  )  ;
     if(probabilidadDeGanarLoteria >= 20)
         probabilidadDeGanarLoteria = 0
    return parseInt(probabilidadDeGanarLoteria);
}

function ruletaParaDescuentoAdicional(nroJugadas){
    
    for(nroJugadas =3 ;nroJugadas>0; nroJugadas--)
    {
        const seed = nroJugadas/0.0123
        let descuentoAdicional =  probabilidadRandom(seed)
        let descuentoTotal = descuento + descuentoAdicional;
        if(descuentoAdicional>0){
            console.log(`decuento adicional de :${descuentoAdicional}%, Ud. tiene un descuento total de : ${descuentoTotal}% `);
            nroJugadas = 0;
        }
       
    }
}

function agregarCarsTunning(){
    const carsTunning = ['Aros de 19 pulgadas', 'Moonroof', 'Turbos', 'Interior Cuero Nacional - Premium','Pantalla Tactil de 11 pulgadas'];
    let carsTunningSolicitado =[]
    //Con una función de devolución ES5
    carsTunning.forEach(function (element) {
        if(  confirm(`Deseas agregar : ${element}  a tu configuracion actual \nIngresar SI o NO`))
        {
            carsTunningSolicitado.push(element) 
        }
    });
    carsTunningSolicitado.forEach(element => console.log(element));
}

agregarCarsTunning()
ruletaParaDescuentoAdicional(3)    //tienes 3 oportunidades para obtener un beneficio adicional

