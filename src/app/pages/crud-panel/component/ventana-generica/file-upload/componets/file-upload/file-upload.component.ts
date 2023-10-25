import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../services/file-upload.service';
import { FileUploadInputDirective } from '../../Directives/file-input.directive'; 
import { fadeInOutTrigger } from '../../animations/fade-in-out';
import { FileUploadItemActionDirective } from '../../Directives/file-upload-item-action.directive';
import { FileUploadState } from '../../models/upload-state';
import { CellComponent, ColumnComponent, RowComponent, TabulatorFull } from 'tabulator-tables';
import { FileUploadSource } from '../../models/upload-source';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  animations: [fadeInOutTrigger],
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  @ContentChild(FileUploadInputDirective, { read: ElementRef })
  _fileInputRef?: ElementRef<HTMLInputElement>;
  @ContentChild(FileUploadItemActionDirective, { read: TemplateRef })
  _customUploadItemActionTemplate?: TemplateRef<unknown>;

  @ViewChild('defaultUploadItemActionTemplate', { static: true })
  _defaultUploadItemActionTemplate?: TemplateRef<unknown>;


  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
   
  fileInfos?: Observable<any>;
  @Input()
  uploadSource?: FileUploadSource;

  @Input()
  statusBar = false;
  constructor(private uploadService: FileUploadService) { }
  ngAfterContentInit() {
   // const inputElement = this.fileInput.nativeElement;
    console.log(this._fileInputRef," directiva")
    if (!this._fileInputRef) {
      throw new Error('File input with a FileInputDirective is required');
    }
  }

  ngOnInit(): void {
   // console.log("la directiva",this._fileInputRef)
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    console.log("hola")
    this.selectedFiles = event.target.files;
  }
   _onFileChange(files: FileList) {
    // Only add files if an uploadSource has been provided.
    // If no upload source is provided, it is assumed the consumer will handle the upload state.
    if (this.uploadSource) {
      
      console.log(files,"recibe los archivos",files," etc ",this.uploadSource.files)
     this.upload(files)
    }
  }
  upload(files: FileList): void {
    this.progress = 0;

   // if (this.selectedFiles) {
     // const file: File | null = this.selectedFiles.item(0);
     Array.from(files).forEach((file) => {
      if (file) {
        this.currentFile = file;
        console.log(this.currentFile,"subida acual");

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'No se puede subir el archivo!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
  //  }
    });
  }

}
