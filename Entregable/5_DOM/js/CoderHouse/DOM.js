
////////////////////////////////Funcion encargada de Agregar x DOM el nombre del Usuario
//  <span> Jesus Ramirez </span>
function crearDOMUsuarioInfo(oUsuario){
    let parrafoById = document.getElementById("idUsuarioInfo") ;
    parrafoById.innerHTML = `<div id="idUsuarioInfoNombre" class="usuario_titulo">
                                <span> ${oUsuario} </span><br>
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

////////////////////////////////Funcion encargada de Crear el contenido x Producto existente en la Bolsa de Pedido
function crearDOMPedido(oPedidos){
    let parrafoById = document.getElementById("idPedidoInfo") ;
    parrafoById.innerHTML=``
    oPedidos.forEach(opedidoEnArray =>{
        let subTotal = parseFloat((opedidoEnArray.cantidad * opedidoEnArray.precioUnitario).toFixed(2))
        parrafoById.innerHTML += `
        <div id="idProducto_${opedidoEnArray.idproducto}" class="row">
            <div class="col-12" style="text-align: center;">
                <hr>
                <h4>${opedidoEnArray.nombre}</h4>
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
// style="text-align: center;background-color:black;color: #ffffff;"
// class="usuario_titulo">
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





let oUsuario =sessionStorage.getItem('oUsuario') 
if(oUsuario != null){
    crearDOMUsuarioInfo(oUsuario);
}
if(oPedidos!=null ){
    crearDOMUsuarioInfoPrecio(oPedidos);
}






