let divDolar = document.getElementById('divCarousel_TC_fetch')
let divDolar_footer = document.getElementById('divCarousel_TC_fetch_footer')


// fetch('https://criptoya.com/api/dolar')
// .then((promesa) => promesa.json())
// .then(data => {
//     let {oficial, solidario, blue, ccb, ccl, mep,time} = data
//     divDolar.innerHTML = `
//     <div class="carousel-item active" data-bs-interval="500"><p>Oficial : $ ${oficial}</p></div>
//     <div class="carousel-item" data-bs-interval="500"><p>Solidario : $ ${solidario}</p></div>
//     <div class="carousel-item" data-bs-interval="500"><p>Informal : $ ${blue}</p></div>
//     <div class="carousel-item" data-bs-interval="500"><p>Contado Bitcoin : $  ${ccb}</p></div>
//     <div class="carousel-item" data-bs-interval="500"><p>Contado Liquidación : $ ${ccl}</p></div>
//     <div class="carousel-item" data-bs-interval="500"><p>Mep : $ ${mep}</p></div>
//     `
//     //NO encontre en la documentacion algo referente al valor que envia en int para la propiedad time de esta API. Sin embargo note que de esta forma da la fecha.
//     let Fecha = new Date(parseInt(time.toString() + '000'))
//     divDolar_footer.innerHTML=`
//     <div style="font-size: 9px"> Tipo de cambio en $. ARS </div>
//     <div style="font-size: 9px">  ${Fecha} </div>
//     `
// })
// .catch(error => console.error(error));


async function cargarTipoCambio_Dolar() {
    let promesa = await fetch('https://criptoya.com/api/dolar')
    let TCJson = await promesa.json()
    return TCJson
}


cargarTipoCambio_Dolar().then(data => {
    let {oficial, solidario, blue, ccb, ccl, mep,time} = data
    divDolar.innerHTML = `
    <div class="carousel-item active" data-bs-interval="500"><p>Oficial : $ ${oficial}</p></div>
    <div class="carousel-item" data-bs-interval="500"><p>Solidario : $ ${solidario}</p></div>
    <div class="carousel-item" data-bs-interval="500"><p>Informal : $ ${blue}</p></div>
    <div class="carousel-item" data-bs-interval="500"><p>Contado Bitcoin : $  ${ccb}</p></div>
    <div class="carousel-item" data-bs-interval="500"><p>Contado Liquidación : $ ${ccl}</p></div>      
    <div class="carousel-item" data-bs-interval="500"><p>Mep : $ ${mep}</p></div>   
    `
    //NO encontre en la documentacion algo referente al valor que envia en int para la propiedad time de esta API. Sin embargo note que de esta forma da la fecha.
    let Fecha = new Date(parseInt(time.toString() + '000'))
    divDolar_footer.innerHTML=`
    <div style="font-size: 9px"> Tipo de cambio en $. ARS </div>
    <div style="font-size: 9px">  ${Fecha} </div>
    `
})
.catch(error => console.error(error));






