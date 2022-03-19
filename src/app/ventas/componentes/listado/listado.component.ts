import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from 'src/app/interfaces/Habilidad';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit {

  constructor(private http : HttpClient) { }
  public page=0;
  private totalPages=0;
  public items:Habilidad[]=[]

  public isLoading=false;
  private quantity=10;

  
  ngOnInit(): void {
  this.searchResults();
  }

  private searchResults(){
    console.clear()
    console.log('hehe');
    this.isLoading=true;
    this.http.get<Habilidad[]>(`https://pokeapi.co/api/v2/ability/?limit=${this.quantity}&offset=${this.page}`).subscribe((resp:any)=>{
      console.log(resp);
      
      this.items=resp.results;
      let total= resp.count;
      let result= (total/this.quantity)
      let pages= (((result%total)!==0?+1:0)+result)
        this.totalPages= parseInt(pages.toString())
      
     
      
      
      this.isLoading=false;

    })

  }

  btnClick(value: number){
  switch (value) {
      case 0:
      this.page=0;
      this.searchResults();
      break;

      case 1:
        this.page--
        if(this.page<0) this.page=0;
        this.searchResults();
      
      break;

      case 2:
        this.page++
        this.searchResults();
      
      break;

      case 3:
        this.page=this.totalPages;
        this.searchResults();
      
      break;
  
  
  }


  }

}
