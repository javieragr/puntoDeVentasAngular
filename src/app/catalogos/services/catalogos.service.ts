import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../interfaces/Producto';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  private url :string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllProductos=()=>{
    return this.http.get(`${this.url}/productos/getProductos`).pipe(map(resp=>{
      console.log(resp);
      
      return resp;
    }))

  }
  
}
