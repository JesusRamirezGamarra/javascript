// let oProducto = new Producto();

//////////////////////////////// Clase Producto : Encargada de implementar la funcionalidad del producto en el carrito de compra.
class Producto {
    constructor(idProducto,nombre,precio,categoria) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    //////////////////////////////// Metodo encargado de obtener un determinado Producto x idPrducto
    obtenerProductoById(idProducto){
        // oProductos = localStorage.getItem('oProductos');
        // if(oProductos != null){
            let oProductoFind =  oProductos.find( (producto) => producto.idProducto === idProducto  )
            console.log(`Clase : Producto , Metodo : obtenerProducto : ${oProductoFind}`)
             return oProductoFind;
        // }
    }
    
    buscarProducto(nombreProducto){
        let oProductoFind =  oProductos.find( (producto) => producto.nombre === nombre ||
                                                            producto.categoria === categoria 
                                                            
                                            )
        console.log(`Clase : Producto , Metodo : buscarProducto : ${oProductoFind}`)
        return oProductoFind;
    }


    //////////////// Metodo agregar Producto : Encargado de agregar cantidad de Unidades solicitada por el Usuario para un determinado Producto
    // https://es.acervolima.com/diferencia-entre-metodos-y-funciones-en-javascript/
    agregarProducto(idElementoInput_cantidad,idElemento_producto){  
        
        let oUsuario = sessionStorage.getItem('oUsuario');
        if(oUsuario == null){
            let oUsuario = prompt(`Bienvenido a Coder pet , Ingresa tu nombre :` , 'Nombre o Nick ')
            sessionStorage.setItem('oUsuario',oUsuario);
        }
        else {
            alert(`Bienvenido :${oUsuario} coder Pet espera que tu estadia sea lo mejor posible !!`)

        }

        let precioProducto = 0;
        let precioProductoSubTotal = 0;
        const cantidad = parseInt( ( document.querySelector('#'+idElementoInput_cantidad) ) .value  );
        precioProducto = (this.obtenerProductoById(parseInt(idElemento_producto))).precio;
        // como se valida x formulario siempre contendra numeros enteros por ese motivo es mas eficiente usar ParseInt que Number
        // https://thisthat.dev/number-constructor-vs-parse-int/
        precioProductoSubTotal = cantidad * parseFloat(precioProducto);

        


    }

    SolicitarNombreUsuario(){
        //let usuario = localStorage.getItem('nombre');
        let usuario = localStorage.nombre;
        if (usuario == 'null') {
            // localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
            localStorage.nombre =  prompt('INGRESAR NOMBRE');
        } else {
            alert('EL NOMBRE ES ' + usuario);
        }
    }

}

// localStorage.removeItem("oProductos");
let oProductos= [];
// let oProductoStorage = localStorage.getItem('oProductos');
// if(oProductoStorage == null)
// {
    const oProducto01 = new Producto(1,'Brit Premium By Nature Junior','67.00','')
    const oProducto02 = new Producto(2,'Brit Care Mini GF Yorkshire','73.00')
    const oProducto03 = new Producto(3,'Proplan Adulto Cordero','354.51')
    const oProducto04 = new Producto(4,'Brit Care Mini Hair & Skin','50.00')
    const oProducto05 = new Producto(5,'Equilibrio Grain Free Puppy','51.00')
    const oProducto06 = new Producto(6,'Brit Care Mini GF Puppy','73.00')
    const oProducto07 = new Producto(7,'Brit Care Senior Lamb & Rice','243.00')
    const oProducto08 = new Producto(8,'Pro Plan Active Mind Raza','49.05')
    oProductos =[oProducto01,oProducto02,oProducto03,oProducto04,oProducto05,oProducto06,oProducto07,oProducto08]
    // localstorage.setItem('oProductos', JSON.stringify(oProducto));
//     localStorage.setItem('oProductos', JSON.stringify(oProductos));
// }
// else {
//     oProductos = oProductoStorage;
// }


localStorage.setItem("oProductos", JSON.stringify(oProductos));
var jsonString = localStorage.getItem("oProductos");
// Parse the JSON string back to JS object
var retrievedObject = JSON.parse(jsonString);
console.log(retrievedObject);
    
// Accessing individual values
console.log(retrievedObject.name); // Prints: Peter
console.log(retrievedObject.age); // Prints: 18
console.log(retrievedObject.married); // Prints: false


// var personObject = { name: "Peter", age: 18, married: false };
    
// // Convert the person object into JSON string and save it into storage
// localStorage.setItem("personObject", JSON.stringify(personObject));
    
// // Retrieve the JSON string
// var jsonString = localStorage.getItem("personObject");
    
// // Parse the JSON string back to JS object
// var retrievedObject = JSON.parse(jsonString);
// console.log(retrievedObject);
    
// // Accessing individual values
// console.log(retrievedObject.name); // Prints: Peter
// console.log(retrievedObject.age); // Prints: 18
// console.log(retrievedObject.married); // Prints: false


