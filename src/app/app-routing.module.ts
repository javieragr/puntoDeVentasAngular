import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> import('./ventas/ventas.module').then(m=> m.VentasModule),

  },
  {
    path:'',
    loadChildren:()=>import('./catalogos/catalogos.module').then(m=> m.CatalogosModule)

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
