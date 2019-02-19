import { Component } from '@angular/core';
import { ArticulosServices } from '../services/articulos.service';

@Component({
  selector: 'app-crearArticulo',
  templateUrl: './crear.component.html'
})
export class CrearArticuloComponent {
    articulo: any = {};
    constructor(private articulosServices: ArticulosServices){

    }

    guardarArticulo(){
        this.articulo.id = Date.now();
        this.articulosServices.guardarArticulo(this.articulo);
    }

}