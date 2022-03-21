import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

interface autoComplete{
  clave: string;
  nombre:string;
}

@Component({
  selector: 'app-auto-complete-clave-nombre',
  templateUrl: './auto-complete-clave-nombre.component.html',
  
})

export class AutoCompleteClaveNombreComponent implements OnInit {

  termino: string ="";
  
  original :autoComplete[]=[{clave:'001',nombre:'azucar'},
  {clave:'002',nombre:'harina'},
  {clave:'003',nombre:'soda'},
  {clave:'004',nombre:'carne'}];


  items :autoComplete[]=[{clave:'001',nombre:'azucar'},
  {clave:'002',nombre:'harina'},
  {clave:'003',nombre:'soda'},
  {clave:'004',nombre:'carne'}];

  constructor() { }

  ngOnInit(): void {
  }
  buscando(){
    //hay que filtrar para cambiar el arreglo
   this.items= this.original.filter((v)=>v.nombre.toLowerCase().includes(this.termino.toLowerCase()) )
  }
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
    const select:autoComplete = event.option.value;
    console.log(select);
    this.termino= select.nombre;
  }

}
