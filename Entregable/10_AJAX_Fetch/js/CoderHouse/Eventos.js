


//////////////////////////////// Validar Inicio Session
//localStorage.clear()// - Solo para efectos de prueba de la funcionalidad. Para eliminar la variable
//sessionStorage.clear()// - Solo para efectos de prueba de la funcionalidad. Para eliminar la variable
let oUsuarioStorage
if( localStorage.getItem('oUsuario')){     
    oUsuarioStorage = JSON.parse( localStorage.getItem('oUsuario') )
}else{
    oUsuarioStorage = []
    localStorage.setItem('oUsuario',JSON.stringify(oUsuarioStorage))
}

let oUsuarioSession
if( sessionStorage.getItem('oUsuario')){     
    oUsuarioSession = JSON.parse( sessionStorage.getItem('oUsuario') )
}else{
    oUsuarioSession = []
    sessionStorage.setItem('oUsuario',JSON.stringify(oUsuarioSession))
}

//////////////////////////////// Eventos del modal : formUserNew - Registrar nuevo Usuario

let formUserNew_btnRegistrar = document.getElementById('formUserNew_btnRegistrar');
formUserNew_btnRegistrar.addEventListener('click',()=>{   
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
        // sessionStorage.clear()
        sessionStorage.removeItem('oUsuario')
        sessionStorage.setItem('oUsuario',JSON.stringify(usuarioActual))

        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">Felicidades ${usuarioActual?.nombre || 'Coder Pet Lover'} ya estas registrado con :</h6>
                <p class="card-text text-success">Email : ${email} </p>
            </div>
        </div>
        `;
        divUsuarioSinSession.innerHTML = ``
        divUsuarioConSession.innerHTML = `
            <li class="last" >
                <!-- Button trigger modal -->
                <a >${usuarioActual?.nombre || 'Coder Pet Lover'}</a>
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

//////////////////////////////// Eventos del modal : formUserNew - Registrar nuevo Usuario [Cerrar Formulario]
let formUserNew_btncerrar = document.getElementById('formUserNew_btnCerrar')
formUserNew_btncerrar.addEventListener('click',()=>{  
    let divMensaje = document.getElementById('divMensajeRegister');

    divMensaje.innerHTML =""
    document.getElementById('formUserNew_nombre').value = ""
    document.getElementById('formUserNew_email').value = ""
    document.getElementById('formUserNew_clave').value = ""    
    sessionStorage.removeItem('oUsuario')
})

//////////////////////////////// Evento encargado de Cerrar Session

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
    sessionStorage.removeItem('oUsuario')
    oUsuario = []
    crearDOMUsuarioInfo(oUsuario)
})

//////////////////////////////// Eventos del modal : formUser - encargado de autenticar al usuario del sistema tras ingresar los campos requeridos para iniciasr sesion ( email , clave )

let formUser_btnLogIn = document.getElementById('formUser_btnLogIn');
formUser_btnLogIn.addEventListener('click',()=>{   
    let email = document.getElementById('formUser_email').value
    let clave = document.getElementById('formUser_clave').value
    let divMensaje = document.getElementById('divMensajeLogIn');
    let divUsuarioSinSession = document.getElementById('usuarioSinSession');
    let divUsuarioConSession = document.getElementById('usuarioConSession');

    oUsuario = ValidarInicioSession(email,clave);

    if(oUsuario != ''  ){
        sessionStorage.setItem('oUsuario',JSON.stringify(oUsuario))

        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">Felicidades ${oUsuario?.nombre || 'Coder Pet Lovers'} , se ha iniciado tu session.  :</h6>
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
            document.getElementById('formUser_email').value = "";
            document.getElementById('formUser_clave').value = "";
            divMensaje.innerHTML = ``;
            $('#ModalLogIn').modal('hide');
         }, 1500);  
        
    }
    else{
        divMensaje.innerHTML = `
        <div class="card" style="width: 100%;">
            <div class="card-body">
                <h6 class="card-title">El Usuario No esta registrado o la clave es incorrecta, valide sus datos e ingrese de nuevo:</h6>
                <p class="card-text text-danger">Email : ${email} </p>
            </div>
        </div>
        `;
        isSession =  false;
        $('#ModalLogIn').modal('show')

    }
})

//////////////////////////////// Eventos del modal : formUser - : encargado de cerrar modal Iniciar Session  . Reinicia valores de controles existentes en el modal.
let formUser_btnCerrar = document.getElementById('formUser_btnCerrar')
formUser_btnCerrar.addEventListener('click',()=>{  
    let divMensaje = document.getElementById('divMensajeLogIn');

    divMensaje.innerHTML =""
    document.getElementById('formUser_email').value= ""
    document.getElementById('formUser_clave').value= ""
    sessionStorage.removeItem('oUsuario')
    $('#ModalLogIn').modal('hide')

})
