import { Productos } from "../data/info.js";
export async function getProductoByCategoria(categoria) {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            let producto = [];
            Productos.forEach(e => {
                if (e.categoria === categoria) {
                    producto.push(e);
                }
            });
            if (producto) {
                resolve(producto);
            }
            else {
                return [];
            }
        }, 1000);
    });
    return promesa;
}
