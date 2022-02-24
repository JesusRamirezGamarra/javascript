class Pedido{
    constructor(idProducto,nombre,cantidad,precioUnitario,subTotal) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.subTotal = subTotal;
    }

    //////////////////////////////// Metodo encargado de confirmar compra de productos agregados a la bolsa
    ComprarPedido(){
        localStorage.setItem("oPedidos", JSON.stringify(oPedidos));
        
        // let menu = '';
        // const arrayComidas = comidas.split(',');
        // for (const nombreComida of arrayComidas) {
        //     menu += nombreComida + '\n';
        // }
        // alert(menu);

        console.log(`Se realiza confirmacion de compra del pedido con : ${oPedidos.length} Productos`);
        console.log(oPedidos)
        let resumnen = '';
        oPedidos.forEach((item, index)=>{
            console.log(index, item)
        })
        this.mostrarPedido(oPedidos)

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
        mensaje +='\n\n Total : ' + total + moneda

        alert(mensaje)
    }
}