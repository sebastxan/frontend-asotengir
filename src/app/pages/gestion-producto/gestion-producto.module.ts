import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GestionProductoRoutingModule } from './gestion-producto-routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GestionProductoRoutingModule),
    GestionProductoRoutingModule
  ]
})
export class GestionProductoModule { }
