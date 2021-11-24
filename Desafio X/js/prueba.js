console.log('%cDesafio de JS FINAL', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cCee-Lo', "color: green; font-weight: bold; font-size: 1.1rem");

//////////////////////
///CLASE Y VARIABLE///
//////////////////////

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


/////////////////////
///...FUNCIONES...///
/////////////////////


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


//Se arrojan los dados hasta conseguir un resultado valido. 
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

//defino el dado que no es igual, es el que otorga el puntaje del jugador
function definirPuntaje(dice) {
    if (dice[0] == dice[1]) {
        return dice[2]
    } else if (dice[0] == dice[2]) {
        return dice[1]
    } else {
        return dice[0]
    }
}

//esta funcion suma las victorias de cada jugador, tambien desempata automaticamente en caso de que haya un empate.
function coronado() {
    let titulo = document.getElementsByTagName("h2")[0]
    if (jugadores[0].puntuacion > jugadores[1].puntuacion) {
        jugadores[0].victorias++;
        titulo.textContent = `gano ${jugadores[0].nombre}`.toUpperCase()
    } else if (jugadores[1].puntuacion > jugadores[0].puntuacion) {
        jugadores[1].victorias++;
        titulo.textContent = `gano ${jugadores[1].nombre}`.toUpperCase()
    } else {
        console.log("EMPATE")
        mostrarDados()
    }
}

//esta funcion devuelve el nombre del jugador con mas victorias, que sera asignado al sessionstorage
function victoria() {
    if (jugadores[0].victorias > jugadores[1].victorias) {
        return jugadores[0].nombre
    } else if (jugadores[1].victorias > jugadores[0].victorias) {
        return jugadores[1].nombre
    } else {
        return "empate"
    }
}

///////////////////
///...EVENTOS...///
///////////////////

//Agregar al array los jugadores
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    agregarGente();
})

//Ejecutar evento, lanzar los dados
$('#lanzar1').on("click", () => {
    $('#lanzar1').text("Jugar de Nuevo")
    $('#lanzar2').fadeIn(500)
    mostrarDados()
})

///////////////////
///...LOGICA...////
///////////////////

//Se ejecutan todas las funciones. Se muestra el ganador, se imprimen los dados en pantalla y se otorga la opcion de seguir jugando o finalizar
function mostrarDados() {
    let resultado1 = lanzarDados()
    let resultado2 = lanzarDados()
    let resultados = resultado1.concat(resultado2)
    jugadores[0].puntuacion = definirPuntaje(resultado1)
    jugadores[1].puntuacion = definirPuntaje(resultado2)
    let i = 0
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
    coronado()
    let winner = victoria()
    sessionStorage.setItem("victoria", JSON.stringify(winner));
}





//ESTA LA DEJO SEPARADA PORQUE LA HICE CON AYUDA, es una alternativa al dark mode, guarda la preferencia en localstorage

//Función que agregar o quita la clase del body
const cambiarTheme = (e) => {
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modoDark", "off");
        document.body.classList.remove("dark");
        document.getElementsByTagName("i")[0].setAttribute("class", "far fa-moon")
    } else {
        localStorage.setItem("modoDark", "on");
        document.body.classList.add("dark");
        document.getElementsByTagName("i")[0].setAttribute("class", "far fa-sun")
    }
};

//Función que se ejecuta al inicio.
const traerModo = () => {
    const modoDark = localStorage.getItem("modoDark");
    if (modoDark === "on") {
        document.body.classList.add("dark");
        document.getElementsByTagName("i")[0].setAttribute("class", "far fa-moon")
    }
};

traerModo();

//Evento para escuchar cuando el usuario presione el botón
document.getElementById("button").addEventListener("click", cambiarTheme);