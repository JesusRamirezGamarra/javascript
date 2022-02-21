
//////////////////////////////// Funcion validarCantidad : encarga de Validar la informacion de cantidad de producto a ser comprados por el usuario ( formato , tipo ,min )
function validarCantidad(value,btnAgregarProducto) {
    if(parseInt(value) <= 0 ){
        document.getElementById(btnAgregarProducto).disabled = true;
        if(parseInt(value) == 0 ){
            alert(`El numero ingresado : ${value}, debe ser mayor o igual a 1 Unidad.`);
        }
    }else{
        document.getElementById(btnAgregarProducto).disabled = false;
    }

}