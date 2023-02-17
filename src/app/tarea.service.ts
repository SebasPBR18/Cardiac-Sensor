import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
export interface Message{
  source:string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class TareaService {  
  
  private api= 'https://sensortdd4iots-production.up.railway.app/usuario';
  private apipulso= 'https://sensortdd4iots-production.up.railway.app/frecuenciacardiaca/all';
  private apipersona= 'https://sensortdd4iots-production.up.railway.app/persona';
  private apipaciente= 'https://sensortdd4iots-production.up.railway.app/paciente';
  constructor(
    private http:HttpClient
  ) { }

  public gettarea():Observable<any>{
    return this.http.get(this.api);
 }

 public getpulso():Observable<any>{
  return this.http.get(this.apipulso);
}
 
//agreg
 public postusuario(body:any):Observable<any>{
  return this.http.post(this.api,body);
}
public postpersona(body:any):Observable<any>{
  return this.http.post(this.apipersona,body);
}
public postpaciente(body:any):Observable<any>{
  return this.http.post(this.apipaciente,body);
}

}
