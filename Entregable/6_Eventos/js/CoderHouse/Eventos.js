let btn_FinalizarPedido= document.getElementById('btn_FinalizarPedido');
btn_FinalizarPedido.addEventListener('click',()=>{   
    new Pedido().ComprarPedido();
})


const containerShopPet = document.getElementById('divlistadoProductos');
const buttons = containerShopPet.querySelectorAll('button[type="button"]')

buttons.forEach(button => {
    if(button.id != 'idBuscar'){
        let idProducto = button.id.replace('Agregar_0','');
        let idCantidad = button.id.replace('Agregar_0','Cantidad_0');
        console.log(`se Creo evento click boton[idProducto=${idProducto}]`)
        button.addEventListener('click', () => {
            new Producto().agregarProducto(idCantidad,idProducto);
        })      
    }
});



