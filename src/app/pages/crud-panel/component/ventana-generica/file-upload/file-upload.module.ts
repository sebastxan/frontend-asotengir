import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './componets/file-upload/file-upload.component';
import { FileUploadZoneComponent } from './componets/file-upload-zone/file-upload-zone.component';
import { FileUploadInputDirective } from './Directives/file-input.directive'; 
import { BidiModule } from '@angular/cdk/bidi';
import { ChipModule } from 'primeng/chip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadZoneComponent,
    FileUploadInputDirective
  ],
  imports: [
    CommonModule,
    BidiModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ChipModule,
    ChipsModule

  ],
  exports:[
    FileUploadComponent,
    FileUploadZoneComponent,
    FileUploadInputDirective
  ]
  
})
export class FileUploadModule { }
