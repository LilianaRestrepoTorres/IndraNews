import { Injectable } from "@angular/core";
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ArticulosServices{
    articulos:any = [
        {nombre: 'Articulo 1', descripcion: 'Este es el primer artículo', fecha:'18-01-2019',usuario: 'Lili', active: true},
        {nombre: 'Articulo 2', descripcion: 'Este es el segundo artículo', fecha:'01-02-2019',usuario: 'Lili', active: true},
        {nombre: 'Articulo 3', descripcion: 'Este es el tercer artículo', fecha:'18-02-2019',usuario: 'Lili', active: true},
    ]

    constructor(private afDB:AngularFirestore){

    }

    public getArticulos(){
        //return this.articulos;
        return this.afDB.collection("articulos").valueChanges();
    }

    public buscarArticulo(id){
        return this.articulos.filter((articulos)=>{return articulos.id == id})[0] || null;
    }

    public guardarArticulo(articulo){
        console.log(articulo);
        this.afDB.collection('articulos').add(articulo);
    }

}