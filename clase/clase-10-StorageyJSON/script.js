// localStorage.setItem("Saludo","HOLA");
// sessionStorage.setItem("Saludo","HOLA");

// console.log(    localStorage.getItem("Adios")   )
// console.log(    sessionStorage.getItem('Saludo')    )




localStorage.setItem("Saludo","HOLA");
localStorage.setItem("Uno","1");
localStorage.setItem("Despedida","Adios");


localStorage.removeItem("Uno");


for (let i=0;i<localStorage.length;i++){
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}


localStorage.clear()
