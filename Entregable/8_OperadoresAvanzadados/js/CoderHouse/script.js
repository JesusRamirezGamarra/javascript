

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
function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
 }

function popUp(URL) {
    window.open(URL, 'Coder Game', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=no,resizable=1,width=500,height=800,left = 390,top = 50');
}
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
    crearDOMPedidoTotal(total,0,0,0)

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





