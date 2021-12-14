import { Component } from '@angular/core';

import { CatalogosService } from '../services/catalogos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles:[
    `.outerContainer {
      padding: 5px;
      border: 1px solid #b6b6b6;
      box-sizing: content-box;
    }
    
    div.container {
      color: #eeeeee;
      margin-bottom: 10px;
    }
    
    div.container > div {
      height: 50px;
      width: 50px;
      background-color: blue;
    }
    `,
  ]
 
})
export class ProductosComponent  {

  constructor(private catalogoServices:CatalogosService) { }
 
  
 
  
  cargaProductos(){
      this.catalogoServices.getAllProductos().subscribe(resp=>{
        console.log(resp);
        
      })
    }
  
 

}

  

