let divDolar = document.getElementById('divDolar')


document.getElementById('botonDolar').addEventListener('click', ()=> {
    fetch('https://criptoya.com/api/dolar')
    .then((promesa) => promesa.json())
    .then(data => {
        let {oficial, blue, ccb, ccl, mep, solidario} = data
        divDolar.innerHTML = `
            <p>Oficial:$ ${oficial} </p>
            <p>Solidario:$ ${solidario} </p>
            <p>Blue:$ ${blue} </p>
            <p>Contado con Bitcoin:$ ${ccb}</p>
            <p>Contado con liquidacion:$ ${ccl} </p>
            <p>Mep: $${mep} </p>
           
        `
    })

})

document.getElementById('botonClientes').addEventListener('click', () => {
    fetch('./json/clientes.json')
    .then(response => response.json())
    .then(data => console.log(data))
})


