import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterModule } from '@angular/router';
import { GestionpsCrudRoutingModule } from './gestionps-crud-routing.module';

import * as TablerIcons from 'angular-tabler-icons/icons';
import {

  ReactiveFormsModule
} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, FormGroup } from '@angular/forms';
//import { TabulatorGridModule } from '../../tabulator-grid/tabulator-grid.module';

//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { VentanaGenericaModule } from '../crud-panel/component/ventana-generica/ventana-generica.module';
import { TablaGenericaModule } from '../crud-panel/component/tabla-generica/tabla-generica.module';

import { DropdownModule } from 'primeng/dropdown';
import { PaisComponent } from './pais/pais.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CiudadComponent } from './ciudad/ciudad.component';

//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ PaisComponent, DepartamentoComponent, CiudadComponent],
  imports: [
   CommonModule,
  // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MatDialogModule,
    TablaGenericaModule,
   // VentanaGenericaModule,
    // TabulatorGridModule,
    RouterModule.forChild(GestionpsCrudRoutingModule),
    TablerIconsModule.pick(TablerIcons)


  ],
  exports: [
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class GestionpsCrudModule { }
