// function contarhasta10(){
//     for (let i=0 ; i<11 ; i++){
//         console.log(i)
//     }
// }
// // contarhasta10()
// // console.log('Finaliza')

// setTimeout(() =>{
//     console.log("Hola , buen dia")
// },3000)

// setTimeout(() =>{
//     console.log("Adios , buen dia")
// },3000)

// setTimeout(() =>{
//     console.log("No me molestes")
// },6000)


// contarhasta10()

// Documentación sobre setTimeOut - w3:
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// Documentación sobre setTimeOut - mdn:
// https://developer.mozilla.org/es/docs/Web/API/setTimeout

// Explica async Javascript teoria
// https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
// Explica como se ejecuta procesos asyn en practica
// http://latentflip.com/loupe




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
const nuevaPromesa = () =>{
    return new Promise((resolve, reject) => {

    })
}


console.log(nuevaPromesa())

const nuevaPromesa2 = (valor) =>{
    return new Promise((resolve, reject) => {
        if(valor == true){
            resolve('Promesa aceptada')
        }
        else{
            resolve('Promesa rechazada')
        }
    })
}

console.log(nuevaPromesa2(false))
console.log(nuevaPromesa2(true))
