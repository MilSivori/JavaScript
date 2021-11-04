const url2 = "https://asli-fun-fact-api.herokuapp.com/"


$(".btn").click(() => {
    $.get(url2, function(respuesta, estado) {
        if (estado === "success") {
            let datos = respuesta;
            let adquirido = datos.data
            $(".grid").prepend(`<div>
                                <p>${adquirido.fact}</p>
                                </div>`)
        }
    });
});