console.log('%cDesafio de JS FINAL', "color:darkred; font-weight: bold; font-size: 1.3rem");
console.log('%cMODIFICANDO EL DOM UN POCO', "color: green; font-weight: bold; font-size: 1.1rem");

/////////////////////////////////////////////////////////////////////
///PRUEBO DE MODIFICAR UN POCO EL DOM, API Y UN POCO MAS DE JQUERY///
/////////////////////////////////////////////////////////////////////

//Creo todo desde JS, la idea era no poner nada en el html para practicar un poco.
let body = document.getElementsByTagName("body")[0];
let titulo = document.createElement("h1");
let parrafo = document.createElement("p");
body.setAttribute("class", "flex")
body.appendChild(titulo);

//API a consumir
const url = "https://asli-fun-fact-api.herokuapp.com/"


//obtengo el ganador de la pagina anterior, como quiero que cada vez que juegue se inicie de nuevo no uso localstorage
const ganador = JSON.parse(sessionStorage.getItem("victoria"));

//ejecuto la funcion y verifico si esta en modo normal o dark
const traerModo = () => {
    const modoDark = localStorage.getItem("modoDark");
    if (modoDark === "on") {
        document.body.classList.add("dark");
    }
};

traerModo();


//Modifico el DOM a partir del resultado del juego. Imprimo el nombre del ganador, pongo un boton que llama una API para otorgar la "recompensa".
if (ganador != "empate") {
    body.appendChild(parrafo);
    titulo.textContent = `Felicitaciones ${ganador}`.toUpperCase();
    parrafo.textContent = `Toma un poco de conocimiento y vete.`;
    let boton = document.createElement("button");
    boton.setAttribute("class", "btn centrado")
    boton.textContent = "Obtener Dato Random"
    body.appendChild(boton)
    sessionStorage.setItem("victoria", JSON.stringify(""));
} else {
    titulo.textContent = "fue un empate".toUpperCase();
    let volver = document.createElement("a");
    body.appendChild(volver)
    volver.setAttribute("href", "../index.html")
    volver.setAttribute("class", "btn centrado")
    volver.textContent = "Volver a Jugar";
    sessionStorage.setItem("victoria", JSON.stringify(""));
}


//Llamo a la API datos random a partir del boton creado
$(".btn").click(() => {
    $.get(url, function(respuesta, estado) {
        if (estado === "success") {
            let datos = respuesta;
            let adquirido = datos.data
            $(".btn").after(`<div>
                                <p class="coloreado centrado">${adquirido.fact}</p>
                                </div>`);
            $(".btn").toggle()
            $(".coloreado").css({ 'color': 'red', 'font-size': '150%', 'fontWeight': 'bold' });
        }
    });
});