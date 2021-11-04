//mi array para pasarle los datos al INDEX de mi stock y precio
let datos

//datos de mis productos
class Productos {

    constructor(producto, precio, stock) {
        this.producto = producto
        this.precio = precio
        this.stock = stock
    }
}

if (localStorage.getItem("agregados") == null) {
    datos = [];
} else {
    datos = JSON.parse(localStorage.getItem("agregados"))
}

//funcion para agregar Productos al array Datos
function agregarProductos(i) {
    let producto;
    //VALIDAR DATOS -- QUE SEAN NUMEROS -- QUE SEAN MAYORES A 0 ------------------> PENDIENTE
    let precio = document.querySelectorAll("input")[i].value
    let stock = document.querySelectorAll("input")[i + 1].value
    switch (i) {
        case 0:
            producto = "cesar"
            break;
        case 2:
            producto = "chef"
            i = 1
            break;
        case 4:
            producto = "rusa"
            i = 2
            break;
    }
    //ENCONTRAR UNA FORMA DE QUE OCUPEN SIEMPRE LAS MISMAS POSICIONES DENTRO DEL ARRAY Y EN EL MISMO ORDEN ----------> PENDIENTE
    let product = new Productos(producto, precio, stock)
    datos.splice(i, 0, product)
}

const prueba = []

//HAY FORMA DE UNA FUNCION LLAME AL BOTON Y LO HAGA POR SEPARADO??? ACHICARIA EL CODIGO UNAS 15 LINEAS =============>PENDIENTEEE
document.querySelectorAll('button')[0].addEventListener("click", () => {
    agregarProductos(0);
    document.querySelectorAll('button')[0].setAttribute("style", "display: none")
    const nuevo = document.createElement("p");
    nuevo.textContent = "Producto Agregado"
    nuevo.setAttribute("style", "border: 1px solid")
    document.querySelectorAll(".cards")[0].appendChild(nuevo)
    localStorage.setItem("agregados", JSON.stringify(datos));
    prueba[0] = datos[0]
})
document.querySelectorAll('button')[1].addEventListener("click", () => {
    agregarProductos(2)
    document.querySelectorAll('button')[1].setAttribute("style", "display: none")
    const nuevo = document.createElement("p");
    nuevo.textContent = "Producto Agregado"
    nuevo.setAttribute("style", "border: 1px solid")
    document.querySelectorAll(".cards")[1].appendChild(nuevo)
    localStorage.setItem("agregados", JSON.stringify(datos));
})
document.querySelectorAll('button')[2].addEventListener("click", () => {
    agregarProductos(4)
    document.querySelectorAll('button')[2].setAttribute("style", "display: none")
    const nuevo = document.createElement("p");
    nuevo.textContent = "Producto Agregado"
    nuevo.setAttribute("style", "border: 1px solid")
    document.querySelectorAll(".cards")[2].appendChild(nuevo)
    localStorage.setItem("agregados", JSON.stringify(datos));
})