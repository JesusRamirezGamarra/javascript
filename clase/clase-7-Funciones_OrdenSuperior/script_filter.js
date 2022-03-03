
console.log('Ejercicio 02')
class Persona{
    constructor(nombre, apellido, edad, sueldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

const persona1 = new Persona ("Emiliano","Grange",23,10000)
const persona2 = new Persona ("Juan","Chapur",18,8000)
const persona3 = new Persona ("Milton","Salazar",22,12000)
const persona4 = new Persona ("Matias","Miro",24,15000)

let personas = [persona1,persona2,persona3,persona4]

// filter : retorna true si existe elementos que cumplan con la condicion
// de no existe elemento que cumpla con las condiciones : []
console.log(personas.filter(    (persona)=> persona.edad >18    ))
console.log(personas.filter(    (persona)=> persona.edad <18    ))


class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
  
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  
  const p1 = new Punto(5, 5);
  const p2 = new Punto(10, 10);
  Punto.distancia(p1, p2)
  console.log (Punto.distancia(p1, p2)); // 7.0710678118654755



class Producto {
    constructor(idProducto,nombre,precio,precioOriginal,categoria,stock) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.precioOriginal = precioOriginal;
        this.categoria = categoria;
        this.stock = stock;
    }

    static BuscarProductobyName( ){
        // let textoBusqueda = document.getElementById('idinputBuscar').value;
        let textoBusqueda = 'Brit'.toLowerCase()
        // let oProductosBusqueda = oProductos.filter(    (oProducto)=> {oProducto.precio > 50} )
        // console.table(oProductosBusqueda);
        // let oProductoBusqueda = oProductos.filter(    (oProducto)=> oProducto.precio <70    )
        // let oProductoBusqueda =  (oProductos.filter(    (oProducto)=> oProducto.nombre.toLowerCase()= textoBusqueda.toLowerCase() )) 

        let oProductoBusqueda =  oProductos.filter(  
                            (oProducto)=> {
                                
                                // if(oProducto.precio>=60 && oProducto.nombre.includes(textoBusqueda)){
                                //     return oProducto;
                                // }                            
                                // if(oProducto.precio>=60 ){
                                //     return oProducto;
                                // }                         
                                if( oProducto.precio>=60 || 
                                    oProducto.nombre.toLowerCase().includes(textoBusqueda) 
                                    ){
                                    return oProducto;
                                }                                       
                            }) 

        console.table(oProductoBusqueda)
        return oProductoBusqueda;
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
console.table(oProductos)

// new Producto().obtenerProductoById()
Producto.BuscarProductobyName();
// console.table(oProductos.filter(    (oProducto)=> oProducto.precio <70    ))
// console.table(oProductos.filter(    (oProducto)=> oProducto.nombre.toLowerCase()= 'mini'.toLowerCase()    ))
