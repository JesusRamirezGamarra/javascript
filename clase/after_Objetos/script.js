// Para aquella situaciones en la que se espera se convierta el contenido y es que tiene sentido
console.log(Number(true))       // Convierte true a 1
console.log(Number({nombre:"Francisco", edad:30}))      // No puede devolver nada xq no tiene sentido la conversion del Objeto
// Para aquellas situaciones donde se ingresara un numero en formato texto
console.log(parseInt(true))     // devuelve NaN
console.log(parseFloat(true))   // devuelve NaN



// // // // // Ejercicio 01
Number("123")        //puedes enviar lo que sea . es una clase ( ver primer letra N)
parseFloat(123)    //enviar solo numeros , e suna funcion ( ver primera letra p)
parseInt()


const Animal1 = new Animal("Pikachu","Pokemon",10,1,"Amarillo",7)
const Animal2 = new Animal("Charizard","Pokemon",20,1,"naranja",5)
console.log(Animal1)
console.dir(Animal1)
console.dirxml(Animal1)

do{
Animal1.recibirDaño(Animal2.poder)
Animal1.aumentarNivel()

Animal2.recibirDaño(Animal1.poder)
Animal2.aumentarNivel()
}
while(Animal1.salud>0 && Animal2.salud >0 )

