import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './ciudad/ciudad.component';
import { DepartamentoComponent } from './departamento/departamento.component';

import { PaisComponent } from './pais/pais.component';



;

export const GestionpsCrudRoutingModule: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pais',
        component: PaisComponent,
      },
      {
        path: 'departamento',
        component: DepartamentoComponent,
      },
      {
        path: 'ciudad',
        component: CiudadComponent,
      },
      
    ],
  },
];
