/* NO IMPLEMENTADO AUN -------------- PENDIENTE
let delivery;



if (localStorage.getItem("carrito") == null) {
    document.getElementsByTagName("h2")[0].textContent = "NO PEDISTE NADA AUN"
} else {
    delivery = JSON.parse(localStorage.getItem("carrito"));
}


delivery.forEach(element => {
    document.getElementsByTagName("p")[1].textContent = `${element.pedidos}`
});
delivery.forEach(element => {
    document.getElementsByTagName("p")[2].textContent = `${element.pedidos}`
});
delivery.forEach(element => {
    document.getElementsByTagName("p")[3].textContent = `${element.pedidos}`
});
*/

let novedades;

if (localStorage.getItem("agregados") == null) {
    document.querySelectorAll("h2")[0].textContent = "NO HAY NADA CARGADO AUN"
} else {
    //ESTO HAY UNA FORMA DE HACERLO CON UN FOR EACH? -----------> ME QUEDA PENDIENTE
    novedades = JSON.parse(localStorage.getItem("agregados"));
    document.querySelectorAll(".lista")[0].innerHTML = `
    <li>Precio ${novedades[0].precio}<li>
    <li>Stock ${novedades[0].stock}<li>
    `;
    document.querySelectorAll(".lista")[1].innerHTML = `
    <li>Precio ${novedades[1].precio}<li>
    <li>Stock ${novedades[1].stock}<li>
    `;
    document.querySelectorAll(".lista")[2].innerHTML = `
    <li>Precio ${novedades[2].precio}<li>
    <li>Stock ${novedades[2].stock}<li>
    `;
}