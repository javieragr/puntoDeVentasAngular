import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../interfaces/Producto';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment.prod';
import { Articulo } from 'src/app/interfaces/Articulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  private url :string = environment.baseUrl;
  private saivexUrl :string = environment.saivex;
  constructor(private http:HttpClient) { }

  getAllProductos=():Observable<Producto[]>=>{
    return this.http.get<Producto[]>(`${this.url}/productos/getProductos`);
    //falt agregar los corrs al saivex
    // return this.http.get<Articulo>(`${this.saivexUrl}/articulos/all`).pipe(map(resp=>{
    //   console.log(resp);
      
    //   return resp;
    // }))

  }
  addProduct=(prod:Producto):Observable<Producto>=>{
    return this.http.post<Producto>(`${this.url}/productos/agregarProducto`,prod);

  }
  
}
