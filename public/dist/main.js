import { getProductoById } from "./services/getProductoService.js";
const idInput = document.getElementById("input-id");
const catInput = document.getElementById("input-cat");
const idBtn = document.getElementById("btn-id");
const catBtn = document.getElementById("btn-cat");
const result = document.getElementById("salida");
function findProductoById(idProducto) {
    getProductoById(idProducto)
        .then((producto) => {
        result.textContent = `El producto con id: ${idProducto} se llama: ${producto.nombre} y está en la categoría: ${producto.categoria}`;
    })
        .catch(error => {
        result.textContent = error;
    });
}
idBtn.addEventListener("click", () => {
    const id = parseInt(idInput.value);
    try {
        getProductoById(id);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        result.textContent = message;
    }
});
