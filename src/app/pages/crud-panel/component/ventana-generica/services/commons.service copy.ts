import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Generic } from '../../../../../models/generic';

@Injectable({
  providedIn: 'root'
})
export abstract class CommonsService {
  protected baseEndpoint:string;
  protected cabeceras:HttpHeaders=new HttpHeaders({'content-type': 'application/json'});
  constructor(protected http:HttpClient) { }
  public listar(url:string):Observable<any[]>{
   
    return this.http.get<any[]>(this.baseEndpoint+url);
  }
  public ver(id:string,url:string):Observable<any>{
    return this.http.get<any>(`${this.baseEndpoint+url}/${id}`);
  }
  public crear(e:any,url:string):Observable<any>{
    return this.http.post<any>(this.baseEndpoint+url,e,{headers:this.cabeceras});
  }
  public editar(e:any,url:string):Observable<any>{

    return this.http.put<any>(`${this.baseEndpoint+url}/${e.id}`,e,{headers:this.cabeceras});
  }
  public eliminar(id:string,url:string):Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint+url}/${id}`);
  }

}