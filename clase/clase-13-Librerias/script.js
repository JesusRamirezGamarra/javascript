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

// desTructuracionObjeto ( persona)
console.log(persona?.Sexo ||'Como se llama')
console.log(personaCustom?.Sexo ||'Como se llama')
       

 swal({
    title: "¿Deseas Probar tu suerte ?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
})
.then((willDelete) => {
    if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        });
    } 
    })
.then((willDelete) => {
    if (willDelete) {
        console.log('mmm',willDelete)
    }
})
.then((willDelete) => {
    if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        });
    } 
    })
.then((willDelete) => {
    if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
        });
    } 
    })

