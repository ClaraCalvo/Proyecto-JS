//Productos por Categoría
function muestroProductosCategoria() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get("categoria");

    let contenido = "";
    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoria);
    productosFiltrados.forEach(producto => {
        contenido += `<div class="col-4">
        <div class="card text-center border-0 bg-transparent">
               <a class="zoomProd" href="#" onclick="verProducto('${producto.nombre}')">
                  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                </a>
            <div class="card-body">
               <h3 id="nombreCategoriaMovil" class="text-white">${producto.nombre}</h3>
               <p class="card-text fw-bold" style="color: #a85">$${producto.precio}</p>
            </div>
        </div>
        </div>`;
    });

    document.getElementById("contenidoCategoria").innerHTML = contenido;
}

//Nombre de Categoría
const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get("categoria");
const categoriaCapitalizada = categoria.charAt(0).toUpperCase() + categoria.slice(1);
document.getElementById("nombreCategoria").textContent = categoriaCapitalizada;

muestroProductosCategoria();
botonCarrito();
