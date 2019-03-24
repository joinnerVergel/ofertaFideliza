import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { oferta } from 'src/app/models/oferta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {


  constructor( private ofertaService:OfertaService,private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.getParametrosUrl();
    this.getToken();
  }

 getParametrosUrl(){
  this.route.params.subscribe(params => {
    this.ofertaService.usuarioAutenticacion.Key = params['key'];
    this.ofertaService.usuarioAutenticacion.NumeroCelular = params['numberPhone'];
    // this.ofertaService.usuarioAutenticacion.Token="VMMfFVf";
  });
  let texto:any=this.getTransformar(this.ofertaService.usuarioAutenticacion.NumeroCelular);
  if(texto==null){
    this.router.navigate(['../error']);
  }else{
    this.ofertaService.usuarioAutenticacion.NumeroCelular=texto;
  }
 }

 getTransformar(datos:string){
   let data:any={Texto:datos};
  this.ofertaService.getTransform(data)
  .subscribe(
    respuesta => {
      if(respuesta['Msg']=="Exito"){
        return respuesta['Texto'];
      }else{
        return null;
      }
    }
    , error => {
      return null;
    },
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
    }
    , error => {
      this.router.navigate(['../error']);
    },
  );
 }

  getPlanActual(){
    this.ofertaService.getDatosOferta(this.ofertaService.usuarioAutenticacion)
        .subscribe(
          respuesta => {
            this.ofertaService.datosOferta=respuesta;
            console.log(this.ofertaService.datosOferta)
          }
          , error => {
            this.router.navigate(['../error']);
          },
        );
  }

}
