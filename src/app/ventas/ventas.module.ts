import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PuntoDeVentaModule } from './pages/punto-de-venta/punto-de-venta.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FlexLayoutModule,
    PuntoDeVentaModule
  ],
  exports:[
    
  ]
})
export class VentasModule { }
