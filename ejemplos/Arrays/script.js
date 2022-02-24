let top10Ordenado;
let listadoJugadores = [
  "Matias", "Ricardo", "Lucía", "Jorgelina", "Isabella","Lisando", "Milo", "Julieta", "Noel", "Yanina", "Lourdes",
];

let jugador = prompt(
  "Bienvenid@ al top 10! Ingresa tu nombre :) o ESC para salir"
);

if (jugador != "ESC") {
  listadoJugadores.push(jugador);
  if (listadoJugadores.length > 10) {
    let top10 = listadoJugadores.slice(0, 10);
    //    top10Ordenado = top10.join("\n");

    //muestra todos los elementos del array top10 separados por un espacio

    for (let i = 0; i < 10; i++) {
      alert(`La posición ${i} corresponde a ${top10[i]}`);
    }
  }
} else {
  alert("Que pena, no quedaste registrad@ en el top 10! :(");
}