
let turn = 1;
let a1, a2, a3, a4, a5, a6,  b1, b2, b3,b4, b5, b6, c1, c2, c3 , c4, c5, c6;
let  bitacoraJugadadas=['X',0,'O',0];
let timerId = 0;
const tiempoNivel = 20000; //Segundos
let tiempo = tiempoNivel;
let nroJugadasMaxima= 10;
let nroJugadasX=0;
let nroJugadasO=0;
const arrayBidimensional = []
// function iniciarMatriz(){
    for (let i = 0; i < 6; i++) {
        arrayBidimensional[i] = new Array(5);
    }
    let i = 0
    let j = 0
    for( i = 0; i < 6; i++){
        for( j = 0; j < 6; j++){
            arrayBidimensional[i][j] = '-';
        }
    }
    console.log(arrayBidimensional)
    // }

//carga de los botones en variables
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");
a4 = document.getElementById("a4");
a5 = document.getElementById("a5");
a6 = document.getElementById("a6");

b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");

c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");
c4 = document.getElementById("c4");
c5 = document.getElementById("c5");
c6 = document.getElementById("c6");



// Forma 1
// const btns = document.querySelectorAll('.btn');
// for (const btn of btns) {
//   btn.addEventListener('click', function() {
//     console.log(this.value);
//   });
// }

//Forma 2
// Array.from(btns).forEach(function(btn) {
//     btn.addEventListener('click', function() {
//       console.log(this.value);
//     });
//   });
   
//Forma 3
// Array.from(btns).forEach(function(btn) {
//     if(btn.id!="reiniciar"){
//         btn.addEventListener('click', turno(btn.id));
//     }
// });

//Forma 4 : array de botones para agregar al funcion flecha en cada boton
const btns = document.querySelectorAll('.btn');
for(elemento of btns){
    let id = elemento.id
    elemento.onclick = () => { turno(id); };
}

//Para Generar : 
// a1.onclick = () => { turno("a1"); };
// a2.onclick = () => { turno("a2"); };
// ...
                      



function obtenerMatriz(elemento,operacion){
    columna = parseInt( elemento.substring(1,2) -1);
   if(elemento.substring(0,1) =='a'){
        arrayBidimensional[0][columna] = operacion;
    }else if(elemento.substring(0,1)=='b'){
        arrayBidimensional[1][columna] = operacion;
    }else if(elemento.substring(0,1)=='c'){
        arrayBidimensional[2][columna] = operacion;
    }else if(elemento.substring(0,1)=='d'){
        arrayBidimensional[3][columna] = operacion;
    }else if(elemento.substring(0,1)=='e'){
        arrayBidimensional[4][columna] = operacion;
    }else{
        arrayBidimensional[5][columna] = operacion;     
    }
    console.log(arrayBidimensional)
}

function turno(elemento) {
    

    if (turn == 1) {
        document.getElementById(elemento).disabled = true;
        document.getElementById(elemento).innerHTML = "X";
        turn = 0;
        nroJugadasX++;
        let indice = bitacoraJugadadas.findIndex(operador => operador == "X" )
        bitacoraJugadadas.splice(indice+1,1,nroJugadasX)
        // console.log(bitacoraJugadadas)
        obtenerMatriz(elemento,'X')
    } else {
        document.getElementById(elemento).disabled = true;
        document.getElementById(elemento).innerHTML = "O";
        turn = 1;
        nroJugadasO++;
        let indice = bitacoraJugadadas.findIndex(operador => operador == "O" )
        bitacoraJugadadas.splice(indice+1,1,nroJugadasO)
        // console.log(bitacoraJugadadas)
        obtenerMatriz(elemento,'O')
    };

    ganador(); 
   
};

function verificarGanador(turn){
    const operador = (turn == '0')?'X':'O';
    let contador =0;    
    let i = 0   // fila
    let j = 0   // columna

    //Analisis horizontal
    for( i = 0; i < 6; i++){
        for( j = 0; j < 6; j++){
            if(arrayBidimensional[i][j] == operador){
                contador++;
                if(contador>=3){
                    return true;
                }
            }
            else{
                contador=0;
            }
        }
        contador =0;
    }
    
    //Analisis Vertical
    contador =0;
    for( j = 0; j < 6; j++){
        for( i = 0; i < 6; i++){
            if(arrayBidimensional[i][j] == operador){
                contador++;
                if(contador>=3){
                    return true;
                }
            }
            else{
                contador=0;
            }
        }
        contador =0;
    }

    //Analisis Diagonal
    contador =0;
    for( i = 0; i < 6; i++){
        for( j = 0; j < 6; j++){
            if(arrayBidimensional[i][j] == operador){
                contador++;
                if(contador>=3){
                    return true;
                }
            }
            else{
                contador=0;
            }
        }
        contador =0;
    }



    // const btns = document.querySelectorAll('.btn');
    // const fila = ['a','b','c','d','e','f']
    // let ganador = false;
    // let contador =0;

    // for(elemento of btns){
    //     if(elemento.id.substring(0,1) == 'a'){
    //         if(elemento.innerText!== 'X' ){
    //             contador ++
    //         }
    //         else{
    //             contador =0;
    //         }
    //     }
    //     else if(elemento.id.substring(0,1) == 'b'){
    //         if(elemento.innerText!== 'X' ){
    //             contador ++
    //         }
    //         else{
    //             contador =0;
    //         }
    //     }
    // }
}


 
function ganador() {

    // verificarGanador(turn);

    // if (
    //         ((a1.innerText !== '-') && (a1.innerHTML === a2.innerHTML) && (a2.innerHTML === a3.innerHTML))||
    //         ((b1.innerText !== '-') && (b1.innerHTML === b2.innerHTML) && (b2.innerHTML === b3.innerHTML))||
    //         ((c1.innerText !== '-') && (c1.innerHTML === c2.innerHTML) && (c2.innerHTML === c3.innerHTML))||
    
    //         ((a1.innerText !== '-') && (a1.innerHTML === b1.innerHTML) && (b1.innerHTML === c1.innerHTML))||
    //         ((a2.innerText !== '-') && (a2.innerHTML === b2.innerHTML) && (b2.innerHTML === c2.innerHTML))||
    //         ((a3.innerText !== '-') && (a3.innerHTML === b3.innerHTML) && (b3.innerHTML === c3.innerHTML))||
    
    //         ((a1.innerText !== '-') && (a1.innerHTML === b2.innerHTML) && (b2.innerHTML === c3.innerHTML))||
    //         ((c1.innerText !== '-') && (c1.innerHTML === b2.innerHTML) && (b2.innerHTML === a3.innerHTML))
    //     )
    if(verificarGanador(turn))
        {
         
        if (turn == 0) {
            setTimeout(() => { alert(`Gana el jugador ${bitacoraJugadadas[0]}  !!! , con un total de :  ${bitacoraJugadadas[1]} jugadas`); }, 100); 
            setTimeout(() => { location.reload(); },1000);
            clearInterval(timerId);
            tiempo=tiempoNivel;
            puntos=0;
            timerId =0;
            nroJugadasX =0;
            nroJugadasO =0;

        } else if (turn == 1) {
            setTimeout(() => { alert(`Gana el jugador ${bitacoraJugadadas[2]}  !!! , con un total de :  ${bitacoraJugadadas[3]} jugadas`); }, 100); 
            setTimeout(() => { location.reload(); },1000);
            clearInterval(timerId);
            tiempo=tiempoNivel;
            puntos=0;
            timerId =0;
            nroJugadasX =0;
            nroJugadasO =0;

        };

    };
}

function restarTiempo(){
    tiempo--;
    document.getElementById("jugadas").innerHTML =  "<br># Jugadas Permitidas : " + nroJugadasMaxima + 
                                                    "<br> Jugardor X: " + nroJugadasX + " Jugador Y: " + nroJugadasO ;
    document.getElementById("tiempo").innerHTML = "<br>Tiempo : " + tiempo ; 
    if( tiempo ==0 || 
        nroJugadasX >= nroJugadasMaxima ||  
        nroJugadasO >= nroJugadasMaxima  ){ 
        clearInterval(timerId);
        alert("continua intentando , muy pronto subiras de nivel")
        tiempo=tiempoNivel;
        puntos=0;
        timerId =0;
        nroJugadasX =0;
        nroJugadasO =0;
    }

}
 timerId =setInterval(restarTiempo,500);


function iniciarMatriz(){
    // for (let i = 0; i < 6; i++) {
    //     arrayBidimensional[i] = new Array(5);
    // }
    let i = 0
    let j = 0
    for( i = 0; i < 6; i++){
        for( j = 0; j < 6; j++){
            arrayBidimensional[i][j] = '-';
        }
    }
    console.log(arrayBidimensional)
}

function iniciar(){

    iniciarMatriz();
    // retirando los elemento del Array antes de iniciar
    bitadoraJugadadas=['X',0,'O',0];
    for ( let elemento of bitadoraJugadadas){
        bitacoraJugadadas.pop();
    }

    for ( let i =0 ; i<= 3;i++){
        if(i==0){
            bitadoraJugadadas.push('X');
        }else if (i==2){
            bitadoraJugadadas.push('O');
        }else{
            bitadoraJugadadas.push(0)
        }
    }

    // location.reload();
}

