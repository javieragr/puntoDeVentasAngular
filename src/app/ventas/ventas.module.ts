import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { PuntoDeVentaComponent } from './pages/punto-de-venta/punto-de-venta.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PuntoDeVentaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FlexLayoutModule
  ]
})
export class VentasModule { }
