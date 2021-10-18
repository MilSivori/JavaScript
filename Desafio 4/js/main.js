console.log('%cDesafio de JS numero 4', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cCee-Lo', "color: green; font-weight: bold; font-size: 1.1rem");

//const jugador1 = prompt('Ingresa el Nombre del Jugador1');
//const jugador2 = prompt('Ingresa el Nombre del Jugador2');

let dado1
let dado2
let dado3



class Jugador {
    constructor(nombre, edad, puntaje) {
        this.name = nombre
        this.edad = edad
        this.puntaje = puntaje
    }
    lanzardado() {
        return
    }
}
const jugador1 = new Jugador("pipo", 10, 0)
const jugador2 = new Jugador("Machiner", 32)


const determinarPrimerLanzador = () => {
    if (jugador1.edad <= jugador2.edad) {
        console.log("juega Primero ", jugador1.nombre)
        primero = jugador1.nombre
        jugador1.puntaje = 32
        console.log(jugador1.puntaje)
        return
    } else {
        console.log("juega Primero ", jugador2.nombre)
        primero = jugador2.nombre
        return dada
    }
}



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
            console.log(`El puntaje de ${jugador1.nombre} es ${dado3}`)
            return puntaje1
        } else if (dado1 == dado3) {
            puntaje1 = dado2
            console.log(`El puntaje de ${jugador1.nombre} es ${dado2}`)
            return puntaje1
        } else {
            puntaje1 = dado1
            console.log(`El puntaje de ${jugador1.nombre} es ${dado1}`)
            return puntaje1
        }
    } else {
        if (dado1 == dado2) {
            puntaje2 = dado3
            console.log(`El puntaje de ${jugador2.nombre} es ${dado3}`)
            return puntaje2
        } else if (dado1 == dado3) {
            puntaje2 = dado2
            console.log(`El puntaje de ${jugador2.nombre} es ${dado2}`)
            return puntaje2
        } else {
            puntaje2 = dado1
            console.log(`El puntaje de ${jugador2.nombre} es ${dado1}`)
            return puntaje2
        }
    }
};
const declararGanador = () => {
    if (puntaje1 > puntaje2) {
        return jugador1.nombre
    } else {
        return jugador2.nombre
    }
};
const control = () => {
    if (puntaje1 == puntaje2) {
        puntaje1 = 0;
        puntaje2 = 0;
        console.log('Hay un empate, desempatando');
        lanzarDados();
        puntuacion();
        lanzarDados();
        puntuacion();
        return control();
    } else {
        return declararGanador();
    };
};
const jugar = () => {
    determinarPrimerLanzador()
    lanzarDados();
    puntuacion();
    lanzarDados();
    puntuacion();
    control();
    console.log('el ganador es ', declararGanador())
}

jugar();