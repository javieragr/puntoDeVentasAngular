import { Component, OnInit } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { CatalogosService } from '../services/catalogos.service';
import { Categoria } from '../../interfaces/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',

})
export class CategoriasComponent implements OnInit {

  
  constructor(private catalogoServices:CatalogosService,
    public readonly swalTargets: SwalPortalTargets) { }


  public categorias:Categoria[]=[];
  public nuevo : Categoria={nombre:'',clave:''}
   
  ngOnInit() {
    this.cargaCategorias();

  }
 
  
  cargaCategorias(){
    
     this.catalogoServices.getCategorias().subscribe((val:any)=>{
       this.categorias=val.categorias;
     })
    }


    addNew(){
      
      this.catalogoServices.addCategory(this.nuevo).subscribe((resp)=>{
        try {
          Swal.fire({
            icon: 'success',
            title: 'Saved',
            text: 'Categoria saved!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
          this.categorias.push(this.nuevo);
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

    itemSelected(event:Categoria){

      this.nuevo=event;
    }
    clean(){

      this.nuevo={nombre:'',clave:''}
    }
 

}
