import { Categoria } from "./Categoria";

export class Articulo{

    idArticulo: number=0;
    nombreArticulo: string='';
    descripcion: string='';
    existencia: number=0;
    precio: number=0;
    idCategoria: Categoria = new Categoria();
}