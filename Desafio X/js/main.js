console.log('%cDesafio de JS FINAL', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cCee-Lo', "color: green; font-weight: bold; font-size: 1.1rem");


//defino mi clase jugador, con sus 3 valores, nombre, puntuacion que toma el valor del dado valido y victorias que suma la cantidad de rondas ganadas.

class Jugador {
    constructor(nombre, puntuacion, victorias) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
        this.victorias = victorias;
    };
};
//en el array jugadores se almacena cada Jugador
const jugadores = [];

//click al boton para agregar al array los jugadores
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    agregarGente();
})

//esta funcion es llamada por el boton, agrega jugadores al array
function agregarGente() {
    let nombre = document.querySelector("#nombre").value
    let tipo = new Jugador(nombre, 0, 0);
    jugadores.push(tipo)
    document.getElementsByTagName("form")[0].reset()
    borrarBoton();
}

//esta funcion esta dentro de la que mete gente al array, sirve para que se tome un maximo de 2 jugadores y muestra el resto cuando fueron cargados los datos
function borrarBoton() {
    if (jugadores.length == 1) {
        document.querySelector("#nombre").setAttribute("placeholder", "Nombre Jugador 2")
    } else if (jugadores.length == 2) {
        document.querySelector("form").style.display = "none"
        $('.grid').fadeIn(2000)
    }
}

//cada boton llama a la funcion que ejecuta el juego, una para cada jugador
$('#lanzar1').on("click", () => {
    mostrarDados(0)
})
$('#lanzar2').on("click", () => {
    mostrarDados(3)
})

//esta funcion arroja los dados hasta conseguir un resultado valido. Antes solamente lanzaba los dados, pero decidi automatizarla para darle velocidad
function lanzarDados() {
    let dado1
    let dado2
    let dado3
    do {
        dado1 = Math.floor(Math.random() * (1, 6)) + 1;
        dado2 = Math.floor(Math.random() * (1, 6)) + 1;
        dado3 = Math.floor(Math.random() * (1, 6)) + 1;
    } while (dado1 != dado2 && dado1 != dado3 && dado2 != dado3)
    let array = [dado1, dado2, dado3]
    return array
}

//con esto defino si el resultado de la tirada es valido o deberia seguir tirando
function compararDados(i) {
    if (i == 0) {
        if (resultados[0] == resultados[1] || resultados[0] == resultados[2] || resultados[1] == resultados[2]) {
            $("#lanzar1").text("resultado obtenido!")
                .fadeOut(500)
            dadoGanador(0)
            boton()
        } else {
            $("#lanzar1").text("seguir jugando")
        }
    } else {
        if (resultados[0] == resultados[1] || resultados[0] == resultados[2] || resultados[1] == resultados[2]) {
            $("#lanzar2").text("resultado obtenido!")
                .fadeOut(500)
            dadoGanador(1)
            boton()
        } else {
            $("#lanzar2").text("seguir jugando")
        }
    }
}

//el dado valido se le asigna a cada jugador
function dadoGanador(jug) {
    if (resultados[0] == resultados[1]) {
        jugadores[jug].puntuacion = resultados[2]
    } else if (resultados[0] == resultados[2]) {
        jugadores[jug].puntuacion = resultados[1]
    } else {
        jugadores[jug].puntuacion = resultados[0]
    }
}

//mi mayor logro en js XD, muestra los dados en pantalla, me quede calvo 3 veces resolviendo como hacerla
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

//revelar quien gana cada partida
function boton() {

    if (jugadores[0].puntuacion != 0 && jugadores[1].puntuacion != 0) {
        console.log("entra en diferentes puntuaciones")
        if (jugadores[0].victorias != 0 || jugadores[1].victorias != 0) {
            let boton = document.getElementsByTagName("p")[1]
            $('.btn').fadeIn(500)
            $('#ganador').fadeIn(500)
            $("#ganador").on("click", () => {
                $("#ganador").fadeOut(100)
                boton.textContent = `!!!EL GANADOR ES: ${compararPuntajes()}!!! la concha de tu hermana`;
                jugarDeNuevo()
            })
            console.log("entra en diferentes victorias")
        } else {
            $(".btn").append(`<button id="ganador">Quien Gano?`);
            $("#ganador").on("click", () => {
                $("#ganador").fadeOut(100)
                $(".btn").append(`<p>!!!EL GANADOR ES: ${compararPuntajes()}!!!</p>`)
                jugarDeNuevo()
            })
            console.log("entra en diferentes la que deberia entrar solo una vez")
        }
    }
}

//comparar los puntajes, llamada en la funcion anterior
function compararPuntajes() {
    if (jugadores[0].puntuacion > jugadores[1].puntuacion) {
        jugadores[0].victorias++;
        jugadores.forEach(element => {
            element.puntuacion = 0
        })
        return jugadores[0].nombre.toUpperCase();
    } else if (jugadores[1].puntuacion > jugadores[0].puntuacion) {
        jugadores[1].victorias++;
        jugadores.forEach(element => {
            element.puntuacion = 0
        })
        return jugadores[1].nombre.toUpperCase();
    } else {
        jugadores.forEach(element => {
            element.puntuacion = 0;
            element.victorias += 1
        })
        return "NADIE, HUBO UN EMPATE"
    }
}

function jugarDeNuevo() {
    $("#lanzar1").text("Jugar de Nuevo")
        .fadeIn(500)
    $("#lanzar2").text("Jugar de Nuevo")
        .fadeIn(500)
        //$(".btn").fadeOut(500)
}