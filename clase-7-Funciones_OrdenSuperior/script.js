// // // // // Ejercicio 01
// install : add on Error Lens
// console.log('Ejercicio 01')
// console.log( 5 + 5 )
// // console.log("5"+"5")
// // console.log("5a"+"a5")


// function A(x) {
//     function B(y) {
//       function C(z) {
//         console.log(x + y + z);
//       }
//       C(3);
//     }
//     B(2);
//   }
//   A(1); // registra 6 (1 + 2 + 3)


// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions  
// En este ejemplo, C accede a y de B y a x de A.
// Esto se puede hacer porque:
// B forma un cierre que incluye a A (es decir, B puede acceder a los argumentos y variables de A).
// C forma un cierre que incluye a B.
// Debido a que el cierre de B incluye a A, el cierre de C incluye a A, C puede acceder a los argumentos 
// y variables de B y de A. En otras palabras, C encadena los ámbitos de B y A, en ese orden.
// Sin embargo, lo contrario no es cierto. A no puede acceder a C, porque A no puede acceder a ningún argumento 
// o variable de B, del que C es una variable. Por lo tanto, C permanece privado solo para B.

// // // // // Ejercicio 02
console.log('Ejercicio 02')
class Persona{
    constructor(nombre, apellido, edad, sueldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

const persona1 = new Persona ("Emiliano","Grange",23,10000)
const persona2 = new Persona ("Juan","Chapur",18,8000)
const persona3 = new Persona ("Milton","Salazar",22,12000)
const persona4 = new Persona ("Matias","Miro",24,15000)

let personas = [persona1,persona2,persona3,persona4]

// forma01 for of
// for(let persona of personas){
//     console.log(persona)
// }
//persona es parametro , similar al let persona de ambito de la funcion =>
// forma01 forEach
// personas.forEach((persona)=>{
//     console.log(persona)
// })
//forma 02 forEach
personas.forEach(persona =>{
    console.log(persona)
})
// find : encuentra el primer obbjeto que cumpla con las condiciones
// de no existir elemento que cumpla cn las condiciones : undefined
// findIndex = find , solo que devuelve el indice
console.log('find()')
console.log(personas.find(    (persona)=> persona.nombre === "Milton")    )
console.log(personas.find(    (persona)=> persona.sueldo >= 1000)    )
console.log(personas.find(    (persona)=>   persona.sueldo >= 1000 && 
                                            persona.sueldo <= 10000
                                ))
console.log(personas.findIndex(    (persona)=>   persona.sueldo >= 1000 && 
                                persona.sueldo <= 10000
                    ))                                
console.log(personas.find(    (persona)=> persona.nombre === "Francisco")    )


// filter : retorna true si existe elementos que cumplan con la condicion
// de no existe elemento que cumpla con las condiciones : []
console.log(personas.filter(    (persona)=> persona.edad >18    ))
console.log(personas.filter(    (persona)=> persona.edad <18    ))

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// filter : retorna [] true/false segun los elementos que cumplan con la condicion
// de no existe elemento que cumpla con las condiciones : [] de false
console.log(personas.some(    (persona)=> persona.edad >18    ))
console.log(personas.some(    (persona)=> persona.edad <18    ))

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// map : retorna todos los elementos que cumplan con la condicion
// de no existe elemento que cumpla con las condiciones :false
// metodo comodin su implementacion indica que devolvera
console.log(personas.map(    (persona)=> persona.edad >20    ))
console.log(personas.map(    (persona)=> persona.edad <18    ))
console.log(personas.map(    (persona)=> `El sueldo es: ${persona.sueldo}`   ))
console.log(personas.map(    (persona)=>`${persona.nombre}` ))
console.log(personas.map(    (persona)=> persona.sueldo * 1.20 ))

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// sort : cambia el arreglo original.
// permite reemplazar y ordenar segun se requiera incluso caracteres
let numArray = [10,23,1,0,12,-12]
numArray.sort((a, b) => a - b); // For ascending sort
console.log(numArray) // [-12, 0, 1, 10, 12, 23]
numArray.sort((a, b) => b - a); // For descending sort
console.log(numArray) // [23, 12, 10, 1, 0, -12]
var points = [40, 100, 1, 5, 25, 10];
points.sort((a,b) => a-b)
console.log(points)


console.log(personas.sort(    (persona1,persona2)=> persona1.sueldo - persona2.sueldo ))
console.log(personas.sort(    (persona1,persona2)=> persona1.nombre - persona2.nombre ))

// const  generateRandomString = (num) => {
//     const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result1= Math.random().toString(36).substring(0,num);       

//     return result1;
// }

// console.log(generateRandomString(7));



const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;                         
}

const displayRandomString = () =>{
   let randomStringContainer = document.getElementById('random_string'); 
    randomStringContainer.innerHTML =  generateRandomString(8);    
}

console.log('aleatorio : ' ,generateRandomString(1));


// math : 

// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
console.log(    Math.cbrt(9) )
console.log(    Math.random() )
console.log(    parseInt( Math.random() *10)) // 0 y 9


// datetme
const hoy = new Date();
const fecha = new Date('07','03','2022') 
console.log(hoy);
console.log(fecha);
console.log(hoy-fecha);



