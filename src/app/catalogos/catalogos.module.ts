import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogoTableComponent } from './catalogo-table/catalogo-table.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { UnidadesComponent } from './unidades/unidades.component';


@NgModule({
  declarations: [
    CatalogoTableComponent,
    ProductosComponent,
    CategoriasComponent,
    SucursalesComponent,
    UnidadesComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule
  ]
})
export class CatalogosModule { }
