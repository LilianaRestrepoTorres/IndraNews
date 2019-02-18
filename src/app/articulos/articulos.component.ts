import { Component } from '@angular/core';
import { ArticulosServices } from '../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html'
})
export class ArticulosComponent {
  
    categorias:any = [
      {nombre: 'Tecnología'},
      {nombre: 'Energía'},
      {nombre: 'Transporte'},
      {nombre: 'TeamIndra'}
    ]

    articulos = null;

    constructor(private articulosServices: ArticulosServices){
      this.articulos = articulosServices.articulos;
    }
}
