//Redirijo a Categoría desde Index/Callejon Diagon
function redirigirCategoria(event, categoria) {
    event.preventDefault();
    
    window.location.href = `categoria.html?categoria=${categoria}`;
}