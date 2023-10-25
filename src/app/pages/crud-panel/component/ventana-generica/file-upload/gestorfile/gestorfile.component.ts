import { Component } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { interval, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { FileUploadSource } from '../models/upload-source'; 

@Component({
  selector: 'app-gestorfile',
  templateUrl: './gestorfile.component.html',
  styleUrls: ['./gestorfile.component.css']
})
export class GestorfileComponent {
  id:number=10
  _allowMultiple = true;
  _uploadSource: FileUploadSource = {
    upload: (file: File, uploadItemId: number) => {
      let progress = 0;
     
      return interval(1000).pipe(
        finalize(() =>
          console.log(`Upload stream complete: [${uploadItemId}][${file.name}]`)
        ),
        map(() => {
          progress += Math.floor(Math.random() * 10 + 1);

          if ((uploadItemId === 2 || uploadItemId === 4) && progress > 50) {
            throw new Error('Error en subir el archivo');
          }

          /* if (file.type === 'application/pdf') {
            throw new Error('File type not supported');
          } */

          return Math.min(progress, 100);
        })
      );
      
    },
    delete: (uploadItemId: number) => {
      return of(uploadItemId);
    },
    files:()=>{
    
      return of(this.id);
    }
  
  };

}
