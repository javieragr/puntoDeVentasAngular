import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogoTableComponent } from './catalogo-table/catalogo-table.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';


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
    CatalogosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule
  ]
})
export class CatalogosModule { }
