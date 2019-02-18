import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrudArticuloComponent } from './crudArticulo/crudArticulo.component';
import { ArticulosServices } from './services/articulos.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    CrudArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticulosServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
