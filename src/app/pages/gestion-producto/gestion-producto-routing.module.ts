import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export const GestionProductoRoutingModule: Routes = [
  {
    path: '',
    children: [
      {
        path: 'productos',
        component: ProductosComponent,
      },
     
    ],
  },
];

