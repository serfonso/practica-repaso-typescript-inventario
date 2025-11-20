import { getProductoById } from "./services/getProductoService.js"
import { getProductoByCategoria } from "./services/getProductosByCategoriaService.js"

const idInput = document.getElementById("input-id") as HTMLInputElement
const catInput = document.getElementById("input-cat") as HTMLInputElement
const idBtn = document.getElementById("btn-id") as HTMLInputElement
const catBtn = document.getElementById("btn-cat") as HTMLInputElement
const result = document.getElementById("salida") as HTMLInputElement

function findProductoById(idProducto: number): void {
    getProductoById(idProducto)
        .then((producto) => {
            result.textContent = `El producto con id: ${idProducto} se llama: ${producto.nombre} y está en la categoría: ${producto.categoria}`
        })
        .catch(error => {
            result.textContent = error
        })
}

idBtn.addEventListener("click", () => {
    const id = parseInt(idInput.value)

    try {
        getProductoById(id)
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado"
        result.textContent = message;
    }
})

async function findProductoByCategoria(catProducto: string): Promise<void> {
    try{
        const productos = await getProductoByCategoria(catProducto)
        var string=""
            productos.forEach(producto => {
            string+=`El producto con id: ${producto.id} se llama: ${producto.nombre} y está en la categoría: ${producto.categoria} \n`
        });
        result.textContent = string
    } catch (error) {
        result.textContent = String(error)
    }
}


idBtn.addEventListener("click", () => {
    const categoria = catInput.value


    try {
        getProductoByCategoria(categoria)
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error inesperado"
        result.textContent = message;
    }
})


