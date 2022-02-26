

//  <span> Jesus Ramirez </span>
function crearUsuario(){
    let parrafoById = document.getElementById("idUsuario") ;
    parrafoById.innerHTML = `<div class="usuario_titulo">
    <span> Jesus Ramirez </span><br>
    <span class="precio_titulo"> Total :  150.45 S/.(PEN)  </span>
    </div>`

    // <span> Jesus Ramirez </span><br>
    // <span class="precio_titulo"> Total :  150.45 S/.(PEN)  </span>
}

crearUsuario();