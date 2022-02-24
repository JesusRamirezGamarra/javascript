let oProductos= [];
let oPedidos= [];


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

    //////////////////////////////// Metodo encargado de obtener un determinado Producto x idPrducto
    obtenerProductoById(idProducto){
        // oProductos = localStorage.getItem('oProductos');
        // if(oProductos != null){
            let oProductoFind =  oProductos.find( (producto) => producto.idProducto === idProducto  )
            console.log(`Clase : Producto , Metodo : obtenerProducto con Id : ${oProductoFind.idProducto}`)
            console.log(oProductoFind);
            return oProductoFind;
        // }
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
    agregarProducto(idElementoInput_cantidad,idElemento_producto){  
        
        let oUsuario = sessionStorage.getItem('oUsuario');
        if(oUsuario == null){
            let oUsuario = prompt(`Bienvenido a Coder pet , Ingresa tu nombre :` , 'Nombre o Nick ')
            sessionStorage.setItem('oUsuario',oUsuario);
        }
        // else {
        //     alert(`Bienvenido :${oUsuario} coder Pet espera que tu estadia sea lo mejor posible !!`)
        // }

        let precioProducto = 0;
        let precioProductoSubTotal = 0;
        const cantidad = parseInt( ( document.querySelector('#'+idElementoInput_cantidad) ) .value  );
        // precioProducto = (this.obtenerProductoById(parseInt(idElemento_producto))).precio;
        let oProducto = this.obtenerProductoById(parseInt(idElemento_producto))
        precioProductoSubTotal = cantidad * parseFloat(precioProducto);

        const oPedido = new Pedido(idElemento_producto,oProducto.nombre,cantidad,oProducto.precio,oProducto.precio *cantidad)
        oPedidos.push(oPedido);



    }

    mostrarPedido(oPedidos){
        let mensaje = 'Bolsa de Pedido: \n';;
        oPedidos.forEach((item, index)=>{
            // console.log(index, item)
            mensaje += 'Producto  #' + index + ' : ' + item.nombre + ',' + item.cantidad
        })
    }

}

const oProducto01 = new Producto(1,'Brit Premium By Nature Junior','67.00','54.50','Perros','10')
const oProducto02 = new Producto(2,'Brit Care Mini GF Yorkshire','73.00','81.40','Perros','50')
const oProducto03 = new Producto(3,'Proplan Adulto Cordero','354.51','393.90','Perros','3')
const oProducto04 = new Producto(4,'Brit Care Mini Hair & Skin','50.00','75.20','Perros','20')
const oProducto05 = new Producto(5,'Equilibrio Grain Free Puppy','51.00','51.00','Perros','20')
const oProducto06 = new Producto(6,'Brit Care Mini GF Puppy','73.00','81.40','Perros','10')
const oProducto07 = new Producto(7,'Brit Care Senior Lamb & Rice','243.00','270.90','Perros','50')
const oProducto08 = new Producto(8,'Pro Plan Active Mind Raza','49.05','109','Perros','30')
oProductos =[oProducto01,oProducto02,oProducto03,oProducto04,oProducto05,oProducto06,oProducto07,oProducto08]





