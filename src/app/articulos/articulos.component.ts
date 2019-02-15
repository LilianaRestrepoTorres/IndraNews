import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html'
})
export class ArticulosComponent {
    articulos:any = [
      {titulo: 'Articulo 1', active: true},
      {titulo: 'Articulo 2', active: false},
      {titulo: 'Articulo 3', active: true},
    ]
}
