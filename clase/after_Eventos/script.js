// let palabra = "Hola" 

// for (let i=0;i < palabra.length; i++){
//     console.log(palabra[i])
//     // if( palabra[i])=='o'){
//     //     document.body.style.display = "inline block";
//     // }
// }



let formPerrito = document.getElementById('formPerrito')
let botonPerrito = document.getElementById('botonMostrarPerritos')
let divPerrito = document.getElementById('divPerritos')
let arrayPerrito=[]
// como el comportamiento x defecto es el submit al servidor lo primero q hacemos es e.PreventDefault para cancelar ese evento x defecto.
// este comportamiento solo se realiza con Form.
formPerrito.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nombreI = document.getElementById('idName').value
    let razaI = document.getElementById('idRaza').value
    let edadI = document.getElementById('idEdad').value

    arrayPerrito.push({nombre:nombreI, raza:razaI, edad:edadI})
    formPerrito.reset();
})

botonPerrito.addEventListener('click', () =>{
    divPerrito.innerHTML = ""
    arrayPerrito.forEach((perritoEnArray,indice) =>{
        divPerrito.innerHTML += `
            <div id="perrito${indice}>
                <p>Nombre : ${perritoEnArray.nombre}</p>
                <p>Raza : ${perritoEnArray.raza}</p>
                <p>Edad : ${perritoEnArray.edad}</p>
            </div>
        `
    })
})