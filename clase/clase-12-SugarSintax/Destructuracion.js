const persona = {
    nC : "Pablo",
    aC : "Perez",
    dC : 35 ,
    direccion : {
        calle : 'Falsa',
        numero : 123
    }
}



function desTructuracionObjeto ({ aC:apellido , dC:direccion}){
    // let{nc:nombre, aC:apellido,dC:direccion} = obj
    let{nc:calle, aC:numero} = direccion
    // console.log(`${},${},${}`)
    console.log(`${apellido},${direccion},${calle},${numero}`)
}


console.log('Funciona para la entdad persona  : desTructuracionObjeto ({ aC:apellido , dC:direccion}){')
desTructuracionObjeto ( persona)

const persona2 = {
    nC : "Pablo",
    aC : "Perez",
    dC : 35 ,
    direccion : {
        calle : 'Falsa',
        numero : 123
    }
}
const persona3 = [persona,persona2]

console.log('si creamos : const persona3 = [persona,persona2]')
console.log('desTructuracionObjeto ( persona3) , No funciona')
desTructuracionObjeto ( persona3)


console.log('como se deberia definir? es posible o es imposible destructurar con alias cunado se envia n entidades')