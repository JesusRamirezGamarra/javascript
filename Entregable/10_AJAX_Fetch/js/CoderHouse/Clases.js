// Parametros de configuracion general del sistema.
let timerId = 0;
const tiempoNivel = 20; //Segundos
let tiempo = tiempoNivel;
let oProductos= [];
let oPedidos= [];
const moneda =  ' s/. PEN'     
let oUsuario ;
let isSession = false;
let oUsuarioLogeado

//////////////////////////////// Clase Usuario : Encargada de alamcenar los datos del Usuario Registrado
class Usuario{
    constructor(email,clave,nombre){
        this.email=email ;
        this.clave=clave;
        this.nombre=nombre;        
    }
}

//////////////////////////////// Clase Pedido : Encargada de implementar la funcionalidad del Pedido como grupo de productos.
class Pedido{
    constructor(idProducto,nombre,cantidad,precioUnitario,precioUnitarioOriginal,subTotal) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.precioUnitarioOriginal = precioUnitarioOriginal;
        this.subTotal = subTotal;
    }


    //////////////////////////////// Metodo encargado de Obtener Producto utilizando find.
    obtenerPedidoById(idProducto){
        let oPedidoFind =  oPedidos.find( (pedido) => pedido.idProducto === idProducto  )
        let mensaje = (oPedidoFind ==null )? 'NaN , no existe el id Producto ' + idProducto + ' en el pedido' : oPedidoFind.idProducto;
        console.log(`Clase : Pedido , Metodo : obtenerPedidoById con Id : ${mensaje}`)
        console.log(oPedidoFind);
        return oPedidoFind;
    }

    //////////////////////////////// Metodo encargado de Obtener Porducto utilizano findIndex.
    obtenerPedidoIndexById(idProducto){
        let oPedidoFind =  oPedidos.findIndex( (pedido) => pedido.idProducto === idProducto  )
        console.log(`Clase : Pedido , Metodo : obtenerPedidoIndexById con Id : ${idProducto} e index ${oPedidoFind}` )
        return oPedidoFind;
    }

    //////////////////////////////// Metodo encargado de Eliminar pedido
    eliminarPedido(idProducto ){
        let oPedidosNew = oPedidos.filter((item) => item.idProducto != idProducto);
        oPedidos = oPedidosNew;
        crearDOMPedido(oPedidos);
        crearDOMUsuarioInfoPrecio(oPedidos);
    }


    //////////////////////////////// Metodo encargado de confirmar compra de productos agregados a la bolsa como paso final en el carrito de compra
    ComprarPedido(){
        if(oPedidos==null || oPedidos.length==0)
        {
            console.log(`Intento de compra sin Producto en la Bolsa de Pedido`);
            swal({
                title: "Agrega productos a tu pedido",
                text: "Selecciona la cantidad mas apropiedad del producto que deseas, selecciona agregar carrito y listo . Continua comprando.",
                icon: "warning",
                dangerMode: true,
            })
        }
        else{
            console.log(`Se realiza confirmacion de compra del pedido con : ${oPedidos.length} Productos`);
            console.table(oPedidos)
            oPedidos.forEach((item, index)=>{
                console.log(index, item)
            })
            
            oUsuario = JSON.parse( sessionStorage.getItem('oUsuario') )
            if( oUsuario != null & oUsuario != ''){
                this.mostrarPedido(oPedidos)
            }
            else {
                swal({
                    title: "Debe logearse en el sistema antes de continuar?",
                    text: "Ingresa en el menu LogIn si cuenta con usuario o Registrar para crear un nuevo usuario",
                    icon: "warning",
                    buttons: {   cancel: "OK",},
                    dangerMode: true,
                })
                .then(()=>{
                    $('#ModalLogIn').modal('show')
                })
            }
        }
    }
     ////////////////////////////////  Metodo encargado de mostrar pedido total ( conjunto de productos ) 
    mostrarPedido(oPedidosActual){
        let total = 0;
        let titulo = 'Bolsa de Pedido'
        let mensaje = '';
        
        oPedidosActual.forEach((item, index)=>{
            mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                '('  +  item.cantidad +' unidades) x ' + 
                                        item.precioUnitario + moneda + ' = ' + 
                                        item.subTotal + moneda +  ' ) \n' 
            total += item.subTotal;
        })
        mensaje +='\n\n Total : ' + parseFloat(total.toFixed(2)) + moneda
        swal(titulo, mensaje);
        localStorage.removeItem('Game');

  
        swal({
            title: "¿Deseas Probar tu suerte?",
            text: "Arriesgate !!! selecciona si, juega  y gana! descuentos adicionales",
            icon: "info",
            buttons: {  
                cancel:{   

                    text: "NO",
                    value: false,
                    visible: true,
                    closeModal: true,
                },
                confirm:{
                    text : "SI",
                    value: true,
                    visible: true,
                    closeModal: true,
                },
            },
            closeOnEsc: false,
            closeOnClickOutside: false,
            dangerMode: true,
        })
        .then((value) => {
            if (value) {
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
                    // case 2:
                    //     pagina = '/Games/index_CalculadoraLoca.html'
                        // break;
                    default://1
                        pagina = '/Games/index_tresEnRaya.html'
                }
    
                let actualURL = window.location;
                // let paginaURL = actualURL.href.replace('index.html',pagina) -- Modo Local
                let paginaURL = 'https://jesusramirezgamarra.github.io/javascript/Entregable/9_Librerias' + pagina; // debido a que la estructura de directorios en github es diferente a la esturctura que tengo en local ( git hub le agrega /Javascript)
                let opciones="status=no, menubar=no, directories=no, location=no, toolbar=no, scrollbars=yes, resizable=no, width="+anchoFinal+", height="+altoFinal+", top="+tope+", left="+lado+"";
                open(paginaURL,"_blank",opciones);
    
    
                 timerId =setInterval(this.aplicarPromocion,1000);

                // Swal.fire({
                //     title: 'Error!',
                //     text: 'Do you want to continue',
                //     icon: 'error',
                //     confirmButtonText: 'Cool'
                //   })

            }
            else {
                oPedidos= [];    
                let oUsuario = JSON.parse( sessionStorage.getItem('oUsuario'));     
                let NombreUsuario =  (oUsuario == null || oUsuario == 'null')?'':oUsuario.nombre;                
                let fechaEntrega = sumarDias(new Date(Date.now()),3)
                swal(`${NombreUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`,{icon: "success",})
                crearDOMUsuarioInfo(oUsuario);
                removeDOMPedido()
            }

            })
    }
        

     ////////////////////////////////  Metodo encargado de Aplicacion promocion adicional en base al ganar /perder un juego aleatorio
    aplicarPromocion(){
        tiempo--;
        let boolGame;

        boolGame = localStorage.getItem('Game'); 
        if( boolGame == null && tiempo <0 ){
            boolGame = false;
        }
    
        let fechaEntrega = sumarDias(new Date(Date.now()),3)
        let oUsuario = JSON.parse( sessionStorage.getItem('oUsuario'));      
        let NombreUsuario =  (oUsuario == null || oUsuario == 'null')?'':oUsuario.nombre;
        
        if( boolGame != null){
            clearInterval(timerId);
            if(boolGame){
                
                localStorage.setItem('Game',false)
                let total = 0;
                let montoDescuento =0;
                let totalConDescuento =0;
                let mensaje = ''
                
                const descuento = probabilidadRandom();


                oPedidos.forEach((item, index)=>{
                    mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                        '(' +   item.cantidad +' unidades) x ' + 
                                                item.precioUnitario + moneda + ' = ' + 
                                                item.subTotal + moneda +  '  \n'  + 
                                        '-> (' +   descuento + ' %) = ' +
                                        parseFloat( (item.subTotal * (1- descuento/100)).toFixed(2)) + moneda +  '  \n' 
                    total += item.subTotal;
                })
                
                total = parseFloat(total.toFixed(2))
                montoDescuento = parseFloat((total* (descuento/100)).toFixed(2))
                totalConDescuento = parseFloat((total* (1- descuento/100)).toFixed(2))

                mensaje +='\nTotal : ' + total  + moneda
                mensaje +='\nDescuento : ' + montoDescuento  + moneda
                mensaje +='\nTotal Final (' +   descuento + ' %) : ' + totalConDescuento + moneda


                swal(`Felicidades`, `Lo lograste tienes un decuento adicional de :${descuento}%`,{icon: "success",})
                .then(() => {  
                    oPedidos= [];   
                    mensaje +=`\n\n${NombreUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`
                    swal(`Bolsa de Pedido`,mensaje,{icon: "success",})
                    crearDOMUsuarioInfo(oUsuario);
                    removeDOMPedido()
                })  
            }
            else {
                swal({
                    title: "Es una lastima ...",
                    text: "Sigue intentando muy pronto tendras la posibilidad de tener mas descuentos.",
                    icon: "warning",
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        oPedidos= [];       
                        let fechaEntrega = sumarDias(new Date(Date.now()),3)
                        swal(`Bolsa de Pedido`, `${NombreUsuario} tu pedido ya esta en camino :\nTu pedido sera entregado antes del :\n${fechaEntrega} \nEsperamos volverte a ver pronto !!!`,{icon: "success",})
                        crearDOMUsuarioInfo(oUsuario);
                        removeDOMPedido()
                    } 
                })
            }
        }
    }
}

//////////////////////////////// Clase Producto : Encargada de implementar la funcionalidad del producto en el carrito de compra.
class Producto {
    constructor(idProducto,nombre,precio,precioOriginal,categoria,stock,img) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.precioOriginal = precioOriginal;
        this.categoria = categoria;
        this.stock = stock;
        this.img = img;
    }

    ////////////////////////////////  Metodo encargado de Obtener un determinado Producto por nombre 
    // --> URL con Informacion Adicional  : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static
    static BuscarProductobyName(){
        let textoBusqueda = document.getElementById('idinputBuscar').value.toLowerCase();
        let PrecioBusqueda = document.getElementById('idinputPrecio').value;
        PrecioBusqueda = ( PrecioBusqueda=='' ) ?   0   :   PrecioBusqueda ;
        let oProductoBusqueda 
        let mensaje 
        if(textoBusqueda=="" && PrecioBusqueda == ""){
            oProductoBusqueda = null;
            mensaje = 'Debe ingresar un criterio de busqueda';
        }
        else {
            oProductoBusqueda=  oProductos.filter(    (oProducto)=> {
                if( oProducto.precio>PrecioBusqueda && 
                    oProducto.nombre.toLowerCase().includes(textoBusqueda) 
                    ){
                    return oProducto;
                }  
            })
            mensaje =  `existen ${oProductoBusqueda.length} productos :  \n\n` 
            oProductoBusqueda.forEach((item, index)=>{
                mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                    '('  +   item.stock +' unidades disponibles) x ' + 
                                            item.precio + moneda  + '\n'

            })
        }
        swal(mensaje);            
        console.table(oProductoBusqueda)
        return oProductoBusqueda;
    }

    //////////////////////////////// Metodo encargado de obtener un determinado Producto por idPrducto
    obtenerProductoById(idProducto){
            let oProductoFind =  oProductos.find( (producto) => producto.idProducto === idProducto  )
            console.log(`Clase : Producto , Metodo : obtenerProducto con Id : ${oProductoFind.idProducto}`)
            console.log(oProductoFind);
            return oProductoFind;
    }

    ////////////////////////////////  Metodo agregar Producto : Encargado de agregar cantidad de Unidades solicitada por el Usuario para un determinado Producto
    // --> URL con Informacion Adicional  : https://es.acervolima.com/diferencia-entre-metodos-y-funciones-en-javascript/ 
    agregarProducto(idElementoInput_cantidad,idProducto){  
        
        crearDOMUsuarioInfo(oUsuario);

        let precioProducto = 0;
        let precioProductoSubTotal = 0;
        let boolActualizarProducto =false;
        const cantidad = parseInt( ( document.querySelector('#'+idElementoInput_cantidad) ) .value  );
        let oProducto = this.obtenerProductoById(parseInt(idProducto))
        precioProductoSubTotal = cantidad * parseFloat(precioProducto);
        let oPedido;
        if(oPedidos == null || oPedidos.length ==0 ){
            oPedido = new Pedido(idProducto,oProducto.nombre,cantidad,oProducto.precio,oProducto.precioOriginal,oProducto.precio *cantidad)
            oPedidos.push(oPedido);
            crearDOMPedido(oPedidos);
        }
        else{
            oPedido = new Pedido().obtenerPedidoById(idProducto)
            if(oPedido== null)
            {
                oPedido = new Pedido(idProducto,oProducto.nombre,cantidad,oProducto.precio,oProducto.precioOriginal,oProducto.precio *cantidad)
                oPedidos.push(oPedido);
                crearDOMPedido(oPedidos);
            }
            else{

                let oPedidoIndex = new Pedido().obtenerPedidoIndexById(idProducto);
                oPedido= new Pedido(idProducto,oProducto.nombre,cantidad,oProducto.precio,oProducto.precioOriginal,oProducto.precio *cantidad)
                oPedidos.splice(oPedidoIndex,1,oPedido)
                boolActualizarProducto = true;
                crearDOMPedido(oPedidos);
            }
        }
        
        this.mostrarProducto(oPedido,boolActualizarProducto)
    }

    //////////////////////////////// Metodo encargado de mostrar mensaje Swwet alert : Producto . Incluye : { Producto , unidades , moneda , subTotal }
    mostrarProducto(oPedido,boolActualizarProducto=False){
        let {nombre,cantidad,precioUnitario,subTotal} = oPedido;
        let mensaje ;
        mensaje = (boolActualizarProducto)? 'Felicidades acabas de actualizar a tu Pedido: \n':'Felicidades acabas de agregar a tu Pedido: \n';

        mensaje += 'Producto : ' +   nombre + '\n' + 
        '('  +  cantidad +' unidades) x ' + 
                precioUnitario + moneda + ' = ' + 
                subTotal.toFixed(2) + moneda +  ' ) \n' 
        swal.fire(mensaje)
        crearDOMUsuarioInfoPrecio(oPedidos);
    }
}



// //Data de prueba de productos
// Entidad utilizada antes de la implementacion de la funcion Async que carga Productos desde un archivo JSON . 
// const oProducto01 = new Producto(1,'Brit Premium By Nature Junior','67.00','54.50','Perros','10')
// const oProducto02 = new Producto(2,'Brit Care Mini GF Yorkshire','73.00','81.40','Perros','50')
// const oProducto03 = new Producto(3,'Proplan Adulto mayor Cordero','354.51','393.90','Perros','3')
// const oProducto04 = new Producto(4,'Brit Care Mini Hair & Skin','50.00','75.20','Perros','20')
// const oProducto05 = new Producto(5,'Equilibrio Grain Free Puppy','51.00','51.00','Perros','20')
// const oProducto06 = new Producto(6,'Brit Care Mini GF Puppy','73.00','81.40','Perros','10')
// const oProducto07 = new Producto(7,'Brit Care Senior Lamb & Rice','243.00','270.90','Perros','50')
// const oProducto08 = new Producto(8,'Pro Plan Active Mind Raza','49.05','109','Perros','30')
// const oProducto09 = new Producto(9,'Equilibrio Active Adulto mayor','100','100','Perros','30')
// oProductos =[oProducto01,oProducto02,oProducto03,oProducto04,oProducto05,oProducto06,oProducto07,oProducto08,oProducto09]
// console.table(oProductos)


// oUsuario =sessionStorage.getItem('oUsuario') 
oUsuario = ( JSON.parse( sessionStorage.getItem('oUsuario') ) ?? [] );
(oUsuario != '' )? (crearDOMUsuarioInfo(oUsuario)) : null;
(oPedidos!=null && oPedidos.length>0 ) ?   crearDOMUsuarioInfoPrecio(oPedidos) : null ;

