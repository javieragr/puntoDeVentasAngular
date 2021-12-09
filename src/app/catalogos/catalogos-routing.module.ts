import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { UnidadesComponent } from './unidades/unidades.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'categorias',
        component:CategoriasComponent

      },
      {
        path:'productos',
        component:ProductosComponent

      },
      {
        path:'sucursales',
        component:SucursalesComponent

      },
      {
        path:'unidades',
        component:UnidadesComponent

      }

    ]


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
