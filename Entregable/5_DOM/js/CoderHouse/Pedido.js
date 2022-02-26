let timerId = 0;
const tiempoNivel = 20; //Segundos
let tiempo = tiempoNivel;

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

            // localStorage.setItem("oPedidos", JSON.stringify(oPedidos));
            console.log(`Se realiza confirmacion de compra del pedido con : ${oPedidos.length} Productos`);
            console.table(oPedidos)
            oPedidos.forEach((item, index)=>{
                console.log(index, item)
            })
            this.mostrarPedido(oPedidos)
            // oPedidos= [];
        }
    }

    mostrarPedido(oPedidosActual){
        let total = 0;
        let mensaje = 'Bolsa de Pedido: \n';
        
        oPedidosActual.forEach((item, index)=>{
            mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                '('  +  item.cantidad +' unidades) x ' + 
                                        item.precioUnitario + moneda + ' = ' + 
                                        item.subTotal + moneda +  ' ) \n' 
            total += item.subTotal;
        })
        mensaje +='\n\n Total : ' + parseFloat(total.toFixed(2)) + moneda
        alert(mensaje)

        // localStorage.setItem('Game',false)
        localStorage.removeItem('Game');

        if(confirm(`Deseas Probar tu suerte ?`)){
            let ancho = screen.width;
            let alto = screen.height;
            let anchoFinal = 700;
            let altoFinal = 800;
            let difA = ancho - anchoFinal;
            let difH = alto - altoFinal;
            let tope = difH/2;
            let lado = difA/2;
            let pagina ;

            let max =3 
            let min =1 
            let randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;

            switch(randomNumber) {
                case 3:
                    pagina = '/Games/index_Atrapame.html'
                    break;
                case 2:
                    pagina = '/Games/index_CalculadoraLoca.html'
                    break;
                default://1
                    pagina = '/Games/index_tresEnRaya.html'
            }

            let actualURL = window.location;
            let paginaURL = actualURL.href.replace('index.html',pagina)
            // let paginaURL = 'https://jesusramirezgamarra.github.io/javascript/Entregable/4_ProyectoFinal_PrimeraParte/' + pagina; // debido a que la estructura de directorios en github es diferente a la esturctura que tengo en local ( git hub le agrega /Javascript)
            let opciones="status=no, menubar=no, directories=no, location=no, toolbar=no, scrollbars=yes, resizable=no, width="+anchoFinal+", height="+altoFinal+", top="+tope+", left="+lado+"";
            let ventana = open(paginaURL,"_blank",opciones);


            //setTimeout(this.aplicarPromocion,tiempoNivel * 1000)
            timerId =setInterval(this.aplicarPromocion,1000);

        }
        else {
            // alert(mensaje)
            oPedidos= [];    
            let oUsuario = sessionStorage.getItem('oUsuario');                     
            let fechaEntrega = sumarDias(new Date(Date.now()),3)
            alert( `${oUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`)
            sessionStorage.removeItem('oUsuario');
        }
    }
        


    aplicarPromocion(){
        tiempo--;
        let boolGame;
        if( tiempo ==0 ){
            boolGame = false;
        }
    
        boolGame = localStorage.getItem('Game'); 
        
        if( boolGame != null){
            clearInterval(timerId);
            if(boolGame){
                
                localStorage.setItem('Game',false)
                let total = 0;
                let mensaje = 'Bolsa de Pedido: \n';
                
                let decuento = probabilidadRandom();
                alert(`Felicidades : Lo lograste tienes un decuento adicional de :${decuento}%`)
                oPedidos.forEach((item, index)=>{
                    mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                        '(' +   item.cantidad +' unidades) x ' + 
                                                item.precioUnitario + moneda + ' = ' + 
                                                item.subTotal + moneda +  '  \n'  + 
                                        '-> (' +   decuento + ' %) = ' +
                                        parseFloat( (item.subTotal * (1- decuento/100)).toFixed(2)) + moneda +  '  \n' 
                    total += item.subTotal;
                })
                
                mensaje +='\nTotal : ' + parseFloat(total.toFixed(2)) + moneda
                mensaje +='\nDescuento : ' + parseFloat((total* (decuento/100)).toFixed(2)) + moneda
                mensaje +='\nTotal Final (' +   decuento + ' %) : ' + parseFloat((total* (1- decuento/100)).toFixed(2)) + moneda
                alert(mensaje);

                oPedidos= [];       
                let oUsuario = sessionStorage.getItem('oUsuario');                     
                let fechaEntrega = sumarDias(new Date(Date.now()),3)
                alert( `${oUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`)
                sessionStorage.removeItem('oUsuario');

            }
            else {
                alert('Sigue intentando muy pronto tendras la posibilidad de tener mas descuentos')
                oPedidos= [];       
                let oUsuario = sessionStorage.getItem('oUsuario');                     
                let fechaEntrega = sumarDias(new Date(Date.now()),3)
                alert( `${oUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`)
                sessionStorage.removeItem('oUsuario');
            }


        }
    }
}
