import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crudArticulo',
  templateUrl: './crudArticulo.component.html'
})
export class CrudArticuloComponent {
  articulos:any = [
    {id: 1, titulo: 'Articulo 1', active: true},
    {id: 2, titulo: 'Articulo 2', active: false},
    {id: 3, titulo: 'Articulo 3', active: true},
  ];

  id = null;

  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarArticulo());
  }

  buscarArticulo(){
    return this.articulos.filter((articulos)=>{return articulos.id == this.id})[0] || null;
  }


    
}