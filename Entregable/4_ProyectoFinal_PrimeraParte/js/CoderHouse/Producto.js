
//////////////////////////////// Clase Producto : Encargada de implementar la funcionalidad del producto en el carrito de compra.
class Producto {
    constructor(idProducto,nombre,precio) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerProducto(idProducto){
       let oProductoFind =  oProductos.find( (producto) => producto.idProducto === idProducto  )
       console.log(`Clase : Producto , Metodo : obtenerProducto : ${oProductoFind}`)
       return oProductoFind;
    }
    



    //////////////// Metodo agregar Producto : Encargado de agregar cantidad de Unidades solicitada por el Usuario para un determinado Producto
    // https://es.acervolima.com/diferencia-entre-metodos-y-funciones-en-javascript/
    agregarProducto(idElementoInput_cantidad,idElemento_producto){  
        let precioProducto = 0;
        let precioProductoSubTotal = 0;
        const cantidad = parseInt( ( document.querySelector('#'+idElementoInput_cantidad) ) .value  );
        precioProducto = this.obtenerProducto(parseInt(idElemento_producto)).precio;
        // como se valida x formulario siempre contendra numeros enteros por ese motivo es mas eficiente usar ParseInt que Number
        // https://thisthat.dev/number-constructor-vs-parse-int/
        precioProductoSubTotal = cantidad * precioProducto;

    // updateBitacora();
    // updateReto();
    // updateDisplay();
    // iniciarEstados();
    // if(timerId==0){
    //     timerId = setInterval(restarTiempo,1000);
    // }
    
    }
}


const oProducto = new Producto();
const oProducto01 = new Producto(1,'Brit Premium By Nature Junior','67.00')
const oProducto02 = new Producto(2,'Brit Care Mini GF Yorkshire','73.00')
const oProducto03 = new Producto(3,'Proplan Adulto Cordero','354.51')
const oProducto04 = new Producto(4,'Brit Care Mini Hair & Skin','50.00')
const oProducto05 = new Producto(5,'Equilibrio Grain Free Puppy','51.00')
const oProducto06 = new Producto(6,'Brit Care Mini GF Puppy','73.00')
const oProducto07 = new Producto(7,'Brit Care Senior Lamb & Rice','243.00')
const oProducto08 = new Producto(8,'Pro Plan Active Mind Raza','49.05')
const oProductos =[oProducto01,oProducto02,oProducto03,oProducto04,oProducto05,oProducto06,oProducto07,oProducto08]


