import { Component, OnInit } from '@angular/core';

 interface Catalogo {
  id: number;
  clave: string;
  nombre: string;
  
}

@Component({
  selector: 'app-catalogo-table',
  templateUrl: './catalogo-table.component.html',
  styles:[`
  table {
    width: 50%;
  }
  `]
    
  
  
})
export class CatalogoTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataSource : Catalogo[]=[{id:1,clave:'01',nombre:'soda'},
   {id:2,clave:'02',nombre:'Agua natural'}
  ]
  displayedColumns: string[] = ['clave', 'nombre'];

}
