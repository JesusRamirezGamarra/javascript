


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



let divDolar = document.getElementById('divCarousel_TC_fetch')
let divDolar_footer = document.getElementById('divCarousel_TC_fetch_footer')

// Funcion encargada de cargar un archivo JSON a traves de ASYNC await
// Informacion adiconal -> https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/?gclid=Cj0KCQjw0PWRBhDKARIsAPKHFGj2a64CTDkwBf4hMNZBr4qx0d9i6CLOcpSHFqVmmFPSffOl9du3NZAaAqM8EALw_wcB&gclsrc=aw.ds
async function cargarTipoCambio_Dolar() {
    let promesa = await fetch('https://criptoya.com/api/dolar')
    let TCJson = await promesa.json()
    return TCJson
}

// Funcion que crea el DOM que muestra informacin de Tipo de cambio en base a la informacion del API : https://criptoya.com/api/dolar
cargarTipoCambio_Dolar().then(data => {
    let {oficial, solidario, blue, ccb, ccl, mep,time} = data
    divDolar.innerHTML = `
    <div class="carousel-item active" data-bs-interval="1500"><p>Oficial : $ ${oficial}</p></div>
    <div class="carousel-item" data-bs-interval="1500"><p>Solidario : $ ${solidario}</p></div>
    <div class="carousel-item" data-bs-interval="1500"><p>Informal : $ ${blue}</p></div>
    <div class="carousel-item" data-bs-interval="1500"><p>Contado Bitcoin : $  ${ccb}</p></div>
    <div class="carousel-item" data-bs-interval="1500"><p>Contado Liquidación : $ ${ccl}</p></div>      
    <div class="carousel-item" data-bs-interval="1500"><p>Mep : $ ${mep}</p></div>   
    `
    //NO encontre en la documentacion algo referente al valor que envia en int para la propiedad time de esta API. Sin embargo note que de esta forma da la fecha.
    let Fecha = new Date(parseInt(time.toString() + '000'))
    divDolar_footer.innerHTML=`
    <div style="font-size: 9px"> Tipo de cambio en $. ARS </div>
    <div style="font-size: 9px">  ${Fecha} </div>
    `
})
.catch(error => console.error(error));


// funcion async para hacer await fetch del archivo producto.json
async function cargarProductos() {
    let promesa = await fetch('./json/producto.json')
    let productosJSON = await promesa.json()
    return productosJSON
}

// funcion encargada de la Carga de Productos - push sobre entiadad [] o Productos por cada item de producto.json
// Se agrega sobre el JSON el nombre del Objeto mediante la estructura { "producto" : [ { ...
cargarProductos().then( data => {
    oProductos = [];
    // Carga de productos en oProductos[] desde Producto.json
    data.producto.forEach((producto, indice) => {
        oProductos.push(new Producto(producto.idProducto,
                                producto.nombre,
                                producto.precio,
                                producto.precioOriginal,
                                producto.categoria,
                                producto.stock,
                                producto.img
            ))
    })

    let nroColumnas = 3
    let divlistadoProductos  = document.getElementById('divlistadoProductos');
    let divlistadoProductosCanasta  =  document.getElementById('divlistadoProductosCanasta')==null?`<div id="divlistadoProductosCanasta"  class="col-sm-6 col-md-6 col-lg-3">
                                                <div id="idPedidoInfo"  style="padding: 0px 0px 0px 0px; font-size: 12px;" >
                                                </div>		
                                                <div  style="text-align: center;">
                                                    <button id="btn_FinalizarPedido" class="dog_bt" style="width:100%;cursor:pointer;font-size: 24px;" >Finalizar Compra</button>
                                                </div>			
                                            </div> `:document.getElementById('divlistadoProductosCanasta');
    let NroProductos = oProductos.length;
    let NroProductosXColumna = parseInt(NroProductos/nroColumnas) + ( NroProductos % nroColumnas);
    let contador =1 ;
    let htmlColumna=``;
    let EsColumnaCompleta =true ;
    
    //DOM para Productos disponibles para la venta obtenidos desde oProductos
    oProductos.forEach((producto, indice) => {
        if(contador==1){
            htmlColumna +=`<div class="col-sm-6 col-md-6 col-lg-3">`
        }

        htmlColumna +=`
            <div>
                <div>
                    <img src="./images/Producto/${producto.img}" style="width: 225px;height: 300px;">
                </div>
                <h4>${producto.nombre}</h4>	
                <h6>Unidades Disponibles : <div id="stock_${producto.idProducto}">${producto.stock}</div></h6>	
                ${producto.precioOriginal == producto.precio ? `` : `<del><span style="color:red" >S/ ${producto.precioOriginal}</span></del>`}
                <span style="color:green;font-weight: bold;" >S/ ${producto.precio}</span>
                <div>
                    <input  type="number" id="Cantidad_${producto.idProducto}" value="0" style="width:60px" onchange="validarCantidad(this.value,'Agregar_${producto.idProducto}')" min="0" pattern="^[0-9]+" onpaste="return false;" onDrop="return false;" autocomplete="off" > 
                    <button type="button" id="Agregar_${producto.idProducto}" text="Agregar Carrito"  
                    style="cursor:pointer;" disabled>Agregar Carrito</button>
                </div>
            </div>
                `
        
        EsColumnaCompleta = ( contador ==  NroProductosXColumna ) ? false : true;
        contador++;
        if(!EsColumnaCompleta){
            htmlColumna +=`</div>`
            nroColumnas -=1;
            NroProductos -= NroProductosXColumna;
            contador = 1;
            NroProductosXColumna = parseInt(NroProductos/nroColumnas) + ( NroProductos % nroColumnas);
        }
   
    })

    divlistadoProductos.innerHTML = htmlColumna + divlistadoProductosCanasta.outerHTML;

    let btn_FinalizarPedido= document.getElementById('btn_FinalizarPedido');
        btn_FinalizarPedido.addEventListener('click',()=>{   
            new Pedido().ComprarPedido();
    })



    const containerShopPet = document.getElementById('divlistadoProductos');
    const buttons = containerShopPet.querySelectorAll('button[type="button"]');
    const inputs = containerShopPet.querySelectorAll('input[type="number"]');
    // Agregar evento Click para todo button[type="button"] existente en el div : divlistadoProductos , agrega productos al pedido.
    buttons.forEach(button => {
        if(button.id.includes('Agregar_')){
            let idProducto = button.id.replace('Agregar_','');
            let idCantidad = button.id.replace('Agregar_','Cantidad_');

            button.addEventListener('click', () => {
                new Producto().agregarProducto(idCantidad,idProducto);
            })     
        }
    });

    // Agregar evento Click para todo input[type="number"] existente en el div : divlistadoProductos , evita solicitar cantidades superiores al stock
    inputs.forEach(input => {

        if(input.id.includes('Cantidad_')){
            input.addEventListener('input', (e) => {
                let idProducto = input.id.replace('Cantidad_','');
                let btnAgregarProducto = 'Agregar_'+idProducto;
                let stockIdProducto = new Producto().obtenerProductoById(parseInt(idProducto)).stock;
                if(  stockIdProducto > e.target.value   ){
                    document.getElementById('stock_'+idProducto).innerHTML = stockIdProducto - e.target.value;
        
                }
                else if( stockIdProducto <= e.target.value) {
                    document.getElementById('stock_'+idProducto).innerHTML = 0;
                    document.getElementById('Cantidad_'+idProducto).value = stockIdProducto;
                }
                
   
            })     
        }
    });

})
