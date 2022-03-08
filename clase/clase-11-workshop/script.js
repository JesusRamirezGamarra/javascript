class User {
    cosntructor(nombre, email , password){
        nombre = this.nombre;
        email = this.email;
        password = this.password;
    }

}

let usuarios 
if(localStorage.getItem('Users')){
    usuarios = JSON.parse(localStorage.getItem('Users'));
}
else{
    usuarios = []
    localStorage.setItem('Users', JSON.stringify(usuarios))
}


let formUsers = document.getElementById('formUsers');
let botonUsers = document.getElementById('botonUsers');
let divUsers = document.getElementById('divUsers');

formUsers.addEventListener('submit',(e) =>{
    e.preventDefault();
    let nombre = document.getElementById('usernameID').value
    let email = document.getElementById('emailID').value
    let password = document.getElementById('passwordID').value

    const user = new User(nombre, email,password)
    usuarios.push(user)

    localStorage.setItem('Users',JSON.stringify(usuarios))
    formUsers.reset()


})
// otra forma Prefijo on  + Nombre del evento

botonUsers.addEventListener('click',() =>{
    divUsers.innerHTML ="";
    usuarios.forEach((usuariosEnArray, indice , array ) =>{
        console.log(array);
        divUsers.innerHTML + `
            <div id="usuario_"${indice} class="card text-white bg-primary mb-3" style="max-width: 20rem;margin=10px">
                <div class="card-header"><h4>Usuario : ${usuariosEnArray.nombre}}</h4></div>
                <div class="card-body">
                    <p class="card-title">Email : ${usuariosEnArray.email}</p>
                    <button id="boton_${indice}" class="btn btn-dark">Eliminar</button>
                </div>
            </div>
        `
    })
// }

    usuarios.forEach((usuariosEnArray, indice , array ) => {

        document.getElementById(`boton_${indice}`).addEventListener('click',() => {
            divUsers.removeChild(document.getElementById(`usuario_${indice}`))
            let indiceArray = usuarios.finIndex(user =>user.nombre == usuariosEnArray.nombre)
            usuarios.splice(indiceArray,1)
            console.log(usuarios)
            localStorage.setItem('Users', JSON.stringify(usuarios))

        })
    })
})

