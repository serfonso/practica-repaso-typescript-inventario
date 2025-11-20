import { Productos } from "../data/info.js";
export async function getProductoById(id) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = Productos.find(e => e.id === id);
            if (producto) {
                resolve(producto);
            }
            else {
                reject(`El producto con id ${id} no existe`);
            }
        }, 800);
    });
    return promesa;
}
