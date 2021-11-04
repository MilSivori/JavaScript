class Jugador {
    constructor(nombre, puntuacion, victorias) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
        this.victorias = victorias;
    };
};


let player1 = new Jugador("JUGADOR1", 0, 0);
let player2 = new Jugador("JUGADOR2", 0, 0);
const jugadores = [player1, player2];

$('#lanzar1').on("click", () => {
    mostrarDados(0)
})
$('#lanzar2').on("click", () => {
    mostrarDados(3)
})


function lanzarDados() {
    let dado1 = Math.floor(Math.random() * (1, 6)) + 1;
    let dado2 = Math.floor(Math.random() * (1, 6)) + 1;
    let dado3 = Math.floor(Math.random() * (1, 6)) + 1;
    let array = [dado1, dado2, dado3]
    return array
}

function compararDados(i) {
    if (i == 0) {
        if (resultados[0] == resultados[1] || resultados[0] == resultados[2] || resultados[1] == resultados[2]) {
            $("#lanzar1").text("resultado obtenido!")
                .fadeOut(2000)
            dadoGanador(0)
            boton()
        } else {
            $("#lanzar1").text("seguir jugando")
        }
    } else {
        if (resultados[0] == resultados[1] || resultados[0] == resultados[2] || resultados[1] == resultados[2]) {
            $("#lanzar2").text("resultado obtenido!")
                .fadeOut(2000)
            dadoGanador(1)
            boton()
        } else {
            $("#lanzar2").text("seguir jugando")
        }
    }
}

function dadoGanador(jug) {
    if (resultados[0] == resultados[1]) {
        jugadores[jug].puntuacion = resultados[2]
    } else if (resultados[0] == resultados[2]) {
        jugadores[jug].puntuacion = resultados[1]
    } else {
        jugadores[jug].puntuacion = resultados[0]
    }
}


function mostrarDados(entrante) {
    resultados = lanzarDados()
    let i = entrante
    compararDados(i)
    resultados.forEach(element => {
        switch (element) {
            case 1:
                document.getElementsByTagName("img")[i].src = "./img/dice_small_1.png";
                i++
                break
            case 2:
                document.getElementsByTagName("img")[i].src = "./img/dice_small_2.png";
                i++
                break
            case 3:
                document.getElementsByTagName("img")[i].src = "./img/dice_small_3.png";
                i++
                break
            case 4:
                document.getElementsByTagName("img")[i].src = "./img/dice_small_4.png";
                i++
                break
            case 5:
                document.getElementsByTagName("img")[i].src = "./img/dice_small_5.png";
                i++
                break
            case 6:
                document.getElementsByTagName("img")[i].src = "./img/dice_small_6.png";
                i++
                break
        }
    });
}

function boton() {
    if (jugadores[0].puntuacion != 0 && jugadores[1].puntuacion != 0) {
        $("body").append(`<div class="btn"><button id="ganador">Quien Gano?<div>`);
        $("#ganador").on("click", () => {
            $("#ganador").fadeOut(500)
            $(".btn").append(`<p>EL GANADOR ES ${compararPuntajes()}</p>`)
        })
    }
}

function compararPuntajes() {
    if (jugadores[0].puntuacion > jugadores[1].puntuacion) {
        return jugadores[0].nombre;
    } else if (jugadores[1].puntuacion > jugadores[0].puntuacion) {
        return jugadores[1].nombre;
    } else {
        return "NADIE"
    }
}