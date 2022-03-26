// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// fetch('https://criptoya.com/api/dolar')
//     .then( console.log('Funciono') )
//     .then( (promesa) => promesa.json() )
//     .then( data=> console.log(data) )



    let divDolar = document.getElementById('divDolar')
    document.getElementById('botonDolar').addEventListener('click', () => {
        fetch('https://criptoya.com/api/dolar')
        .then( console.log('Funciono') )
        .then( (promesa) => promesa.json() )
        .then( data => {
            let {oficial,blue,ccb,ccl,mep,solidario} = data
            divDolar.innerHTML = `
                <p>Oficiial $: ${oficial}</p>
                <p>Sp;odarop $: ${solidario}</p>
                <p>Blue $: ${blue}</p>
                <p>Contado con Bitcoin $: ${ccb}</p>
                <p>Contado con liquidacion $: ${ccl}</p>
                <p>Mep $: ${mep}</p>
            `
        })
    })


    document.getElementById('botonClientes').addEventListener('click', ()=>{
        fetch('Clientes.json')
        .then(response => response.json())
        .then( data =>console.log(data))
    })


// let btn_FinalizarPedido= document.getElementById('btn_FinalizarPedido');
// btn_FinalizarPedido.addEventListener('click',()=>{   
//     new Pedido().ComprarPedido();
// })
