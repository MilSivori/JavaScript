console.log('%cDesafio de JS numero 8', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cCee-Lo', "color: green; font-weight: bold; font-size: 1.1rem");

//objetos con info del jugador
class Jugador {
    constructor(nombre, edad, puntaje, victorias) {
        this.nombre = nombre;
        this.edad = edad;
        this.puntos = puntaje;
        this.victorias = victorias;
    }
}
//borrar esto y usar la parte comentada de abajo
const jugador1 = new Jugador("Jackie Chan", 67, 0, 0)
const jugador2 = new Jugador("Jet-Li", 58, 0, 0)

//Aca va el Array con los jugadores, esto tambien se borra si se usa lo de abajo
const jugadores = [jugador1, jugador2];

/* ----------------------------------COMENTADO PARA MAYOR DINAMISMO A LA HORA DEL TESTEO------------------------------------->
//Aca va el Array con los jugadores
const jugadores = [];

for (i = 1; i < 3; i++) {
    const competidor = new Jugador(prompt(`Ingresa el nombre del Jugador ${i}`), Number(prompt(`Ingrese su edad`)), 0, 0)
    jugadores.push(competidor);
};
<----------------------------------------------------------------------------------------------------------------------------*/

//Con esto modifico el orden del array para hacer que el jugador mas joven sea el primero en lanzar

jugadores.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1;
    };
    if (a.edad > b.edad) {
        return 1;
    };
    return 0;
});

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

document.getElementsByTagName('h3')[0].textContent = "Resultado " + jugadores[0].nombre;
document.getElementsByTagName('h3')[1].textContent = "Resultado " + jugadores[1].nombre;
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
jugar();