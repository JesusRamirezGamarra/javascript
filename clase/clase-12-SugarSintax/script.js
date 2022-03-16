i = i =1 
i++


////////////////////////////////////////////////////////////////////////////
/// Operador Ternario
////////////////////////////////////////////////////////////////////////////
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
console.log('---')
console.log('Operador Ternario')
console.log('---')

let numero = 20
if(numero == 20){
    console.log('Numero 20')
}
else {
    console.log('No es Numero 20')
}


(numero == 2) ? Console.log('Numero 20'): console.log('No es Numero 20')
// (numero == 2) ? Console.log('Numero 20'): (numero == 30) ? Console.log('Numero 30') : console.log('No es Numero 20') 





let aN = 11
let numeroObtenido = aN == 5 ? 'Cinco' :
                        aN == 7 ? 'Siete':
                        aN == 11 ? 'Once':
                        aN == 15 ? 'Quince':
                     'Otro Número';

 console.log( numeroObtenido );


let numero_ = 20
let n = numero_ == 20 ? 'Numero 20' :
        numero_ == 30 ? 'Numero 30':
        numero_ == 11 ? 'Once':
        numero_ == 15 ? 'Quince':
        'Otro Número';

console.log( n );


////////////////////////////////////////////////////////////////////////////
/// nullish
////////////////////////////////////////////////////////////////////////////
https://es.javascript.info/nullish-coalescing-operator
console.log('---')
console.log('nullish  ?? ')
console.log('---')

console.log(0?? "nullish")
console.log("nullish" ?? null)
// Nullish coalescing solo toma como falso 2 valores, undefined y null.


// Asignar height=100, si height es null o undefined
let height 
console.log(height)
height= height ?? 100;
console.log(height)


NaN ? console .log('V'):console.log('f')
console.log("nullish" ?? NaN)

function obtenerDatosStroage(){
    const listado = JSON.parse(localStorage.getItem('Listado'))
    return listado ?? []        // si litado existente en Storage es null entonces devuelve []
    
}

let array = obtenerDatosStroage()
console.log(array)


const objeto = undefined
// console.log(objeto.nombre || 'Propiedad no disponible')
console.log(objeto?.nombre || 'Propiedad no disponible')        // Condicional si el Objeto es null o undefined


////////////////////////////////////////////////////////////////////////////
/// Destructuracion
////////////////////////////////////////////////////////////////////////////
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
console.log('---')
console.log('Destructuracion  {}= ')
console.log('---')

const persona = {
    nC : "Pablo",
    aC : "Perez",
    dC : 35 ,
    direccion : {
        calle : 'Falsa',
        numero : 123
    }
}

const persona2 = {
    nC : "Martin",
    aC : "Perez",
    dC : 35 ,
    direccion : {
        calle : 'Falsa',
        numero : 123
    }
}


const persona3 = {
    nC : "Rosa",
    aC : "Perez",
    dC : 35 ,
    direccion : {
        calle : 'Falsa',
        numero : 123
    }
}


const persona4 = {
    nC : "Jesus",
    aC : "Perez",
    dC : 35 ,
    direccion : {
        calle : 'Falsa',
        numero : 123
    }
}



let {nC : nombre,aC : apellido,dC:direccion} = persona
console.log(nombre)
console.log(apellido)
console.log(direccion)     // Alias  Propiedad:Alias

let {calle , numero : nU} = direccion
console.log(`${calle} ${nU}` )     // Alias  Propiedad:Alias



console.log('---')
console.log('Destructuracion  function ')
console.log('---')


// function desTructuracionObjeto (obj){
//     let{nc:nombre, aC:apellido,dC:direccion} = obj
//     let{nc:calle, aC:numero} = direccion
//     // console.log(`${},${},${}`)
//     console.log(`${nombre},${apellido},${direccion},${calle},${numero}`)
// }


function desTructuracionObjeto ({nC:nombre , aC:apellido , dC:direccion}){
    // let{nc:nombre, aC:apellido,dC:direccion} = obj
    let{nc:calle, aC:numero} = direccion
    // console.log(`${},${},${}`)
    console.log(`${nombre},${apellido},${direccion},${calle},${numero}`)
}
function desTructuracionObjetoV2 ({ aC:apellido , dC:direccion}){
    // let{nc:nombre, aC:apellido,dC:direccion} = obj
    let{nc:calle, aC:numero} = direccion
    // console.log(`${},${},${}`)
    console.log(`${apellido},${direccion},${calle},${numero}`)
}

desTructuracionObjeto ( persona)
desTructuracionObjetoV2 ( persona)




let arrayPersonas = [persona,persona2,persona3,persona4]
console.log ('const [a,b,c,d,e] = arrayPersonas')
const [a,b,c,d,e] = arrayPersonas
console.log(a,b)
console.log(a,b,c,d,e) // e muestra undefined 

console.log ('const [ , ,cM,dM] = arrayPersonas')
const [ , ,cM,dM] = arrayPersonas
console.log(cM,dM)


console.log ('Spead() ...arrayPersonas')
console.log(...arrayPersonas)

console.log ('Spead() ... const [ aX,bX, ...x] = arrayPersonas')
const [ aX,bX, ...x] = arrayPersonas
console.log(aX,bX)
console.log(x)

console.log ('Spead() ... Math.max(...arrayNumeros)')
let arrayNumeros = [5,7,8,9,2,34,324,2133,44,2,4]
console.log(Math.max(...arrayNumeros))


console.log ('Spead() ... const persona5 = { ...persona4,')
const persona5 = {
    ...persona4,
    dni: 121212,
    estadoCivil :"soltero"
}
console.log (persona5)



let numeros = [1,2,3,4,5,6]

const sumar = (...numeros) => {
    return numeros.reduce((acc,n)=> acc  + n,'0,')
}
console.log(sumar(numeros))

// console.log('---')
// console.log('Destructuracion  ... ')
// console.log('---')

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20


// // Propuesta de etapa 4 (terminada)
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}


// let aL ,bL,cL
// function uglyAPI() { return [1, 2, 3]; }
// [ aL, bL, cL] = uglyAPI();