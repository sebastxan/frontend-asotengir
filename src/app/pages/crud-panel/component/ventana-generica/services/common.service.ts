import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Generic } from '../../../../../models/generic';
import {environment} from "../../../../../../environments/environment"
import { env } from 'process';
@Injectable({
  providedIn: 'root'
})
export abstract class CommonService<E extends Generic> {
  protected baseEndpoint:string=environment.apiEndpoint;
  protected cabeceras:HttpHeaders=new HttpHeaders({'content-type': 'application/json'});
  constructor(protected http:HttpClient) { }
  public listar(url:string):Observable<E[]>{
   
    return this.http.get<E[]>(this.baseEndpoint+url);
  }
  public ver(id:string,url:string):Observable<E>{
    return this.http.get<E>(`${this.baseEndpoint+url}/${id}`);
  }
  public crear(e:E,url):Observable<E>{
    return this.http.post<E>(this.baseEndpoint+url,e,{headers:this.cabeceras});
  }
  public editar(e:any,url,idNuevo:string):Observable<any>{
   
    e[idNuevo]=e.id
    delete e.id
    return this.http.put<E>(`${this.baseEndpoint+url}/${e.idNuevo}`,e,{headers:this.cabeceras});
  }
  public eliminar(id:string,url:string):Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint+url}/${id}`);
  }

}
