let btn_FinalizarPedido= document.getElementById('btn_FinalizarPedido');
btn_FinalizarPedido.addEventListener('click',()=>{   
    new Pedido().ComprarPedido();
})


const containerShopPet = document.getElementById('divlistadoProductos');
const buttons = containerShopPet.querySelectorAll('button[type="button"]')

buttons.forEach(button => {
    if(button.id != 'idBuscar'){
        let idProducto = button.id.replace('Agregar_0','');
        let idCantidad = button.id.replace('Agregar_0','Cantidad_0');

        button.addEventListener('click', () => {
            new Producto().agregarProducto(idCantidad,idProducto);
        })     
        // console.log(`se Creo evento click boton[idProducto=${idProducto}]`) 
    }
});

//////////////////////////////// Validar Inicio Session

localStorage.clear()// - Solo para efectos de prueba de la funcionalidad.
let oUsuarioSession
if( localStorage.getItem('oUsuario')){     
    oUsuarioSession = JSON.parse( localStorage.getItem('oUsuario') )
}else{
    oUsuarioSession = []
    localStorage.setItem('oUsuario',JSON.stringify(oUsuarioSession))

}

//////////////////////////////// Registrar nuevo Usuario

let formUserNew_btnRegistrar = document.getElementById('formUserNew_btnRegistrar');
formUserNew_btnRegistrar.addEventListener('click',()=>{   
    let nombre = document.getElementById('formUserNew_nombre').value
    let email = document.getElementById('formUserNew_email').value
    let clave = document.getElementById('formUserNew_clave').value
    let divMensaje = document.getElementById('divMensajeRegister');
    let divUsuarioSinSession = document.getElementById('usuarioSinSession');
    let divUsuarioConSession = document.getElementById('usuarioConSession');

    let oUsuario =  oUsuarioSession.find(   (oUsuario) => oUsuario.email === email)
    if(oUsuario == null ){
        const usuario = new Usuario(email,clave,nombre)
        oUsuarioSession.push(usuario)

        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">Felicidades ${nombre} ya estas registrado con :</h6>
                <p class="card-text text-success">Email : ${email} </p>
            </div>
         </div>
        `;

        divUsuarioSinSession.innerHTML = ``
        divUsuarioConSession.innerHTML = `
            <li class="last" >
                <!-- Button trigger modal -->
                <a >${nombre}</a>
                / 
                <a >Cerrar Session</a>								
            </li>
        `
        isSession =  true;
        setTimeout(function(){ 
            document.getElementById('formUserNew_nombre').value = ""
            document.getElementById('formUserNew_email').value = ""
            document.getElementById('formUserNew_clave').value = ""
            divMensaje.innerHTML = ``
            $('#ModalRegistrate').modal('hide')
        }, 1500);  
        
    }
    else{
     
        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">El Usuario ya esta registrado , ingrese otro :</h6>
                <p class="card-text text-danger">Email : ${email} </p>
            </div>
         </div>
        `;
        isSession =  false;

    }

    localStorage.setItem('oUsuario',JSON.stringify(oUsuarioSession))



})

let formUserNew_btncerrar = document.getElementById('formUserNew_btnCerrar')
formUserNew_btncerrar.addEventListener('click',()=>{  
    let nombre = document.getElementById('formUserNew_nombre').value
    let email = document.getElementById('formUserNew_email').value
    let clave = document.getElementById('formUserNew_clave').value
    let divMensaje = document.getElementById('divMensajeRegister');

    divMensaje.innerHTML =""
    nombre.value = ""
    email.value = ""
    clave.value = ""

})

//////////////////////////////// Cerrar Session

let usuarioConSession = document.getElementById('usuarioConSession');
usuarioConSession.addEventListener('click',()=>{
    usuarioConSession.innerHTML = ""
    let divUsuarioSinSession = document.getElementById('usuarioSinSession');
    divUsuarioSinSession.innerHTML = `
        <li class="last"  >
            <!-- Button trigger modal -->
            <a data-toggle="modal" data-target="#ModalLogIn">Log in </a>
            / 
            <a data-toggle="modal" data-target="#ModalRegistrate">Registrate</a>
        </li>
    `
    isSession =  false;
    

})




//////////////////////////////// Iniciar Session

let formLogIn = document.getElementById('formUser')

formLogIn.addEventListener('submit', (e) =>{
    e.preventDefault();


})

