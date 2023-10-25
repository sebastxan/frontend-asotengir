import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGenericaComponent } from './component/tabla-generica/tabla-generica.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    TablaGenericaComponent
  ],
  imports: [
   CommonModule,
    PanelModule,
    ButtonModule,
    MatDialogModule
    
  ],
  exports:[TablaGenericaComponent]
  
})
export class TablaGenericaModule { }
