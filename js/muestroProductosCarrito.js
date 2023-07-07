//Carrito > HTML
function muestroProductosCarrito() {
    let productosCarrito = cargoCarritoLS(); //acá tengo ahora los productos de mi carrito
    let contenidoCarrito = "";

    if (cantidadProductosCarrito() > 0) {

        contenidoCarrito += `<table class="table table-dark table-striped">`;

        productosCarrito.forEach(producto => {
          contenidoCarrito += `<tr class="align-items-center justify-content-center">

          <td><a href="#" onclick="verProducto('${producto.nombre}')"><img src="${producto.imagen}" alt="${producto.nombre}" width="80"></a></td>

          <td class="align-middle text-light">${producto.nombre}</td>
          <td class="align-middle text-light">${producto.cantidad} x $${producto.precio}</td>
          <td class="align-middle text-light">$${producto.cantidad * producto.precio}</td>
          <td class="align-middle"><img class="zoomProd" src="./img/trash.svg" alt="eliminar" width="25" onclick="eliminoProductoCarrito(${producto.id});"></td>`;
        });

        const totalCarrito = sumaTotal();

        contenidoCarrito += `<tr class="align-items-center justify-content-center">
          <td>&nbsp;</td>
          <td><b>Total<b></td>
          <td>&nbsp;</td>
          <td><b>$${totalCarrito}<b></td>
          <td>&nbsp;</td>
        </tr>
        </table>`;

    }   else {
        contenidoCarrito += `<div class="alert alert-dark text-center" role="alert">
            ¡Tu Maleta a Hogwarts está vacía!<br></br>
            ¡Apurate a comprar en el <a href="index.html" class="alert-link">Callejón Diagon</a> antes de que se vaya el Tren!
        </div>`
    }

    document.getElementById("contenidoCarrito").innerHTML = contenidoCarrito;
};

muestroProductosCarrito();