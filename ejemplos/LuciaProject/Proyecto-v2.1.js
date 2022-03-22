//variable que da comienzo al bucle while para iniciar el juego
let jugar = true;
//variable para definir 3 intentos
let intento = 0;

//toma el botón para dar comienzo al juego
let btnJugar = document.getElementById("btnJugar");
//toma el boton para lanzar la palabra arriesgada por el jugador
let btnEnviar = document.getElementById("btnEnviar");
//toma el contenedor small de puntaje para ir cargando el puntaje adquirido por el jugador
let puntaje = document.getElementById("puntaje");
//esta variable se toma para verificar aciertos
let busqueda;
//esta variable se utiliza para ir cargando el array de palabrasAdivinadas con la función quitarPalabraAcertada()
let palabraAcertada;

let definicion = document.getElementById("definicion");
let divInputPalabra = document.getElementById("divInputPalabra");

let palabraAleatoria;
let intentoEnHtml = document.getElementById("intento");
let palabraAleatoriaConGuiones;
let musica = document.getElementById("musica");
musica.volume = 0.0;

function playAudio() {
  musica.play();
}

//*ARRAY DE OBJETOS PALABRAS
let opcionesPalabras = [];
//*ARRAY DE OBJETOS PALABRAS ADIVINADAS
let palabrasAdivinadas = [];
//*ARRAY DE PUNTAJE
let puntajeTotal = [];

class PalabraParaAdivinar {
  constructor(nombre, pista, nivel, puntos) {
    this.nombre = nombre;
    this.pista = pista;
    this.nivel = nivel;
    this.puntos = puntos;
  }
}

const sumarPuntos = (puntos) => {
  puntajeTotal.push(puntos);
  return puntajeTotal.reduce(
    (arrayDePuntaje, puntos) => arrayDePuntaje + puntos
  );
};

const quitarPalabraAcertada = (opciones, acierto) => {
  palabraAcertada = opciones.find(
    (objeto) => objeto.nombre === acierto.toUpperCase()
  );
  let indexOfPalabraAcertada = opcionesPalabras.indexOf(palabraAcertada);
  opcionesPalabras.splice(indexOfPalabraAcertada, 1);
  palabrasAdivinadas.push(palabraAcertada);
};

//!cuando pierde se resetean los intentos a cero:
const resetearIntentos = (parametro) => {
  parametro == 0;
};

opcionesPalabras.push(
  new PalabraParaAdivinar(
    "CONCATENACION",
    "Proceso de anexar una cadena al final de otra cadena",
    "Principiante",
    100
  )
);

opcionesPalabras.push(
  new PalabraParaAdivinar(
    "SCRIPT",
    "Etiqueta con la cual podemos integrar código JavaScript al HTML",
    "Principiante",
    100
  )
);

opcionesPalabras.push(
  new PalabraParaAdivinar(
    "PROMPT",
    "¿Qué instrucción utilizamos para capturar una entrada? ...()",
    "Principiante",
    100
  )
);

opcionesPalabras.push(
  new PalabraParaAdivinar(
    "LOCAL",
    "Cuando una variable se encuentra declarada entre las llaves ({}) de una función, ¿de qué tipo es?",
    "Principiante",
    100
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "LET",
    "¿Con qué palabra reservada tengo que declarar una variable de alcance local que pueda ser reasignada?",
    "Principiante",
    100
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "STRING",
    "Cadena de caracteres y texto en JavaScript.",
    "Medio",
    200
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "CONDICIONAL",
    "La palabra reservada -if- la utilizamos para crear una estructura...",
    "Medio",
    200
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "GLOBAL",
    "La palabra reservada var es una variable de tipo...",
    "Medio",
    200
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "CONTINUE",
    "¿Qué sentencia empleamos para saltar una iteración?",
    "Medio",
    200
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "BREAK",
    "¿Qué sentencia empleamos para interrumpir un ciclo?",
    "Medio",
    200
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "OPERADORES",
    "¿Qué son: == / >= / >= / === ?",
    "Medio",
    200
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "ALGORITMO",
    "Permite manipular datos mediante una secuencia organizada de pasos o procedimientos.",
    "Dificil",
    300
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "FUNCIONES",
    "Las usamos para agrupar instrucciones que realizan una tarea concreta",
    "Dificil",
    300
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "RETURN",
    "Palabra reservada para generar un valor de retorno al llamar una función",
    "Dificil",
    300
  )
);
opcionesPalabras.push(
  new PalabraParaAdivinar(
    "TRUTHY",
    "Valores convertibles a true.",
    "Extremo",
    500
  )
);
btnJugar.onclick = () => {
  playAudio();
  btnEnviar.disabled = false;
  palabraAleatoria =
    opcionesPalabras[Math.floor(Math.random() * opcionesPalabras.length)];

  //*SI EL JUGADOR GANA:
  if (palabrasAdivinadas.length === 15 && palabraAleatoria === undefined) {
    btnJugar.innerText = `JUGAR DE NUEVO`;
    btnEnviar.disabled = true;

    swal({
      icon: "success",
      title: "GANASTE",
      text: "felicitaciones :) NERRRRRDO!",
      buttons: false,
      timer: 3500,
    });

    btnJugar.onclick = () => {
      opcionesPalabras.push(palabrasAdivinadas);
      puntajeTotal = [];
      location.reload();
    };
  }
  palabraAleatoriaConGuiones = "_".repeat(palabraAleatoria.nombre.length);

  intentoEnHtml.innerHTML = `Intentos fallidos: ${intento} de 5`;
  btnJugar.innerText = `SIGUIENTE PALABRA`;
  definicion.innerText = `${palabraAleatoria.pista} \n ${palabraAleatoriaConGuiones}`;
  divInputPalabra.innerHTML = `<input class="text-center p-2 input" type="text" name="ingresarPalabra" id="inputPalabra" placeholder="INGRESE UNA LETRA" maxlength="1" autofocus>`;
};

//esto tengo q reemplazarlo por el teclado
btnEnviar.onclick = () => {
  let letraIngresada = document.getElementById("inputPalabra").value;
  let letraIngresadaMayus = letraIngresada.toUpperCase();
  for (let i = 0; i < palabraAleatoriaConGuiones.length; i++) {
    palabraAleatoria.nombre[i] === letraIngresadaMayus &&
      (palabraAleatoriaConGuiones =
        palabraAleatoriaConGuiones.substring(0, i) +
        letraIngresadaMayus +
        palabraAleatoriaConGuiones.substring(i + 1));
  }

  // dentro del for anterior uso Operador lógico AND para reemplazar el siguiente condicional
  //   if (palabraAleatoria.nombre[i] === letraIngresadaMayus) {
  //     palabraAleatoriaConGuiones =
  //       palabraAleatoriaConGuiones.substring(0, i) +
  //       letraIngresadaMayus +
  //       palabraAleatoriaConGuiones.substring(i + 1);
  //   }
  // }
  definicion.innerText = `${palabraAleatoria.pista} \n ${palabraAleatoriaConGuiones}`;

  if (palabraAleatoriaConGuiones == palabraAleatoria.nombre) {
    busqueda = palabraAleatoria;
    btnEnviar.disabled = true;
    puntaje.innerHTML = `TU PUNTAJE: ${sumarPuntos(busqueda.puntos)}`;
    quitarPalabraAcertada(opcionesPalabras, busqueda.nombre);
  } else if (!palabraAleatoria.nombre.includes(letraIngresadaMayus)) {
    intento++;
    intentoEnHtml.innerHTML = `Intentos fallidos: ${intento} de 5`;

    //* Operador lógico AND
    intento === 5 &&
      ((definicion.innerText = "Perdiste :("),
      (btnJugar.innerText = `JUGAR DE NUEVO`),
      (btnEnviar.disabled = true),
      (intento = ""),
      (intento = 0));
  }
};

//************************************** */
//*****REGISTRO MEJORES PUNTAJES**********
//************************************** */
//por ahora es así, luego voy a ir modificando para que sea sólo top 5 de mejores puntajes

let registroTop5 = document.getElementById("btnTop5");
let contenedorTop5 = document.getElementById("contenedorTop5");

registroTop5.onclick = () => {
  contenedorTop5.innerHTML = `        
  <form class="row justify-content-center" id="formTop5">
      <input class="col-sm-4 text-center p-2" type="text" 
      name="nombreJugador" id="nombreJugador" placeholder="Tu Nombre"/>
      <button type="submit" class="btn col-sm-2">OK</button>
  </form>
  <button class="btn btn-sm btn-ver-top5 col-sm-3" id="botonTop5" >VER REGISTRO DE PUNTOS</button>
  <button class="btn btn-sm btn-ocultar col-sm-3 " id="btnOcultarTop5">OCULTAR</button>

  <div id="divTop5" class="row"></div>`;
  class Jugador {
    constructor(nombre, puntos) {
      this.nombre = nombre;
      this.puntos = puntos;
    }
  }

  let top5 = [];
  let puntajeTop5 = [];

  //sugar sintax = operador ternario:
  localStorage.getItem("JugadoresTop5")
    ? (top5 = JSON.parse(localStorage.getItem("JugadoresTop5")))
    : localStorage.setItem("JugadoresTop5", JSON.stringify(top5));

  //el operador ternario reemplaza este condicional:

  // if (localStorage.getItem("JugadoresTop5")) {
  //   top5 = JSON.parse(localStorage.getItem("JugadoresTop5"));
  // } else {
  //   localStorage.setItem("JugadoresTop5", JSON.stringify(top5));
  // }

  let formTop5 = document.getElementById("formTop5");
  let botonTop5 = document.getElementById("botonTop5");
  let divTop5 = document.getElementById("divTop5");
  let ocultarRegistroTop5 = document.getElementById("btnOcultarTop5");

  formTop5.onsubmit = (e) => {
    e.preventDefault();
    let nombreJugador = document.getElementById("nombreJugador").value;
    puntajeTop5.push(puntajeTotal);
    const jugador = new Jugador(nombreJugador, puntajeTop5);
    top5.push(jugador);

    localStorage.setItem("JugadoresTop5", JSON.stringify(top5));
    formTop5.reset();
  };

  botonTop5.onclick = () => {
    divTop5.innerHTML = "";
    top5.sort((a, b) => {
      if (a.puntos < b.puntos) {
        return 1;
      } else if (a.puntos > b.puntos) {
        return -1;
      } else {
        return 0;
      }
    });
    top5.slice(0, 4);

    puntaje = JSON.parse(localStorage.getItem("JugadoresTop5"))


    top5.forEach((jugadoresEnArray, indice) => {
      divTop5.innerHTML += `<div id="jugador${indice}" class="card border-secondary mb-3" style="max-width: 20rem;margin:10px">
        <div class="card-header"><h4>PUESTO NUMERO ${indice + 1} ${
        jugadoresEnArray.nombre
      }</h4>
        </div>
            <div class="card-body">
              <p class="card-title">Puntos: ${puntajeTop5[0]}</p>
              <button class="btn-sm" id="boton${indice}" >Eliminar registro</button>
            </div>
      </div>`;
    });

    top5.forEach((jugadoresEnArray, indice) => {
      document.getElementById(`boton${indice}`).onclick = () => {
        divTop5.removeChild(document.getElementById(`jugador${indice}`));
        let indiceArray = top5.findIndex(
          (jugador) => jugador.nombre == jugadoresEnArray.nombre
        );
        top5.splice(indiceArray, 1);
        localStorage.setItem("JugadoresTop5", JSON.stringify(top5));
      };
    });
  };
  ocultarRegistroTop5.onclick = () => {
    contenedorTop5.innerHTML = "";
  };
};

//PRONB


divInputPalabra.addEventListener('keydown',()=>{   
  let letraIngresada = document.getElementById("inputPalabra").value;
  let letraIngresadaMayus = letraIngresada.toUpperCase();
  for (let i = 0; i < palabraAleatoriaConGuiones.length; i++) {
    palabraAleatoria.nombre[i] === letraIngresadaMayus &&
      (palabraAleatoriaConGuiones =
        palabraAleatoriaConGuiones.substring(0, i) +
        letraIngresadaMayus +
        palabraAleatoriaConGuiones.substring(i + 1));
  }

  definicion.innerText = `${palabraAleatoria.pista} \n ${palabraAleatoriaConGuiones}`;

  if (palabraAleatoriaConGuiones == palabraAleatoria.nombre) {
    busqueda = palabraAleatoria;
    btnEnviar.disabled = true;
    puntaje.innerHTML = `TU PUNTAJE: ${sumarPuntos(busqueda.puntos)}`;
    quitarPalabraAcertada(opcionesPalabras, busqueda.nombre);
  } else if (!palabraAleatoria.nombre.includes(letraIngresadaMayus)) {
    intento++;
    intentoEnHtml.innerHTML = `Intentos fallidos: ${intento} de 5`;

    //* Operador lógico AND
    intento === 5 &&
      ((definicion.innerText = "Perdiste :("),
      (btnJugar.innerText = `JUGAR DE NUEVO`),
      (btnEnviar.disabled = true),
      (intento = ""),
      (intento = 0));
  }
  inputPalabra.value ="";
})
