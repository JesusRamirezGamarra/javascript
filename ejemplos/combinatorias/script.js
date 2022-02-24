
// let componentes = [
//     10
//     , 20
//     , 30
//     , 40

// ]

// let ordenes = [
//     20
//     ,40
// ]





let componentes = [
    294
    , 300
    , 492
    , 595
    , 696
    , 798
    , 996
    , 1982
    , 1988
    , 1998
    , 1998
    , 2268
    , 2591
    , 2710
    , 3476
    , 3688
    , 4998
    , 5095
    , 6630
    , 43593
]

let ordenes = [
    21720
    ,12501
    ,9372
]


// 758 Bytes
   
// Ejercicio 820: Obtener todas las combinaciones posibles de los datos contenidos en un arreglo.

// potencia de un conjunto P(A)
// {1, 2, 3} = {{}, {1}, {2}, {3}, {1, 2}, {2, 3}, {1, 3}, {1, 2, 3}}

function obtenerConjuntoPotencia(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    // return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
    return datos.reduce((a, v) => a.concat(
                                        a.map(d => [v].concat(d))
                                        ), [[]]);
}

function obtenerConjuntoPotenciaAcotado(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    // return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))), [[]]);
    // return datos.reduce((a, v) => a.concat(
    //                                         a.map(d => [v].concat(d))
    //                                     ), [[]]
    //                     );


    let datos01 = [0,1,2,3]
    let arrya01 = datos01.reduce(
                                    (valorPrevio,ValorACtual) => valorPrevio.concat(ValorACtual)
                                )
    consoloe.log(arrya01)

    let datos2 =[ [0,1],[1,2],[2,3]]
    //return datos.map((d,v) => [v].concat(d))
    return datos.reduce((a, v) => a.concat( datos
                                                    ), [[]]
                                );
}




try {
    // console.log(obtenerConjuntoPotencia([1, 2, 3]));
    const combinatoriaArray = obtenerConjuntoPotencia(componentes)
     console.log(combinatoriaArray)
    const combinatoriasArrayReducido = []
    let suma =0 
    for (let i=0 ;i<combinatoriaArray.length ;i++){
        for(let x=0;x<combinatoriaArray[i].length;x++ ){
            suma += combinatoriaArray[i][x];

        }
        // if(     suma == parseInt( ordenes[0] )|| 
        //         suma == parseInt( ordenes[1] ) || 
        //         suma == parseInt( ordenes[2] )
        //     ){
        //     combinatoriasArrayReducido.push(combinatoriaArray[i]);
        // }
        for (let z =0;z<ordenes.length;z++){
            if( suma == parseInt( ordenes[z] )){
                combinatoriasArrayReducido.push(combinatoriaArray[i],suma);
                break;
            }
        }
        suma =0;
        
    }
    console.log(combinatoriasArrayReducido);


    console.log(obtenerConjuntoPotencia([1, 2, 3]));
    // console.log(obtenerConjuntoPotenciaAcotado([1, 2, 3]));
    // const combinatoriaArrayOrdenes = obtenerConjuntoPotencia(combinatoriasArrayReducido)
    // console.log(combinatoriaArrayOrdenes);

    // return datos.reduce((a, v) => a.concat(
    //                                         a.map(d => [v].concat(d))
    //                                     ), [[]]
    //                     );

        let resultado 

        const combArray = [1, 2, 3];
        resultado = combArray.reduce((a, v) => a.concat(
                                                    a.map(d => [v].concat(d))
                                                ), [[]]
                                );
        console.log(resultado)

        const numArr = [1, 2, 3, 4, 5, 6, 7];
        resultado = numArr.map( ( aNum, bnum) => {
                return aNum ;
        //    return 
        });
        console.log(resultado)
        // Resultado: [1, 4, 9, 16, 25, 36, 49]

        // const myArray = [3, 9,12, 23, 99, 1];
        const myArray = ['3', '9','12'];
        resultado = myArray.reduce((total, num) => {
                return total + num;
            });
        console.log(resultado)
        // Resultado: 147 = 3 + 9 + 12 + 23 + 99 + 1    


    // [[], [1], [2], [3], [1, 2], [2, 3], [1, 3], [1, 2, 3]]
} catch (e) {
    console.log(`Error: ${e.message}`);
}



// https://platzi.com/blog/uso-de-filter-map-y-reduce/?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zRQ1JzdzLWdWkuKZFbudtms1kZpjRZ_hh5TYfvLyy-Z1o7TdX5GFTxoCyy0QAvD_BwE&gclsrc=aw.ds

// const myArray = [-9, 9, 10, 1, -12, 12, 5, 29, 8, 12, -5];
// //Función para determinar si un número es par y positivo.
// const isOddAndPositive = (number) => {
// 	if (number %2 === 0 && number > 0) {
// 		return true;
// 	}
// 	return false;
// }
// myArray.filter(isOddAndPositive);
// //Resultado:  [10, 12, 8, 12]


// const myArray = [-9, 9, 10, 1, -12, 12, 5, 29, 8, 12, -5];
// myArray.filter((number) => {
// 	if (number %2 === 0 && number > 0) {
// 		return true;
// 	}
// 	return false;
// });


// const numArr = [1, 2, 3, 4, 5, 6, 7];
// numArr.map(aNum => {
// 	return aNum * aNum;
// });
// // Resultado: [1, 4, 9, 16, 25, 36, 49]

// const myArray = [3, 9,12, 23, 99, 1];
// myArray.reduce((total, num) => {
// return total + num;
// });
// // Resultado: 147 = 3 + 9 + 12 + 23 + 99 + 1


// componentes.forEach(myFunction)

// function myFunction(item, index, arr) {
//     arr[index] = item * 10;
//     console.log(arr[index]);
//   }