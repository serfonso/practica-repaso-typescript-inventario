import { Productos } from "../data/info.js";
import { Producto } from "../domain/entities/productos.js";

export async function getProductoById(id: number): Promise<Producto>{
    const promesa: Promise<Producto> = new Promise((resolve, reject)=>{
        setTimeout(() => {
            const producto = Productos.find(e => e.id === id)
            if(producto){
                resolve(producto)
            } else {
                reject(`El país con id ${id} no existe`)
            }
        }, 800);
    })
    return promesa;
}