class User {

    constructor(nombre, pass, admin) {
        this.nombre = nombre
        this.pass = pass
        this.admin = admin
    }
}

class Producto {

    constructor(prod, precio, stock, pedidos) {
        this.prod = prod;
        this.precio = precio;
        this.stock = stock
        this.pedidos = pedidos
    }
}

let carro;

if (localStorage.getItem("carrito") == null) {
    carro = [];
} else {
    carro = JSON.parse(localStorage.getItem("carrito"))
}


const cesar = new Producto("Cesar", "$500", 10, 0);
const chef = new Producto("Chef", "$450", 8, 0);
const rusa = new Producto("Rusa", "$400", 5, 0);
const administrador = new User("admin", "123", true)
const usuarios = [administrador]


const confirmacionDeAcceso = () => {
    let name = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    if (name != usuarios[0].nombre || password != usuarios[0].pass) {
        const usuario = new User(name, password, false);
        usuarios.push(usuario);
        document.getElementById("name").setAttribute("style", "display: none");
        document.getElementById("pass").setAttribute("style", "display: none");
        document.getElementById("btn").setAttribute("style", "display: none");
        let contenedor = document.createElement("p");
        contenedor.innerHTML = `Bienvenido ${name}`;
        document.getElementById("contenedor").appendChild(contenedor);
    } else {
        let admin = document.createElement("li");
        admin.innerHTML = `<a href="./pages/backofice.html">BACKOFFICE</a>`;
        document.getElementsByTagName("ul")[0].appendChild(admin);
        document.getElementById("name").setAttribute("style", "display: none");
        document.getElementById("pass").setAttribute("style", "display: none");
        document.getElementById("btn").setAttribute("style", "display: none");
    }
}

document.getElementById("btn").addEventListener("click", confirmacionDeAcceso)



//intente hacerlo con una funcion pero no me salio, no pude meterle un parametro en la funcion que se ejecutaba cuando se hacia click en alguno de los botones.
document.getElementsByTagName("button")[1].addEventListener("click", () => {
    if (cesar.stock > 0) {
        carro.push(cesar);
        cesar.stock -= 1
        cesar.pedidos += 1
        localStorage.setItem("carrito", JSON.stringify(carro));
        alert("producto agregado");
    } else {
        alert("no se puede agregar el producto, ya no queda stock")
    }
});
document.getElementsByTagName("button")[2].addEventListener("click", () => {
    if (chef.stock > 0) {
        carro.push(chef);
        chef.stock -= 1
        chef.pedidos += 1
        localStorage.setItem("carrito", JSON.stringify(carro));
        alert("producto agregado");
    } else {
        alert("no se puede agregar el producto, ya no queda stock")
    }
});
document.getElementsByTagName("button")[3].addEventListener("click", () => {
    if (rusa.stock > 0) {
        carro.push(rusa);
        rusa.stock -= 1
        rusa.pedidos += 1
        localStorage.setItem("carrito", JSON.stringify(carro));
        alert("producto agregado");
    } else {
        alert("no se puede agregar el producto, ya no queda stock")
    }
});