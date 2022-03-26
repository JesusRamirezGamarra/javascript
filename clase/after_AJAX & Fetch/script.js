let divProductos = document.getElementById('divProductos')
/*
fetch('./json/productos.json')
.then(promesa => promesa.json())
.then(data => {
    data.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 18rem;">
        <img src="./img/${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.modelo}</p>
          <p class="card-text">${producto.marca}</p>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">Stock: ${producto.stock}</p>
          <button id="boton${indice}" class="btn btn-dark">Comprar</button>
        </div>
      </div>
        `
    });
})
*/
async function cargarProductos() {
    let promesa = await fetch('./json/productos.json')
    let productosJSON = await promesa.json()
    return productosJSON
}

cargarProductos().then( data => {
    data.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 18rem;">
        <img src="./img/${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.modelo}</p>
          <p class="card-text">${producto.marca}</p>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">Stock: ${producto.stock}</p>
          <button id="boton${indice}" class="btn btn-dark">Comprar</button>
        </div>
      </div>
        `
    })
})
