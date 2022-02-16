var nombre = 'dan';
let apellido = 'abramow';
const cuenta = '@gaearon'
console.log(`Mi Nombre es ${nombre} ${apellido} encuentrame en ${cuenta}`)

// ya no es necesario comprobar si variable tiene un valor antes de console.log
function saludaloA(nombre){
    console.log(nombre || 'coder')
}
console.log('Funcion tradicional')
saludaloA('dan')
saludaloA(null)         //Retorna coder
saludaloA(undefined)    //Retorna coder
saludaloA()             //Retorna coder
saludaloA('');          //Retorna coder
console.log('Funcion fechla =>')
const saludaloB = (nombre ='coder') =>{
    console.log(nombre )
}

saludaloB('dan')        //Retorna coder
saludaloB(null)         //retorn null
saludaloB(undefined)    //Retorna coder
saludaloB()             //Retorna coder
saludaloB('')           // No se invoca 