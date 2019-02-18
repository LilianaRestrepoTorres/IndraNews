import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosServices } from '../services/articulos.service';

@Component({
  selector: 'app-crudArticulo',
  templateUrl: './crudArticulo.component.html'
})
export class CrudArticuloComponent {

  id = null;
  articulo:any = {};

  constructor(private route: ActivatedRoute, private articulosServices:ArticulosServices){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.articulo = this.articulosServices.buscarArticulo(this.id);
    
  }
    
}