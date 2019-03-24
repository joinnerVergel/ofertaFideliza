import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retornaOferta, transformarData, token } from './urls';
import { oferta } from '../models/oferta';
import { autenticacion } from '../models/Autenticacion';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  public datosOferta:oferta=null;
  public usuarioAutenticacion:autenticacion =null;
  constructor( private http:HttpClient) { }

  getHttpOptions() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      })
    };
    return httpOptions;
  }

  getToken(data:any){
    return this.http.post<oferta>(token, data, this.getHttpOptions()).pipe();
  }
  getDatosOferta(data:any){
    return this.http.post<oferta>(retornaOferta, data, this.getHttpOptions()).pipe();
  }

  getTransform(data:any){
    return this.http.post<any>(transformarData, data, this.getHttpOptions()).pipe();
  }

  
}
