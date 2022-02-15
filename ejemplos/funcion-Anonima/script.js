let contador = 0;
let confirma;
let suma =0;
let promedio =0;

const sumaNotas = (nota)  => suma +=  nota;
const PromedioNotas = ( suma, contador) => promedio = suma / contador

do{
    var nota = parseInt(prompt("Ingresar la nota"));
    // var nota = 10;

    sumaNotas(nota)
    // sumaNotas(sumaNotas,nota)
    contador ++
    console.log('nota Nro '+ contador + ' : ' + nota)
    confirma = prompt ("Desea Ingresar otra nota?").toLowerCase()
    // confirma = 'no'
}while(confirma !="no")


console.log(sumaNotas)
console.log(PromedioNotas)


console.log('La suma es notas es  : ' + suma)
console.log('El Numero de notas es : ' + contador)

console.log("El promedio de las notas es : " + ( PromedioNotas(suma,contador)))
