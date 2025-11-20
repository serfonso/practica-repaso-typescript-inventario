import { getProductoById } from "./services/getProductoService.js";
import { getProductoByCategoria } from "./services/getProductosByCategoriaService.js";
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
async function findProductoByCategoria(catProducto) {
    try {
        const productos = await getProductoByCategoria(catProducto);
        var string = "";
        productos.forEach(producto => {
            string += `El producto con id: ${producto.id} se llama: ${producto.nombre} y está en la categoría: ${producto.categoria} \n`;
        });
        result.textContent = string;
    }
    catch (error) {
        result.textContent = String(error);
    }
}
idBtn.addEventListener("click", () => {
    const categoria = catInput.value;
    try {
        getProductoByCategoria(categoria);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado";
        result.textContent = message;
    }
});
