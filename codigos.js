class Producto {
    constructor(id, marca, modelo, precio, foto) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.foto = foto;
    }
}
class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}
//Array donde se guarda el catalogo de productos en el carrito
const productos = [];
const elementosCarrito = [];
const contenedorProductos =
    document.getElementById('contenedor-productos').getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector("#items")

// Ejecución de funciones
cargarProductos();
cargarCarrito();


//Definiciones de funciones
function cargarProductos() {
    productos.push(new Producto(1, 'Ferrari', '488 GT3', 15999, './Imagenes/Autos/Ferrari488GT3/Ferrari1.jpg'));
    productos.push(new Producto(2, 'Pagani', 'Huayra BC', 17999, './Imagenes/Autos/PaganiHuaryaBC/Huayra.jpg'));
}


//Agregar cartas
function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} ARS</p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("Imagenes");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    //Contenedor Card
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-3 col-md-2";
    contenedorCarta.append(carta);
    return contenedorCarta;
}

