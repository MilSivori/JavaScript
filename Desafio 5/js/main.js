console.log('%cDesafio de JS numero 4', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cCee-Lo', "color: green; font-weight: bold; font-size: 1.1rem");

let puntaje = 0

//objetos con info del jugador
class Jugador {
    constructor(nombre, edad, puntaje, victorias) {
        this.nombre = nombre;
        this.edad = edad;
        this.puntos = puntaje;
        this.victorias = victorias;
    }
}

const jugador1 = new Jugador("Pipo", 8, 0, 0);
const jugador2 = new Jugador("Machiner", 35, 0, 0);

//funcion para determinar el jugador que lanzara primero, deberia ser el jugador mas joven (TODAVIA NO IMPLEMENTADO =P)
const determinarPrimerLanzador = () => jugador1.edad < jugador2.edad ? jugador1.nombre : jugador2.nombre;

// funcion para lanzar dados
let lanzarDado = () => Math.floor(Math.random() * 6) + 1;
//funcion para comparar y para determinar puntaje
let determinarPuntuacion = (dado1, dado2, dado3) => {
    if (dado1 == dado2) {
        return dado3;
    } else if (dado1 == dado3) {
        return dado2;
    } else {
        return dado1;
    }
}
let turno = () => {
    let dado1;
    let dado2;
    let dado3;
    do {
        dado1 = lanzarDado();
        dado2 = lanzarDado();
        dado3 = lanzarDado();
        console.log(`Salió: ${dado1} ${dado2} ${dado3}`);
    } while (dado1 != dado2 && dado1 != dado3 && dado2 != dado3);
    let puntos = determinarPuntuacion(dado1, dado2, dado3);
    return puntos;
}

//chequear empates
const desempatar = () => jugador1.puntaje === jugador2.puntaje;

//determinar ganador
const ganador = () => {
    if (jugador1.puntaje > jugador2.puntaje) {
        jugador1.victorias++;
        console.log(`%cGanó ${jugador1.nombre}!`, "color: darkgreen; font-weight: bold")
    } else {
        jugador2.victorias++;
        console.log(`%cGanó ${jugador2.nombre}!`, "color: darkgreen; font-weight: bold")
    }
}

//para seguir jugando (Ya se que no te gustan las funciones recursivas pero soy asi! XD)
const seguirJugando = () => {
    if (confirm("jugar de nuevo?")) {
        jugar();
    } else {
        victorioso();
    }
}

//una nueva function para determinar el ganador final
const victorioso = () => {
    if (jugador1.victorias > jugador2.victorias) {
        console.log(`%cEl ganador final es: ${jugador1.nombre}!`, "color: white; font-weight: bold; background-color: blue; font-size: 1.2rem")
    } else if (jugador1.victorias < jugador2.victorias) {
        console.log(`%cEl ganador final es: ${jugador2.nombre}!`, "color: white; font-weight: bold; background-color: blue; font-size: 1.2rem")
    } else {
        console.log("No hubo ganador :(, que perdida de tiempo")
    }
}


// Y este seria el juego completo
let jugar = () => {
    jugador1.puntaje = turno();
    console.log(`El puntaje de ${jugador1.nombre} es ${jugador1.puntaje}`);
    jugador2.puntaje = turno();
    console.log(`El puntaje de ${jugador2.nombre} es ${jugador2.puntaje}`);
    while (desempatar()) {
        console.log("%cHUBO UN EMPATE! A DESEMPATAR:", "color: red; font-size:1.2rem")
        jugador1.puntaje = turno();
        console.log(`El puntaje de ${jugador1.nombre} es ${jugador1.puntaje}`);
        jugador2.puntaje = turno();
        console.log(`El puntaje de ${jugador2.nombre} es ${jugador2.puntaje}`);
    }
    ganador();
    seguirJugando();
}


jugar();