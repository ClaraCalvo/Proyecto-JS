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
        let posicion = carrito.findIndex(item => item.id === id);
        carrito[posicion].cantidad += 1;
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardoCarritoLS(carrito);
    botonCarrito();

    setTimeout(() => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            destination: "carrito.html",
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #02020a, #a85)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }, 1000);
}

//nuevo
function verProducto(nombre) { 
    let productos = cargoProductosLS();
    let producto = productos.find(item => item.nombre == nombre);
  
    localStorage.setItem("producto", JSON.stringify(producto));
    location.href = "producto.html";
}

//Eliminar UN SÓLO Producto del carrito
function eliminoProductoCarrito(id) {
    const carrito = cargoCarritoLS();
    let posicion = carrito.findIndex(item => item.id === id);

    if (carrito[posicion].cantidad > 1) {
        carrito[posicion].cantidad -= 1;
    } else {
        carrito.splice(posicion, 1)
    }

    guardoCarritoLS(carrito);
    botonCarrito();
    muestroProductosCarrito();

    setTimeout(() => {
        Toastify({
            text: "Producto eliminado del carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }, 500);
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

botonCarrito();
