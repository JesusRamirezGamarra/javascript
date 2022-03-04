let componentes = [10, 20, 30, 40,50,60,70]
let ordenes = [60,40,120,60]


// let componentes = [294, 300, 492, 595, 696, 798, 996, 1982, 1988, 1998, 1998, 2268, 2591, 2710, 3476, 3688, 4998, 5095, 6630, 43593]
// let ordenes = [21720,12501,9372]


function Combinatoria(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    let total = (datos.reduce((a, b, c) => a + b , 0))
    console.log('Suma : ',total);


    // let total2 = (datos.map((a, b) => a + b , 0))
    // console.log('Suma : ',total2);

    return datos.reduce((previousValueREDUCE, currentValueREDUCE) =>
                            // {
                                previousValueREDUCE.concat(
                                            previousValueREDUCE.map(currentValueMAP => 
                                                                        [currentValueREDUCE].concat(currentValueMAP)
                                                                )
                                ),
                                [[]]
                            // }
                         ).filter(item => {
                            //  console.log(item)
                            //  return item > 40
                            let total = (item.reduce((a, b, c) => a + b , 0))


                            // console.log(item , ' Suma : ',total);
                            // if(total == 90)
                            //     return true;
                            // else 
                            //     return false 
                            if ( ordenes.find(o => o == total) == null ) return false;  
                            else return true;


                         })

    // return datos.reduce((a, v) => a.concat(
                    // a.map(d => [v].concat(d))
                    // ), [[]])
}

function CombinatoriaArray(datos,componentes,ordenes) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }
    let totalFactura = (componentes.reduce((a, b, c) => a + b , 0))
    console.log('Suma : ',totalFactura);
    let nroFasctura = ordenes.length

    // return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
    return datos.reduce((a, v) => a.concat(
                                        a.map(d => [v].concat(d))
                                        ), [[]]
                        ).filter(item => {
                            // let total = (item.reduce((a, b, c) => parseFloat(a) + parseFloat(b) , 0))
                            // console.log(item , ' Suma : ',total);
                            if(nroFasctura != item.length)
                                return false;
                            else {
                                // return true;
                                let total = 0
                                for (let i = 0; i < item.length; i++){
                                    total += (item[i].reduce((a, b, c) => a + b , 0))
                                    // console.log('--------- : ',total);
                                }
                                //  console.log(item , ' Suma : ',total);
                                if ( totalFactura== total ) {
                                    // console.log(item);
                                    // let parrafoById = document.getElementById("divFacturas") // es indistinto accder usando comillas simples o dobles
                                    // parrafoById.innerHTML += `<div> ${item} <div>`;
                                    // alert (item)
                                    return true; 
                                } 
                                else return false;
                            }
                        })
}





function CombinatoriaArrayFOR(datos,componentes,ordenes) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }
    let totalFactura = (componentes.reduce((a, b, c) => a + b , 0))
    console.log('Suma : ',totalFactura);
    let nroFasctura = ordenes.length

    for(let i = 0; i < 1000; i++){
        let parrafoById = document.getElementById("divFacturas") // es indistinto accder usando comillas simples o dobles
        parrafoById.innerHTML += `<div> i <div>`;
    }
    return 

}





try {
console.log (`Facturas ( ${componentes.length} ) : ${componentes}`)
console.log (`Ordenes consolidas ( ${ordenes.length} ) : ${ordenes}`)

const combinatoriaArray = Combinatoria(componentes)
console.log(`Combinatorias de Numeros validos : ( ${combinatoriaArray.length} ) `)
console.log(combinatoriaArray)


// CombinatoriaArray(combinatoriaArray,componentes,ordenes)

const combinatoriaArrayFinal = CombinatoriaArray(combinatoriaArray,componentes,ordenes)
console.log(`Combinatorias ordenes validas : ( ${combinatoriaArrayFinal.length} ) `)
console.log(combinatoriaArrayFinal)

// CombinatoriaArrayFOR(combinatoriaArray,componentes,ordenes)

} 
catch (error) {
    console.error(error);
 
  }

console.log ('FIN')