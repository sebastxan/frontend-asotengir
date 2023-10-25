import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentanaGenericaComponent } from './component/ventana-generica/ventana-generica.component';
import {MatDialogModule} from '@angular/material/dialog';
//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng/fieldset';
import { MessageModule } from 'primeng/message';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { GenericTablaComponent } from './generic-tabla/generic-tabla.component'; 
import { PanelModule } from 'primeng/panel';
import { MatNativeDateModule } from '@angular/material/core';
import { FileUploadInputDirective } from './file-upload/Directives/file-input.directive';
import { GestorfileComponent } from './file-upload/gestorfile/gestorfile.component'; 


import { FileUploadModule } from './file-upload/file-upload.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//import { FileUploadComponent } from './file-upload/componets/file-upload/file-upload.component';
/*const maskConfig: Partial<IConfig> = {
  validation: false,
};*/

@NgModule({
  declarations: [ GenericTablaComponent,
    VentanaGenericaComponent,GestorfileComponent
  ],
  imports: [
   // CommonModule,
   // BrowserModule,
 
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    FieldsetModule,
    MultiSelectModule,
    DropdownModule,
  
    PanelModule,
    MatSelectModule,
    HttpClientModule,
    MatSelectModule,

    MatButtonModule,
    MatIconModule,
    MessageModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FileUploadModule,
    
  ],
  providers: [
 
   
    
],
  exports:[VentanaGenericaComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VentanaGenericaModule { }
