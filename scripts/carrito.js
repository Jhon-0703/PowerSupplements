let cantidadProductos = 0;

function agregarCarrito(producto){

cantidadProductos++;

document.getElementById("contadorCarrito").innerText =
    cantidadProductos;

alert("✅ " + producto + " agregado al carrito.");

}

function abrirModal(
titulo,
descripcion,
precio
){

document.getElementById("tituloModal").innerText =
    titulo;

document.getElementById("descripcionModal").innerText =
    descripcion;

document.getElementById("precioModal").innerText =
    precio;

document.getElementById("modalProducto").style.display =
    "block";

}

function cerrarModal(){

document.getElementById("modalProducto").style.display =
    "none";

}

window.onclick = function(event){

let modal =
    document.getElementById("modalProducto");

if(event.target === modal){

    modal.style.display = "none";
}

};
