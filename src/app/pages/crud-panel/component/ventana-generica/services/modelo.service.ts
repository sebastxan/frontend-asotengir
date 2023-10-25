import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Generic } from 'src/app/models/generic';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ModeloService<E extends Generic> extends CommonService<E> {
  constructor(http: HttpClient) {
    super(http);
}
}