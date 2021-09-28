console.log('desafio 4')

const jugador1 = 'Milton';
const jugador2 = 'Sivori';

let determinarPuntuacion = (puntaje) => {
    let = puntaje;
    if (dado1 != dado2) {
        dado3 = puntaje;
        return puntaje;
    } else if (dado1 != dado3) {
        dado2 = puntaje;
        return puntaje;
    } else {
        dado1 = puntaje;
        return puntaje
    }
}

let lanzarDados = () => {
    let dado1;
    let dado2;
    let dado3;
    do {
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        dado3 = Math.floor(Math.random() * 6) + 1;

    } while (dado1 != dado2 && dado1 != dado3 && dado2 != dado3);
    return determinarPuntuacion(puntaje)
}