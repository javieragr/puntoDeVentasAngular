import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { PuntoDeVentaComponent } from './pages/punto-de-venta/punto-de-venta.component';


@NgModule({
  declarations: [
    PuntoDeVentaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
