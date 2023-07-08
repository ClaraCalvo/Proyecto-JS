//Redirijo a Categoría desde Index/Callejon Diagon
function redirigirCategoria(event, categoria) {
    event.preventDefault();
    
    window.location.href = `categoria.html?categoria=${categoria}`;
}

function cargarProductosDestacados() {
    return new Promise((resolve, reject) => {
      fetch('destacados.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al cargar los datos.');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
}
  
function generarHTMLProducto(producto) {
    return `
      <div class="col-md-4">
        <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
        <p class="text-light">${producto.nombre}</p>
      </div>
    `;
}
  
function mostrarProductosDestacados(productos) {
    const productosDestacadosContainer = document.getElementById('productosDestacados');
  
    productos.forEach(producto => {
      const productoHTML = generarHTMLProducto(producto);
      productosDestacadosContainer.innerHTML += productoHTML;
    });
}
  
cargarProductosDestacados()
.then(productos => {
    mostrarProductosDestacados(productos);
})
.catch(error => {
    console.error(error);
});


  