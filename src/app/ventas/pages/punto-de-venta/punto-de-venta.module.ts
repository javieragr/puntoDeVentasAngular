import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoDeVentaComponent } from './punto-de-venta.component';
import { DependeciasGeneralesModule } from 'src/app/dependecias-generales.module';

@NgModule({
  declarations: [PuntoDeVentaComponent],
  imports: [
    CommonModule,
    DependeciasGeneralesModule
  ],exports:[PuntoDeVentaComponent]
})
export class PuntoDeVentaModule { }
