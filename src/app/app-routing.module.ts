import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrudArticuloComponent } from './crudArticulo/crudArticulo.component';

const routes: Routes = [
  {path:'', component: ArticulosComponent},
  {path:'articulo', component: CrudArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
