console.log('%cDesafio de JS numero 9', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cCee-Lo', "color: green; font-weight: bold; font-size: 1.1rem");

//objetos con info del jugador
class Jugador {
    constructor(nombre, edad, puntaje, victorias) {
        this.nombre = nombre;
        this.puntos = puntaje;
        this.victorias = victorias;
    }
}

const jugadores = [];

function agregarJugador(i) {
    const competidor = new Jugador(document.getElementsByTagName("input")[i].value, 0, 0)
    jugadores.push(competidor);
}

document.getElementsByTagName("button")[1].addEventListener("click", (e) => {
    e.preventDefault();
    agregarJugador(0);
    document.getElementsByTagName('h3')[0].textContent = "Resultado " + jugadores[0].nombre;
})
document.getElementsByTagName("button")[2].addEventListener("click", (e) => {
    e.preventDefault();
    agregarJugador(1);
    document.getElementsByTagName('h3')[1].textContent = "Resultado " + jugadores[1].nombre;
})


// Generador de bienvenidas random. Modifica el primer 'p'
let bienvenidaRandom = () => {
    let welcome
    num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            welcome = "Bienvenido, viajero. Toma una copa de sake y juguemos un rato"
            break
        case 2:
            welcome = "Hola, pequeño saltamontes, sientate y juguemos"
            break
        case 3:
            welcome = "Tienes dados o te presto los mios?"
            break
    }
    return welcome
}


document.getElementsByTagName('p')[0].textContent = bienvenidaRandom()

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
};
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
const desempatar = () => jugadores[0].puntaje === jugadores[1].puntaje;

//determinar ganador
const ganador = () => {
    if (jugadores[0].puntaje > jugadores[1].puntaje) {
        jugadores[0].victorias++;
        console.log(`%cGanó ${jugadores[0].nombre}!`, "color: darkgreen; font-weight: bold")
    } else {
        jugadores[1].victorias++;
        console.log(`%cGanó ${jugadores[1].nombre}!`, "color: darkgreen; font-weight: bold")
    }
}

//para seguir jugando (Ya se que no te gustan las funciones recursivas pero soy asi! XD)
const seguirJugando = () => {
    if (confirm("jugar de nuevo?")) {
        jugar();
    } else {
        victorioso();
    }
};

//una nueva function para determinar el ganador final
const victorioso = () => {
    if (jugadores[0].victorias > jugadores[1].victorias) {
        console.log(`%cEl ganador final es: ${jugadores[0].nombre}!`, "color: white; font-weight: bold; background-color: blue; font-size: 1.2rem")
    } else if (jugadores[0].victorias < jugadores[1].victorias) {
        console.log(`%cEl ganador final es: ${jugadores[1].nombre}!`, "color: white; font-weight: bold; background-color: blue; font-size: 1.2rem")
    } else {
        console.log("No hubo ganador :(, que perdida de tiempo")
    }
};


// Y este seria el juego completo
let jugar = () => {
    for (i = 0; i < jugadores.length; i++) {
        jugadores[i].puntaje = turno();
        mostrarEnPantalla(i);
        console.log(`El puntaje de ${jugadores[i].nombre} es ${jugadores[i].puntaje}`);
    }
    while (desempatar()) {
        console.log("%cHUBO UN EMPATE! A DESEMPATAR:", "color: red; font-size:1.2rem")
        for (i = 0; i < jugadores.length; i++) {
            jugadores[i].puntaje = turno();
            mostrarEnPantalla(i);
            console.log(`El puntaje de ${jugadores[i].nombre} es ${jugadores[i].puntaje}`);
        }
    };
    ganador();
    seguirJugando();

}


//con esto muestro los resultados en la pantalla, del jugador 1 y 2
let mostrarEnPantalla = (i) => {
    switch (jugadores[i].puntaje) {
        case 1:
            document.getElementsByTagName('img')[i + 1].setAttribute("src", "img/dice_small_1.png");
            break;
        case 2:
            document.getElementsByTagName('img')[i + 1].setAttribute("src", "img/dice_small_2.png");
            break;
        case 3:
            document.getElementsByTagName('img')[i + 1].setAttribute("src", "img/dice_small_3.png");
            break;
        case 4:
            document.getElementsByTagName('img')[i + 1].setAttribute("src", "img/dice_small_4.png");
            break;
        case 5:
            document.getElementsByTagName('img')[i + 1].setAttribute("src", "img/dice_small_5.png");
            break;
        case 6:
            document.getElementsByTagName('img')[i + 1].setAttribute("src", "img/dice_small_6.png");
            break;
    }
}
document.getElementsByTagName('button')[0].addEventListener("click", jugar);