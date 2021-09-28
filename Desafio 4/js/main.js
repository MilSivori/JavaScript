console.log('Desafio de JS numero 4');
console.log('Cee-Lo');

//const jugador1 = prompt('Ingresa el Nombre del Jugador1');
//const jugador2 = prompt('Ingresa el Nombre del Jugador2');
const jugador1 = 'pipo'
const jugador2 = 'machiner'


let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;
let dado3 = Math.floor(Math.random() * 6) + 1;
let puntaje1 = 0;
let puntaje2 = 0;

const lanzarDados = () => {
    do {
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        dado3 = Math.floor(Math.random() * 6) + 1;
        console.log(`salió: ${dado1} ${dado2} ${dado3}`)
    } while (dado1 != dado2 && dado1 != dado3 && dado2 != dado3);
};
const puntuacion = () => {
    if (puntaje1 == 0) {
        if (dado1 == dado2) {
            puntaje1 = dado3
            console.log(`El puntaje de ${jugador1} es ${dado3}`)
            return puntaje1
        } else if (dado1 == dado3) {
            puntaje1 = dado2
            console.log(`El puntaje de ${jugador1} es ${dado2}`)
            return puntaje1
        } else {
            puntaje1 = dado1
            console.log(`El puntaje de ${jugador1} es ${dado1}`)
            return puntaje1
        }
    } else {
        if (dado1 == dado2) {
            puntaje2 = dado3
            console.log(`El puntaje de ${jugador2} es ${dado3}`)
            return puntaje2
        } else if (dado1 == dado3) {
            puntaje2 = dado2
            console.log(`El puntaje de ${jugador2} es ${dado2}`)
            return puntaje2
        } else {
            puntaje2 = dado1
            console.log(`El puntaje de ${jugador2} es ${dado1}`)
            return puntaje2
        }
    }
};
const declararGanador = () => {
    if (puntaje1 > puntaje2) {
        return jugador1
    } else {
        return jugador2
    }
};
const control = () => {
    if (puntaje1 == puntaje2) {
        puntaje1 = 0;
        puntaje2 = 0;
        console.log('hay un empate, desempatando');
        lanzarDados();
        puntuacion();
        lanzarDados();
        puntuacion();
        return control();
    } else {
        return declararGanador();
    };
};
lanzarDados();
puntuacion();
lanzarDados();
puntuacion();
control();
console.log('el ganador es ', declararGanador())