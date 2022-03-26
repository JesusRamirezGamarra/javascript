

//////////////////////////////// Funcion ValidarInicioSession : retorna OUsuario de existir en el sessionStorage 
function ValidarInicioSession(email,clave){
    
    let oUsuario = JSON.parse( localStorage.getItem('oUsuario'))
    let oUsuarioSession = ( oUsuario != '[]' ) ? (oUsuario.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.clave.toLowerCase() === clave.toLowerCase())) : null;
    return oUsuarioSession ??[]
}

//////////////////////////////// Funcion validarCantidad : encarga de Validar la informacion de cantidad de producto a ser comprados por el usuario ( formato , tipo ,min )
function validarCantidad(value,btnAgregarProducto) {
    if(parseInt(value) <= 0 ){
        document.getElementById(btnAgregarProducto).disabled = true;
        if(parseInt(value) == 0 ){
            swal(`El numero ingresado : ${value}, debe ser mayor o igual a 1 Unidad.`); // Intensionalmente mostramos un mensaje solo en el caso de valores == 0 , si bien podemos restringir el min en el contorl imput dejamos esta validacion y alert 
        }
    }else{
        document.getElementById(btnAgregarProducto).disabled = false;
    }

}
/////////////////////////////// Funcion que simula fecha una fecha con x dias adicionales, se utiliza en la notificacion de fecha de entrega
function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
 }
//////////////////////////////// Funcion que a se encarga de abrir un PopUp para mostrar un juego en caso de elegir jugar x un descuento adicional.
function popUp(URL) {
    window.open(URL, 'Coder Game', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=no,resizable=1,width=500,height=800,left = 390,top = 50');
}

//////////////////////////////// Funcion encargada de obtener un % random para un descuento adicional.
function probabilidadRandom()
{
    let seed  = 10;
    let numeroRandomFloatToFixed2A = parseFloat(Math.random().toFixed(2));
    let numeroRandomFloatToFixed2B = Number(Math.round(Math.random()+'e2')+'e-2'); 
    let decuentoAdicional = numeroRandomFloatToFixed2A * numeroRandomFloatToFixed2B /  (  1/seed *numeroRandomFloatToFixed2B  )  ;
    decuentoAdicional= (decuentoAdicional > 20 ) ? 20: (decuentoAdicional<=5) ? 5 : decuentoAdicional 
    return parseInt(decuentoAdicional);
}

////////////////////////////////Funcion encargada de Agregar x DOM el nombre del Usuario
function crearDOMUsuarioInfo(oUsuario){
    let parrafoById = document.getElementById("idUsuarioInfo") ;
    let NombreUsuario =  (oUsuario=='') ? 'Bienvenido': (oUsuario?.nombre || 'Coder Pet Lovers');
    parrafoById.innerHTML = `<div id="idUsuarioInfoNombre" class="usuario_titulo">
                                <span> ${NombreUsuario} </span><br>
                            </div>`
}

////////////////////////////////Funcion encargada de Agregar x DOM el precio total del carrito de compra
 // <span class="precio_titulo"> Total :  150.45 S/.(PEN)  </span>
function crearDOMUsuarioInfoPrecio(oPedidosActual){

    let total = 0;
    
    oPedidosActual.forEach((item, index)=>{
        total += item.subTotal;
    })
    let parrafoById = document.getElementById("idUsuarioInfoPrecioTotal")
    if( parrafoById == null){
        parrafoById = document.getElementById("idUsuarioInfoNombre") ;
        parrafoById.innerHTML += `<span id="idUsuarioInfoPrecioTotal" class="precio_titulo"> Total :  ${parseFloat(total.toFixed(2))} ${moneda} </span>`
    }
    else {
        parrafoById.innerHTML = `<span id="idUsuarioInfoPrecioTotal" class="precio_titulo"> Total :  ${parseFloat(total.toFixed(2))} ${moneda} </span>`
    }
}

////////////////////////////////Funcion encargada de eliminar contenido de DOM para getElementById =idUsuarioInfo
function removeDOMUsuarioInfo(){
    let parrafoById = document.getElementById("idUsuarioInfo") ;
    parrafoById.innerHTML = '';
}

////////////////////////////////Funcion encargada de eliminar pedido resumen
function removeDOMPedido(){
    // Se implementa un bucle a drede para poner en practica el recorriro y eliminado x elemento
    let parrafoById = document.getElementById("idPedidoInfo");
    while (parrafoById.firstChild) {
        parrafoById.removeChild(parrafoById.firstChild);
    }


}

////////////////////////////////Funcion encargada de Crear el contenido x Producto existente en la Bolsa de Pedido
function crearDOMPedido(oPedidos){
    let parrafoById = document.getElementById("idPedidoInfo") ;
    parrafoById.innerHTML=``
    oPedidos.forEach(opedidoEnArray =>{
        let subTotal = parseFloat((opedidoEnArray.cantidad * opedidoEnArray.precioUnitario).toFixed(2))
        parrafoById.innerHTML += `
        <div id="idProducto_${opedidoEnArray.idProducto}" class="row">
            <div class="col-12" style="text-align: center;">
                <hr>
                <h4>${opedidoEnArray.nombre}</h4>
                <button type="button" id="Eliminar_0${opedidoEnArray.idProducto}" text="Eliminar"  style="cursor:pointer;" 
                onclick="new Pedido().eliminarPedido(${opedidoEnArray.idProducto});" 
                >Eliminar <img src="./images/btnEliminar.png"></button>
            </div>
            <div class="col-7" style="text-align: right;">
                <span >Precio: (S/.)</span>
            </div>
            <div class="col-5">
                <span style="color:green;font-weight: bold;" >${opedidoEnArray.precioUnitario}</span>
                <del><span style="color:red" > (${opedidoEnArray.precioUnitarioOriginal})</span></del>	
            </div>
            <div class="col-7" style="text-align: right;">
                <span >Unidades: </span>
            </div>
            <div class="col-5">
                <span >${opedidoEnArray.cantidad} </span>
            </div>							
            <div class="col-7" style="text-align: right;">
                <span >Sub Total: (S/.)</span>
            </div>
            <div class="col-5">
                <span >${subTotal}</span>
            </div>	
        </div>            
        `

        
    })   
    

    
    let total = 0;
    
    oPedidos.forEach((item, index)=>{
        total += item.subTotal;
    })
    crearDOMPedidoTotal(total.toFixed(2),0,0,0)

}

////////////////////////////////Funcion encargada de Crear el total de la bolsa de pedido
function crearDOMPedidoTotal(total , descuento , montoDescuento , totalConDescuento){
    let parrafoById = document.getElementById("idPedidoInfo") ;
    let mensaje = 
        `<div id="idProducto_total" class="row">
            <div class="col-12 total_titulo" >
                <strong>Total Final</strong>
            </div>
            <div class="col-7" style="text-align: right;">
                <span >Precio: (S/.)</span>
            </div>
            <div class="col-5">
                <span style="color:green;font-weight: bold;" > ${total}</span>
            </div>
        `
    if(descuento != 0){
    mensaje += `
        <div class="col-7" style="text-align: right;">
            <span >Descuento: (${descuento}%)</span>
        </div>
        <div class="col-5">
            <span style="color:green;font-weight: bold;" >67.00</span>
            <del><span style="color:red" > (${montoDescuento})</span></del>	
        </div>	

        <div class="col-7" style="text-align: right;">
            <span >Monto a Pagar: (S/.)</span>
        </div>
        <div class="col-5">
            <span style="color:green;font-weight: bold;" >${totalConDescuento}</span>
        </div>														
    `
    }
    
    mensaje += `
        <div class="col-12" style="text-align: center;">
            <hr>	
        </div>        
    </div>	
    `     

    parrafoById.innerHTML += mensaje
}





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
                    <input  type="number" id="Cantidad_${producto.idProducto}" value="0" style="width:60px" onchange="validarCantidad(this.value,'Agregar_${producto.idProducto}')" min="1" pattern="^[0-9]+" onpaste="return false;" onDrop="return false;" autocomplete="off" > 
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
    // Agregar un evento Click para todo button[type="button"] existente en el div : divlistadoProductos
    buttons.forEach(button => {
        if(button.id.includes('Agregar_')){
            let idProducto = button.id.replace('Agregar_','');
            let idCantidad = button.id.replace('Agregar_','Cantidad_');

            button.addEventListener('click', () => {
                new Producto().agregarProducto(idCantidad,idProducto);
            })     
        }
    });

    // Agregar un evento Click para todo input[type="number"] existente en el div : divlistadoProductos
    inputs.forEach(input => {

        if(input.id.includes('Cantidad_')){
            input.addEventListener('input', (e) => {
                let idProducto = input.id.replace('Cantidad_','');
                let btnAgregarProducto = 'Agregar_'+idProducto;
                let stockIdProducto = oProductos.obtenerStockByIdProducto(idProducto);
                document.getElementById('Cantidad_'+idProducto).innerHTML = stockIdProducto - e.target.value;
                if( stockIdProducto - e.target.value <= 0){
                    document.getElementById(btnAgregarProducto).disabled = true;
                }
                else {
                    document.getElementById(btnAgregarProducto).disabled = false;    
                }
            })     
        }
    });

})


