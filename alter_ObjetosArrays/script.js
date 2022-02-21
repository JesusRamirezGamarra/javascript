// Ejemplo 01
//addon : Tabnine AI Autocomplete for Javascript, Python, Typescript, PHP, Go, Java, Ruby & more

const stock =[]
const stock2=[]

class Producto{
    constructor(id,nombre,categoria,precio){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }

    calcularIVA(){
        this.precio = this.precio * 1.21;
    }
}


stock.push ( new Producto(1,'pantalon verde','pantalones',1000))
stock.push ( new Producto(2,'pantalon verde','pantalones',3000))
stock.push ( new Producto(3,'pantalon verde','pantalones',3000))
stock.push ( new Producto(4,'pantalon verde','pantalones',3000))
stock.push ( new Producto(5,'pantalon verde','pantalones',3000))
stock.push ( new Producto(6,'pantalon verde','pantalones',3000))
stock.push ( new Producto(7,'pantalon verde','pantalones',3000))
stock.push ( new Producto(8,'pantalon verde','pantalones',3000))
stock.push ( new Producto(9,'pantalon verde','pantalones',3000))

stock.push ( new Producto(10,'pantalon verde','pantalones',3000))
stock.push ( new Producto(11,'pantalon verde','pantalones',3000))



console.log(stock);
const producto1 = new Producto(12,'pantalon verde','pantalones',100)
const producto2 = new Producto(13,'pantalon verde','pantalones',200)
stock.push(producto1,producto2)

console.log(stock);

stock2 = stock.pop();
console.log(stock2);

stock.forEach()


//const union = 

