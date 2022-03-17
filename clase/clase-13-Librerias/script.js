
       

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

