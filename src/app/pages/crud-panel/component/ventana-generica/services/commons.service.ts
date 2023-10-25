import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../../../../environments/environment"

interface ModeloGenerico {
  // Define las propiedades comunes que deben tener los modelos
}

@Injectable({
  providedIn: 'root'
})
export abstract class CommonsService {
 baseEndpoint:string=environment.apiEndpoint;
 cabeceras:HttpHeaders=new HttpHeaders({'content-type': 'application/json'});
  constructor(private http:HttpClient) { }
  public listar(url:string):Observable<any[]>{
   
    return this.http.get<any[]>(this.baseEndpoint+url);
  }
  public ver(id:string,url:string):Observable<any>{
    return this.http.get<any>(`${this.baseEndpoint+url}/${id}`);
  }
  public crear(e:any,url:string):Observable<any>{
    return this.http.post<any>(this.baseEndpoint+url,e,{headers:this.cabeceras})
    
  }
  public editar(e:any,url:string,idAlias:string):Observable<any>{
    alert("llego aqui "+ e.id)
   // e[idAlias]=e.id
   // delete e.id
   console.log("le envio ",e)
    return this.http.put<any>(`${this.baseEndpoint+url}/${e.id}`,e,{headers:this.cabeceras});
  }
  public eliminar(id:string,url:string):Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint+url}/${id}`);
  }

}