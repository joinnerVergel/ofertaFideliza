import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retornaOferta, transformarData, token, terminosYCondiciones, transformar_Data, plantilla_Robot, registro_Eventos } from './urls';
import { oferta } from '../models/oferta';
import { autenticacion } from '../models/Autenticacion';
import { plantillaRobot } from '../models/plantillaRobot';
import { eventos } from '../models/eventos';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  public keyEncrypt:string=null;
  public numberPhoneEncrypt:string=null;
  public tipoDocEncrypt:string=null;
  public DocEncrypt:string=null;
  public datosOferta:oferta=null;
  public terminosAceptados:boolean=false;
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

  getTerminos(){
    return this.http.get(terminosYCondiciones,this.getHttpOptions());
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

  get_Transform(data:any){
    return this.http.post<any>(transformar_Data, data, this.getHttpOptions()).pipe();
  }

  setPlantillaRobot(data:plantillaRobot){
    return this.http.post<any>(plantilla_Robot, data, this.getHttpOptions()).pipe();
  }

  setRegistroEvento(data:eventos){
    return this.http.post<any>(registro_Eventos, data, this.getHttpOptions()).pipe();
  }


  getDataEvento(idEvento:string):eventos{
    var datePipe = new DatePipe('en-US');
    let data: eventos = { 
      Key:"KGfvnedLG6Zc0pjCvLrDjr86Q2LSsXxfEP29zyJXOJFaMHGSvsqGt4kDdsNsuHoi",
      FechaEvento:datePipe.transform(new Date(), 'dd/MM/yyyy hh:mm:ssa'),
      IdEvento:idEvento,
      NumeroCelular:this.numberPhoneEncrypt,
      TipoIdentificacion:this.tipoDocEncrypt,
      Identificacion:this.DocEncrypt,
      IdTipoActivacion:"1",
      PlanActual:this.datosOferta.CodigoPlanVozActual,
      PlanOfertado:this.datosOferta.CodigoPlanOferta,
      PlanBono:"8632"
   }
   return data;
  }
  isAuthenticated(){
    if(this.usuarioAutenticacion==null){
      return false;
    }
    else{
      return true;
    }
    
  }

  
}
