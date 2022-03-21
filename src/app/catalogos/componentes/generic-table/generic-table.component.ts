import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericClaveNombre } from '../../../interfaces/genericClaveNombre';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styles:[`
  table {
    width: 50%;
  }
  `]
  
})
export class GenericTableComponent implements OnInit {

  constructor() { }

  @Input() items: GenericClaveNombre[]=[];
  @Output() onItemSelected:EventEmitter<GenericClaveNombre> = new EventEmitter()
  ngOnInit(): void {
    
  }
  
  displayedColumns: string[] = ['clave', 'nombre'];

  getRow(row:any){

    console.log(row);
    this.onItemSelected.emit(row)
    
  }

}
