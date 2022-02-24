class Pedido{
    constructor(idProducto,nombre,cantidad,precioUnitario,subTotal) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.subTotal = subTotal;
    }


    obtenerPedidoById(idProducto){
        let oPedidoFind =  oPedidos.find( (pedido) => pedido.idProducto === idProducto  )
        let mensaje = (oPedidoFind ==null )? 'NaN , no existe el id Producto ' + idProducto + ' en el pedido' : oPedidoFind.idProducto;
        console.log(`Clase : Pedido , Metodo : obtenerPedidoById con Id : ${mensaje}`)
        console.log(oPedidoFind);
        return oPedidoFind;
    }

    obtenerPedidoIndexById(idProducto){
        let oPedidoFind =  oPedidos.findIndex( (pedido) => pedido.idProducto === idProducto  )
        // let mensaje = (oPedidoFind ==null )? 'NaN , no existe el id Producto ' + idProducto + ' en el pedido' : oPedidoFind.idProducto;
        console.log(`Clase : Pedido , Metodo : obtenerPedidoIndexById con Id : ${idProducto} e index ${oPedidoFind}` )
        return oPedidoFind;
    }





    //////////////////////////////// Metodo encargado de confirmar compra de productos agregados a la bolsa
    ComprarPedido(){
        if(oPedidos==null || oPedidos.length==0)
        {
            console.log(`Intento de compra sin Producto en la Bolsa de Pedido`);
            alert(`Debes ingresar productos a tu pedido antes de confirmar la compra.`)
        }
        else{

            localStorage.setItem("oPedidos", JSON.stringify(oPedidos));
            console.log(`Se realiza confirmacion de compra del pedido con : ${oPedidos.length} Productos`);
            console.log(oPedidos)
            oPedidos.forEach((item, index)=>{
                console.log(index, item)
            })
            this.mostrarPedido(oPedidos)
        }
    }

    mostrarPedido(oPedidos){
        let total = 0;
        let mensaje = 'Bolsa de Pedido: \n';
        const moneda =  ' s/. PEN'
        oPedidos.forEach((item, index)=>{
            // console.log(index, item)
            mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                '('  +  item.cantidad +' unidades) x ' + 
                                        item.precioUnitario + moneda + ' = ' + 
                                        item.subTotal + moneda +  ' ) \n' 
            total += item.subTotal;
        })
        mensaje +='\n\n Total : ' + parseFloat(total.toFixed(2)) + moneda
        alert(mensaje)

        if(confirm(`Deseas Probar tu suerte ?`)){
            var ancho = screen.width;
            var alto = screen.height;
            var anchoFinal = 500;
            var altoFinal = 600;
            var difA = ancho - anchoFinal;
            var difH = alto - altoFinal;
            var tope = difH/2;
            var lado = difA/2;
            var pagina = '/Entregable/4_ProyectoFinal_PrimeraParte/Games/index_tresEnRaya.html'
            var Opciones="status=no, menubar=no, directories=no, location=no, toolbar=no, scrollbars=yes, resizable=no, width="+anchoFinal+", height="+altoFinal+", top="+tope+", left="+lado+"";
            Ventana = open(pagina,"_blank",Opciones);


        

        }
        else {
            let oUsuario = sessionStorage.getItem('oUsuario');                     
            let fechaEntrega = sumarDias(new Date(Date.now()),3)
            alert( `${oUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`)
            sessionStorage.removeItem('oUsuario');
        }
        
    }
}


        // const avengers = ['thor', 'captain america', 'hulk'];
        // avengers.forEach((item, index)=>{
        //     console.log(index, item)
        // })


        // var jsonString = localStorage.getItem("oProductos");
        // // Parse the JSON string back to JS object
        // var retrievedObject = JSON.parse(jsonString);
        // console.log(retrievedObject);
            
        // // Accessing individual values
        // console.log(retrievedObject[0].idProducto); 
        // console.log(retrievedObject[0].nombre);
        // console.log(retrievedObject[0].precio);
        // console.log(retrievedObject[0].precioOriginal);
        // console.log(retrievedObject[0].categoria);
        // console.log(retrievedObject[0].stock);