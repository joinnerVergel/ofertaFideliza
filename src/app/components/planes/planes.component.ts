import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { oferta } from 'src/app/models/oferta';
import { ActivatedRoute, Router } from '@angular/router';
import { autenticacion } from 'src/app/models/Autenticacion';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {


  // respuestaTransformar:string=null;
  constructor( private ofertaService:OfertaService,private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.ofertaService.datosOferta=new oferta();
    this.getParametrosUrl();
    this.getTransformarKey(this.ofertaService.usuarioAutenticacion.Key);
    this.getToken();
    
  }

 getParametrosUrl(){
  
  this.route.params.subscribe(params => {
    this.ofertaService.usuarioAutenticacion=new autenticacion();
    this.ofertaService.usuarioAutenticacion.Key = params['key'];
    this.ofertaService.usuarioAutenticacion.NumeroCelular = params['numberPhone'];
    this.ofertaService.keyEncrypt=params['key'];
    this.ofertaService.numberPhoneEncrypt=params['numberPhone'];
    // this.ofertaService.usuarioAutenticacion.Token="VMMfFVf";
  });
  console.log(this.ofertaService.usuarioAutenticacion);
 
 
 }

 getTransformarCelular(valor:string){
   let data:any={Texto:valor};
  this.ofertaService.getTransform(data)
  .subscribe(
    respuesta => {
      if(respuesta['Msg']=="Exito"){
        this.ofertaService.usuarioAutenticacion.NumeroCelular=respuesta['Texto'].toString();
      }
    }
    , error => {
      this.router.navigate(['../error']);
    }
  );
 }

 getTransformarKey(valor:string){
  let data:any={Texto:valor};
 this.ofertaService.getTransform(data)
 .subscribe(
   respuesta => {
     if(respuesta['Msg']=="Exito"){
       this.ofertaService.usuarioAutenticacion.Key=respuesta['Texto'].toString();
     }
   }
   , error => {
     this.router.navigate(['../error']);
   },
   ()=>{
    this.getTransformarCelular(this.ofertaService.usuarioAutenticacion.NumeroCelular);
   }
 );
}

 getToken(){
   let data:any={Key:this.ofertaService.usuarioAutenticacion.Key,
    NumeroCelular:this.ofertaService.usuarioAutenticacion.NumeroCelular
  }
  this.ofertaService.getToken(data)
  .subscribe(
    respuesta => {
      if(respuesta.toString()!=""){
        this.ofertaService.usuarioAutenticacion.Token=respuesta.toString();
      }
      console.log(this.ofertaService.usuarioAutenticacion)
    }
    , error => {
      this.router.navigate(['../error']);
    },
    ()=>{
      this.getPlanActual();
    }
  );
 }


  getPlanActual(){
    // this.ofertaService.getDatosOferta(this.ofertaService.usuarioAutenticacion)
    //     .subscribe(
    //       respuesta => {
    //         this.ofertaService.datosOferta=respuesta;
    //         console.log(respuesta)
    //       }
    //       , error => {
    //         this.router.navigate(['../error']);
    //       },
    //     );
   this.ofertaService.datosOferta=
   {
    Error: "Exito",
    Key: null,
    CargoBasicoActual: 69900,
    CargoBasicoOferta: 69900,
    CloudActual: "CLOUD 5GB:INCLUIDO",
    CloudOferta: "CLOUD 5GB:INCLUIDO",
    CodAbonado: "300074560001",
    CodigoPlanOferta: "1988",
    CodigoPlanVozActual: "2542",
    Corte: 1,
    DataActual: "9 GB",
    DataOferta: "9 GB",
    DatosCompartidoOferta: null,
    DatosCompartidosActual: null,
    DescripcionPlanActual: "CTRL DATOS Y SEG 2T1",
    DescripcionPlanOferta: "PLAN VOZ_DATOS 9GB LINEA NUEVA",
    Documento: "51913699",
    DocumentoTipo: "CC",
    EstadoCliente: "active",
    FacebookActual: "FACEBOOK:ILIMITADO",
    FacebookOferta: "FACEBOOK:INCLUIDO",
    FamiliayAmigosActual: null,
    FamiliayAmigosOferta: "SERVICIO FAMILIA Y AMIGOS:INCLUIDO",
    FechaActivacion: "01/04/2019",
    LatamActual: null,
    LatamOferta: null,
    LineActual: "LINE:ILIMITADO",
    LineOferta: "LINE:INCLUIDO",
    MinutosDesdeActual: null,
    MinutosDesdeOferta: "MINUTOS DESDE COLOMBIA A ESTADOS UNIDOS, PUERTO RICO Y CANADA:500 MIN",
    MinutosMovistarActual: "Ilimitado",
    MinutosMovistarOferta: "Ilimitado",
    MinutosOtrosActual: "Ilimitado",
    MinutosOtrosOferta: "Ilimitado",
    MovistarPlayActual: "MOVISTAR PLAY:INCLUIDO",
    MovistarPlayOferta: "MOVISTAR PLAY:INCLUIDO",
    NapsterActual: null,
    NapsterOferta: null,
    SmSActual: "Ilimitado",
    SmsOferta: "Ilimitado",
    TelefonoContratado: "3002245413",
    TwitterActual: "TWITTER:ILIMITADO",
    TwitterOferta: "TWITTER:INCLUIDO",
    WazeActual: null,
    WazeOferta: "WAZE:INCLUIDO",
    WhatsappActual: "CHAT DE WHATSAPP:ILIMITADO",
    WhatsappOferta: "CHAT DE WHATSAPP:INCLUIDO"
}     
  }

  redirigirDetalleOferta(){
    this.router.navigate(['../detalle']);
  }

}
