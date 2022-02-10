// CREAR UN ALGORITMO CON UN CONDICIONAL
// Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, 
// muestre un resultado.

// Formato: Página HTML y  código fuente en JavaScript en archivo .js vinculado al html.
// Sugerencia: Tener en cuenta que los valores obtenidos por prompt() son string, si se busca operar con números hay que parsearlos antes y si van a usar cadenas
//  recordar tener cuidado con mayúsculas y minúsculas en las comparaciones de igualdad. (Ej. “Hola” y “HOLA” no son iguales)

// >r> Consigna: Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.
// >>Aspectos a incluir en el entregable:
// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee instrucciones condicionales.
// >>Ejemplo:
// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.


let numeroRandomFloat1 = 0;
let numeroRandomFloat2 = 0;
let solicitarNumero = true;

do{
    numeroRandomFloat1 = parseFloat(prompt("Ingresar tu edad : ( solo numero de años )"));
    if(numeroRandomFloat1 >=1 && numeroRandomFloat1<=120){
        solicitarNumero = false;
    }
    else{
        alert('Ingresar una edad valida no puedes tener mas de 120 años.')
    }
}while(solicitarNumero)

solicitarNumero = true;

do{
    numeroRandomFloat2 = parseFloat(prompt("Ingresar tu numero favorito : ( del 0 al 9 )"));
    if(numeroRandomFloat2 >=0 && numeroRandomFloat2<=9){
        solicitarNumero = false;
    }
    else{
        alert('El numero que ingresaste no es valido , debes ingresar un numero entre 0 y 9') 
    }
}while(solicitarNumero)

//logica del algoritmo
function tuDiaDeSuerte(numeroRandomFloat){
    let numeroRandomInt = Math.round( numeroRandomFloat);
    if(numeroRandomInt <= 2) console.log('Tu dia de la suerte es :' ,'Lunes' );
    else if(numeroRandomInt <= 3) console.log('Tu dia de la suerte es :' , 'Martes');
    else if(numeroRandomInt <= 4) console.log('Tu dia de la suerte es :' , 'Miercoles');
    else if(numeroRandomInt <= 5) console.log('Tu dia de la suerte es :' , 'Jueves');
    else if(numeroRandomInt <= 6) console.log('Tu dia de la suerte es :' , 'Viernes');
    else if(numeroRandomInt <= 7) console.log('Tu dia de la suerte es :' , 'Sabado');
    else if(numeroRandomInt <= 8) console.log('Tu dia de la suerte es :' , 'Domingo');
    else console.log('Todos los dias son tu dia de la suerte');
}

function probabilidadDeGanarLoteria(numeroRandomFloat){
    const seed =0.0123
    probabilidadDeGanarLoteria = probabilidadRandom(seed,numeroRandomFloat)
    console.log('La probabilida de que ganas la loteria hoy es :', probabilidadDeGanarLoteria, '%')
}

function probabilidadRandom(seed,numeroRandomFloat)
{
    let numeroRandomFloatToFixed2A = parseFloat(Math.random().toFixed(2));
    let numeroRandomFloatToFixed2B = Number(Math.round(Math.random()+'e2')+'e-2'); 
    let probabilidadDeGanarLoteria = numeroRandomFloatToFixed2A * numeroRandomFloatToFixed2B /  (  seed * numeroRandomFloat  ) ; 
    return probabilidadDeGanarLoteria.toFixed(2);
}

// Impresion de resultado
probabilidadDeGanarLoteria(numeroRandomFloat1)
tuDiaDeSuerte(numeroRandomFloat2)


