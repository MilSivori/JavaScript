const url = "http://hp-api.herokuapp.com/api/characters"

$(".btn").click(() => {
    $.get(url, function(respuesta, estado) {
        if (estado === "success") {
            let datos = respuesta;
            for (const dato of datos) {
                $(".grid").prepend(`<div>
                                <h3>${dato.name}</h3>
                                <p> ${dato.species}</p>
                                <img src="${dato.image}" alt="" style="width: 100px;">
                                </div>`);
            }
        }
    });
    $(".btn").fadeOut(2000)
});