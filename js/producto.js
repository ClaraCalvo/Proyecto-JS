function productoIndividual() {
    const producto = JSON.parse(localStorage.getItem("producto")); //en "producto" está el objeto indicado

    let contenidoProducto = `<div class="col-md-4 offset-md-2">
        <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
    </div>
    <div class="col-md-5">
        <a id="linkCategoria" href="../categoria.html?categoria=${producto.categoria.toLowerCase()}"><p class="text-secondary link-warning m-0">${producto.categoria}</p></a>
        <h1 class="text-white">${producto.nombre}
        <p class="card-text fw-bold fs-5" style="color: #a85">$${producto.precio}<p>
        <p class="fw-light fs-5 text-wrap descripcion">${producto.descripcion}</p>
        <button type="button" class="btn btn-dark" onClick="agregarProducto(${producto.id});">Añadir<img style="padding-left:5px;" width=26 src="../img/icono.jpg" alt="carrito"></button>
    </div>`;

    document.getElementById("contenidoProducto").innerHTML = contenidoProducto;
};

productoIndividual();
botonCarrito();