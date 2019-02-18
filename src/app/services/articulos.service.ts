import { Injectable } from "@angular/core";

@Injectable()
export class ArticulosServices{
    articulos:any = [
        {titulo: 'Articulo 1', active: true},
        {titulo: 'Articulo 2', active: false},
        {titulo: 'Articulo 3', active: true},
    ]

    public getArticulos(){
        return this.articulos;
    }

    public buscarArticulo(id){
        return this.articulos.filter((articulos)=>{return articulos.id == id})[0] || null;
    }

}