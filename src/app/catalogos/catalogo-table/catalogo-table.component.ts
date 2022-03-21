import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatRow } from '@angular/material/table';

import { Producto } from '../../interfaces/Producto';

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

  @Input() prods: Producto[]=[];
  @Output() onItemSelected:EventEmitter<Producto> = new EventEmitter()
  ngOnInit(): void {
    
  }
  dataSource : Catalogo[]=[{id:1,clave:'01',nombre:'soda'},
   {id:2,clave:'02',nombre:'Agua natural'}
  ]
  displayedColumns: string[] = ['clave', 'nombre','precio'];

  getRow(row:any){

    console.log(row);
    this.onItemSelected.emit(row)
    
  }
}
