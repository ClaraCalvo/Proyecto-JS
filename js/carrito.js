//Productos seleccionados en Carrito y guardados en LS
function guardoCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function cargoCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function productoEnCarrito(id) {
    const carrito = cargoCarritoLS();
    return carrito.some(item => item.id === id);
}

//Agrego uno o más productos en carrito
function agregarProducto(id) {
    const carrito = cargoCarritoLS();

    if (productoEnCarrito(id)) { 
        let posicion = carrito.findIndex(item => item.id === id); //devuelve posicion
        carrito[posicion].cantidad += 1; //mas de un producto
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1; //un solo producto
        carrito.push(producto);
    }

    guardoCarritoLS(carrito);
    botonCarrito();
}

//Carrito > HTML
function muestroProductosCarrito() {
/*     let productos = cargoCarritoLS(); //acá tengo ahora los productos de mi carrito
 */ let productosCarrito = cargoCarritoLS(); //acá tengo ahora los productos de mi carrito
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

//Eliminar UN SÓLO Producto del carrito
function eliminoProductoCarrito(id) {
    const carrito = cargoCarritoLS();
    let posicion = carrito.findIndex(item => item.id === id); //devuelve posicion

    if (carrito[posicion].cantidad > 1) {
        carrito[posicion].cantidad -= 1;
    } else {
        carrito.splice(posicion, 1)
    }

    guardoCarritoLS(carrito);
    botonCarrito();
    muestroProductosCarrito();
}

//Suma Total de Productos
function sumaTotal() {
    const productos = cargoCarritoLS();
    let total = 0;

    productos.forEach(producto => {
        total += producto.cantidad * producto.precio;
    });

    return total;
}

//Cantidad de productos en Carrito
function cantidadProductosCarrito() {
    const carrito = cargoCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
} 

//Botón Carrito
function botonCarrito() {
    let botonMaleta = document.getElementById("carrito");
    let contenidoCarrito = `<div style="display: flex">
      <p id="menuMovil">Maleta</p><button type="button" class="btn position-relative"><img id="imagenCarritoMovil" style="margin-top: -15px;" src="./img/icono.jpg" alt="carrito" width="34">
      <span class="position-absolute top-0 translate-middle badge rounded-pill" style="background-color: #a85">
      ${cantidadProductosCarrito()}
      </span>
      </button>
    </div>`;
    botonMaleta.innerHTML = contenidoCarrito;
}

/* 
muestroProductosCarrito();
botonCarrito(); 
*/

botonCarrito();
muestroProductosCarrito();

// {
// [ 