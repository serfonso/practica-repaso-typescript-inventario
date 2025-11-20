import { Productos } from "../data/info.js";
import { Producto } from "../domain/entities/productos.js";


export async function getProductoByCategoria(categoria: string): Promise<Producto[]>{
    const promesa: Promise<Producto[]> = new Promise((resolve)=>{
        setTimeout(() => {
            let producto: Producto[] = []
            Productos.forEach(e => {
                if (e.categoria === categoria) {
                    producto.push(e)
                }
            })
            if(producto){
                resolve(producto)
            } else {
                return [];
            }
        }, 1000);
    })
    return promesa;
}
