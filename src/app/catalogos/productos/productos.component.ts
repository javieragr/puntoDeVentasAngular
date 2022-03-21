import { Component, OnInit } from '@angular/core';

import { CatalogosService } from '../services/catalogos.service';
import { Producto } from '../../interfaces/Producto';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2'


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
export class ProductosComponent implements OnInit   {

  constructor(private catalogoServices:CatalogosService,
    public readonly swalTargets: SwalPortalTargets) { }


  public productos:Producto[]=[];
  public nuevo : Producto={nombre:'',clave:'',precio:0}
   
  ngOnInit() {
    this.cargaProductos();

  }
 
  
  cargaProductos(){
    
     this.catalogoServices.getAllProductos().subscribe((val:any)=>{
       this.productos=val.productos;
     })
    }


    addNew(){
      
      this.catalogoServices.addProduct(this.nuevo).subscribe((resp)=>{
        try {
          Swal.fire({
            icon: 'success',
            title: 'Saved',
            text: 'Product saved!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
          this.productos.push(this.nuevo);
          console.log(this.nuevo);
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
        }
          
        
          
        

      })
    }

    itemSelected(event:Producto){

      this.nuevo=event;
    }
    clean(){

      this.nuevo={nombre:'',clave:'',precio:0}
    }
 

}

  

