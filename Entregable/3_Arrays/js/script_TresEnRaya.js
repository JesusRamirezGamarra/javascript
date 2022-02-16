
var turn = 1;
var a1, a2, a3, b1, b2, b3, c1, c2, c3;

//carga de los botones en variables
a1 = document.getElementById("a1");
a2 = document.getElementById("a2");
a3 = document.getElementById("a3");
b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
c1 = document.getElementById("c1");
c2 = document.getElementById("c2");
c3 = document.getElementById("c3");

 /*invoca al metodo onclick que crea una funcion flecha y llama a la 
 funcion que modifica el casillero segun el parametro */

a1.onclick = () => { turno("a1"); };
a2.onclick = () => { turno("a2"); };
a3.onclick = () => { turno("a3"); };
b1.onclick = () => { turno("b1"); };
b2.onclick = () => { turno("b2"); };
b3.onclick = () => { turno("b3"); };
c1.onclick = () => { turno("c1"); };
c2.onclick = () => { turno("c2"); };
c3.onclick = () => { turno("c3"); };


function turno(x) {
    if (turn == 1) {
        document.getElementById(x).innerHTML = "X";
        document.getElementById(x).disabled = true;
        turn = 0;
    } else {
        document.getElementById(x).innerHTML = "O";
        document.getElementById(x).disabled = true;
        turn = 1;
    };

    ganador(); 
   
};//Final Funcion
 
function ganador() {
    if (((a1.innerText !== '-') && (a1.innerHTML === a2.innerHTML) && (a2.innerHTML === a3.innerHTML))||
        ((b1.innerText !== '-') && (b1.innerHTML === b2.innerHTML) && (b2.innerHTML === b3.innerHTML))||
        ((c1.innerText !== '-') && (c1.innerHTML === c2.innerHTML) && (c2.innerHTML === c3.innerHTML))||
 
        ((a1.innerText !== '-') && (a1.innerHTML === b1.innerHTML) && (b1.innerHTML === c1.innerHTML))||
        ((a2.innerText !== '-') && (a2.innerHTML === b2.innerHTML) && (b2.innerHTML === c2.innerHTML))||
        ((a3.innerText !== '-') && (a3.innerHTML === b3.innerHTML) && (b3.innerHTML === c3.innerHTML))||
  
        ((a1.innerText !== '-') && (a1.innerHTML === b2.innerHTML) && (b2.innerHTML === c3.innerHTML))||
        ((c1.innerText !== '-') && (c1.innerHTML === b2.innerHTML) && (b2.innerHTML === a3.innerHTML))){
         
        if (turn == 0) {
            setTimeout(() => { alert("Gana el jugador X !!!"); }, 100); 
            setTimeout(() => { location.reload(); },1000);
        } else if (turn == 1) {
            setTimeout(() => { alert("Gana el jugador O !!!"); }, 100); 
            setTimeout(() => { location.reload(); },1000);
        };

    };//Final if 
}
