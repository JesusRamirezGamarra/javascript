let oProductos= [];
let oPedidos= [];
const moneda =  ' s/. PEN'     






//////////////////////////////// Clase Producto : Encargada de implementar la funcionalidad del producto en el carrito de compra.
class Producto {
    constructor(idProducto,nombre,precio,precioOriginal,categoria,stock) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.precioOriginal = precioOriginal;
        this.categoria = categoria;
        this.stock = stock;
    }

    static BuscarProductobyName(){
        let textoBusqueda = document.getElementById('idinputBuscar').value;
        let PrecioBusqueda = document.getElementById('idinputPrecio').value;
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
            mensaje =  `existen ${oProductoBusqueda.length} productos \n` 
            oProductoBusqueda.forEach((item, index)=>{
                mensaje += 'Producto  #' +  (index+1) + ' : ' + item.nombre + '\n' + 
                                    '('  +   item.stock +' unidades disponibles) x ' + 
                                            item.precio + moneda  + '\n'

            })
        }
        alert(mensaje);            
        console.table(oProductoBusqueda)
        return oProductoBusqueda;
    }

    //////////////////////////////// Metodo encargado de obtener un determinado Producto x idPrducto
    obtenerProductoById(idProducto){
            let oProductoFind =  oProductos.find( (producto) => producto.idProducto === idProducto  )
            console.log(`Clase : Producto , Metodo : obtenerProducto con Id : ${oProductoFind.idProducto}`)
            console.log(oProductoFind);
            return oProductoFind;
    }
    //////////////////////////////// Metodo encargado de obtener determinado Producto x NombreProducto
    buscarProducto(nombreProducto){
        let oProductoFind =  oProductos.find( (producto) => producto.nombre === nombre ||
                                                            producto.categoria === categoria            
                                            )
        console.log(`Clase : Producto , Metodo : buscarProducto con Nombre : ${oProductoFind.nombre}`)
        console.log(oProductoFind)
        return oProductoFind;
    }


    //////////////// Metodo agregar Producto : Encargado de agregar cantidad de Unidades solicitada por el Usuario para un determinado Producto
    //  Informacion Adicional : https://es.acervolima.com/diferencia-entre-metodos-y-funciones-en-javascript/
    agregarProducto(idElementoInput_cantidad,idProducto){  
        
        let oUsuario = sessionStorage.getItem('oUsuario');
        if(oUsuario == null){
            let oUsuario = prompt(`Bienvenido a Coder pet , Ingresa tu nombre :` , 'Nombre o Nick ')
            sessionStorage.setItem('oUsuario',oUsuario);
            crearDOMUsuarioInfo(oUsuario);
        }

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

                let mensaje =   `Su pedido ya tiene unidades del Producto : \n `+ 
                                        `${oPedido.nombre} \n\n ` + 
                                'su pedido actual es de : \n ' + 
                                        `(`  +  oPedido.cantidad +` unidades) x ` + 
                                        oPedido.precioUnitario + moneda + ` = ` + 
                                        oPedido.subTotal + moneda +  ` ) \n\n` +
                                `desea reemplazarlo por : \n `+ 
                                        `(`  +  cantidad +` unidades) x ` + 
                                        oPedido.precioUnitario + moneda + ` = ` + 
                                        oProducto.precio *cantidad + moneda +  ` ) \n\n` 

                if(confirm(mensaje)){
                    let oPedidoIndex = new Pedido().obtenerPedidoIndexById(idProducto);
                    oPedido= new Pedido(idProducto,oProducto.nombre,cantidad,oProducto.precio,oProducto.precioOriginal,oProducto.precio *cantidad)
                    oPedidos.splice(oPedidoIndex,1,oPedido)
                    boolActualizarProducto = true;
                    crearDOMPedido(oPedidos);
                }
            }
        }
        
        this.mostrarProducto(oPedido,boolActualizarProducto)
    }

    mostrarProducto(oPedido,boolActualizarProducto=False){
        let mensaje ;

        if(boolActualizarProducto){
            mensaje = 'Felicidades acabas de actualizar a tu Pedido: \n';
        }
        else {
            mensaje = 'Felicidades acabas de agregar a tu Pedido: \n';
        }
        mensaje += 'Producto : ' +   oPedido.nombre + '\n' + 
        '('  +  oPedido.cantidad +' unidades) x ' + 
                oPedido.precioUnitario + moneda + ' = ' + 
                oPedido.subTotal + moneda +  ' ) \n' 
        alert(mensaje)
        crearDOMUsuarioInfoPrecio(oPedidos);
    }
}

const oProducto01 = new Producto(1,'Brit Premium By Nature Junior','67.00','54.50','Perros','10')
const oProducto02 = new Producto(2,'Brit Care Mini GF Yorkshire','73.00','81.40','Perros','50')
const oProducto03 = new Producto(3,'Proplan Adulto mayor Cordero','354.51','393.90','Perros','3')
const oProducto04 = new Producto(4,'Brit Care Mini Hair & Skin','50.00','75.20','Perros','20')
const oProducto05 = new Producto(5,'Equilibrio Grain Free Puppy','51.00','51.00','Perros','20')
const oProducto06 = new Producto(6,'Brit Care Mini GF Puppy','73.00','81.40','Perros','10')
const oProducto07 = new Producto(7,'Brit Care Senior Lamb & Rice','243.00','270.90','Perros','50')
const oProducto08 = new Producto(8,'Pro Plan Active Mind Raza','49.05','109','Perros','30')
const oProducto09 = new Producto(9,'Equilibrio Active Adulto mayor','100','100','Perros','30')
oProductos =[oProducto01,oProducto02,oProducto03,oProducto04,oProducto05,oProducto06,oProducto07,oProducto08,oProducto09]
console.table(oProductos)


