
//////////////////////////////// Funcion validarCantidad : encarga de Validar la informacion de cantidad de producto a ser comprados por el usuario ( formato , tipo ,min )
function validarCantidad(value,btnAgregarProducto) {
    if(parseInt(value) <= 0 ){
        document.getElementById(btnAgregarProducto).disabled = true;
        if(parseInt(value) == 0 ){
            alert(`El numero ingresado : ${value}, debe ser mayor o igual a 1 Unidad.`); // Intensionalmente mostramos un mensaje solo en el caso de valores == 0 , si bien podemos restringir el min en el contorl imput dejamos esta validacion y alert 
        }
    }else{
        document.getElementById(btnAgregarProducto).disabled = false;
    }

}


function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
 }

function popUp(URL) {
    window.open(URL, 'Coder Game', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=no,resizable=1,width=500,height=800,left = 390,top = 50');
}




function probabilidadRandom()
{
    let seed  = 10;
    let numeroRandomFloatToFixed2A = parseFloat(Math.random().toFixed(2));
    let numeroRandomFloatToFixed2B = Number(Math.round(Math.random()+'e2')+'e-2'); 
    let decuentoAdicional = numeroRandomFloatToFixed2A * numeroRandomFloatToFixed2B /  (  1/seed *numeroRandomFloatToFixed2B  )  ;
        if(decuentoAdicional >= 20){
            decuentoAdicional = 20
        }
        else if ( decuentoAdicional <=5){
            decuentoAdicional = 5
        }
    return parseInt(decuentoAdicional);
}