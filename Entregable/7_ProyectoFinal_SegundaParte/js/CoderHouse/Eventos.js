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
    }
});

//////////////////////////////// Validar Inicio Session
//localStorage.clear()// - Solo para efectos de prueba de la funcionalidad.
let oUsuarioStorage
if( localStorage.getItem('oUsuario')){     
    oUsuarioStorage = JSON.parse( localStorage.getItem('oUsuario') )
}else{
    oUsuarioStorage = []
    localStorage.setItem('oUsuario',JSON.stringify(oUsuarioStorage))
}

//////////////////////////////// Registrar nuevo Usuario

let formUserNew_btnRegistrar = document.getElementById('formUserNew_btnRegistrar');
formUserNew_btnRegistrar.addEventListener('click',()=>{   
    sessionStorage.clear()
    let nombre = document.getElementById('formUserNew_nombre').value
    let email = document.getElementById('formUserNew_email').value
    let clave = document.getElementById('formUserNew_clave').value
    let divMensaje = document.getElementById('divMensajeRegister');
    let divUsuarioSinSession = document.getElementById('usuarioSinSession');
    let divUsuarioConSession = document.getElementById('usuarioConSession');

    oUsuario =  oUsuarioStorage.find(   (oUsuario) => oUsuario.email.toLowerCase() === email.toLowerCase())

    if(oUsuario == null ){
        const usuarioActual = new Usuario(email,clave,nombre)
        oUsuarioStorage.push(usuarioActual)
        localStorage.setItem('oUsuario',JSON.stringify(oUsuarioStorage))
        sessionStorage.setItem('oUsuario',JSON.stringify(usuarioActual))

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
        crearDOMUsuarioInfo(usuarioActual);
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
})

//////////////////////////////// Cerrar modal formUserNew_btnRegistrar
let formUserNew_btncerrar = document.getElementById('formUserNew_btnCerrar')
formUserNew_btncerrar.addEventListener('click',()=>{  
    let divMensaje = document.getElementById('divMensajeRegister');

    divMensaje.innerHTML =""
    document.getElementById('formUserNew_nombre').value = ""
    document.getElementById('formUserNew_email').value = ""
    document.getElementById('formUserNew_clave').value = ""    
    oUsuario = null;
    sessionStorage.setItem('oUsuario',JSON.stringify(oUsuario))

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

let formUser_btnLogIn = document.getElementById('formUser_btnLogIn');
formUser_btnLogIn.addEventListener('click',()=>{   
    sessionStorage.clear()
    let email = document.getElementById('formUser_email').value
    let clave = document.getElementById('formUser_clave').value
    let divMensaje = document.getElementById('divMensajeLogIn');
    let divUsuarioSinSession = document.getElementById('usuarioSinSession');
    let divUsuarioConSession = document.getElementById('usuarioConSession');

    oUsuario =  oUsuarioStorage.find(   (oUsuario) => oUsuario.email.toLowerCase() === email.toLowerCase() && oUsuario.clave.toLowerCase() === clave.toLowerCase())
    //oUsuario = validarInicioSession(email, clave)

    if(oUsuario != null ){
        sessionStorage.setItem('oUsuario',JSON.stringify(oUsuario))

        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">Felicidades ${oUsuario.nombre} , se ha iniciado tu session.  :</h6>
                <p class="card-text text-success">Email : ${oUsuario.email} </p>
            </div>
        </div>
        `;
        divUsuarioSinSession.innerHTML = ``
        divUsuarioConSession.innerHTML = `
            <li class="last" >
                <!-- Button trigger modal -->
                <a >${oUsuario.nombre}</a>
                / 
                <a >Cerrar Session</a>								
            </li>
        `
        isSession =  true;
        crearDOMUsuarioInfo(oUsuario);
        setTimeout(function(){ 
            document.getElementById('formUser_email').value = ""
            document.getElementById('formUser_clave').value = ""
            divMensaje.innerHTML = ``
            $('#ModalLogIn').modal('hide')
        }, 1500);  
        
        
    }
    else{
        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">El Usuario No esta registrado o la clave es incorrecte, valide sus datos e ingrese de nuevo:</h6>
                <p class="card-text text-danger">Email : ${email} </p>
            </div>
        </div>
        `;
        isSession =  false;

    }
})

//////////////////////////////// Cerrar modal formUser_btnRegistrar
let formUser_btnCerrar = document.getElementById('formUser_btnCerrar')
formUser_btnCerrar.addEventListener('click',()=>{  
    let divMensaje = document.getElementById('divMensajeLogIn');

    divMensaje.innerHTML =""
    document.getElementById('formUser_email').value= ""
    document.getElementById('formUser_clave').value= ""
    oUsuario = null;
    sessionStorage.setItem('oUsuario',JSON.stringify(oUsuario))

})
