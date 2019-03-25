import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { plantillaRobot } from 'src/app/models/plantillaRobot';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {

  errorTerminos: boolean = false;
  terminosForm: FormGroup;
  tipoIdentificacion: string;
  Identificacion: string;
  constructor(private ofertaService: OfertaService, private router: Router) { }

  ngOnInit() {
    if (!this.ofertaService.isAuthenticated()) {
      this.router.navigate(['../error']);
    }
    this.terminosForm = new FormGroup({
      'terminos': new FormControl(this.ofertaService.terminosAceptados),
    });
  }

  get f() { return this.terminosForm.controls; }

  cambiarPlan() {
    if (this.f.terminos.value) {
      this.errorTerminos = false;
      this.setEvento("6");
      this.setPlantillaRobot();
      
    } else {
      this.errorTerminos = true;
    }

  }

  cambioTerminos() {
    this.errorTerminos = !this.f.terminos.value;
    if(this.errorTerminos){
      this.setEvento("4");
    }else{
      this.setEvento("5");
    }
  }

  verFacebook() {
    if (this.ofertaService.datosOferta.FacebookOferta == null) {
      return false;
    }
    if (this.ofertaService.datosOferta.FacebookOferta.toUpperCase().trim().includes("FACEBOOK")) {
      return true;
    } else {
      return false;
    }
  }
  verWhatsapp() {
    if (this.ofertaService.datosOferta.WhatsappOferta == null) {
      return false;
    }
    if (this.ofertaService.datosOferta.WhatsappOferta.toUpperCase().trim().includes("WHATSAPP")) {
      return true;
    } else {
      return false;
    }
  }
  verTwitter() {
    if (this.ofertaService.datosOferta.TwitterOferta == null) {
      return false;
    }
    if (this.ofertaService.datosOferta.TwitterOferta.toUpperCase().trim().includes("TWITTER")) {
      return true;
    } else {
      return false;
    }
  }

  
  setPlantillaRobot() {
    let data: plantillaRobot = {
      Key: "KGfvnedLG6Zc0pjCvLrDjr86Q2LSsXxfEP29zyJXOJFaMHGSvsqGt4kDdsNsuHoi",
      NumeroDocumento: this.ofertaService.DocEncrypt,
      TipoDocumento: this.ofertaService.tipoDocEncrypt,
      NumeroCelular: this.ofertaService.numberPhoneEncrypt,
      IdTipoActivacion: "1",
      CodPlanActual: this.ofertaService.datosOferta.CodigoPlanVozActual,
      CodPlanNuevo: this.ofertaService.datosOferta.CodigoPlanOferta,
      CodBeneficio: "8632",
      Corte: this.ofertaService.datosOferta.Corte.toString(),
      EstadoCliente: this.ofertaService.datosOferta.EstadoCliente,
      FechaProgramadaActivacion: this.ofertaService.datosOferta.FechaActivacion,
      EnvioContrato: "Fisico"
    }
    console.log("entro");
    this.ofertaService.setPlantillaRobot(data)
      .subscribe(
        respuesta => {
          if (respuesta['Mensaje'] == "Exito") {
            this.router.navigate(['../cambioExitoso']);
          }
        }
        , error => {
          this.router.navigate(['../error']);
        }
      );
  }

  setEvento(eventoId:string) {
    this.ofertaService.setRegistroEvento(this.ofertaService.getDataEvento(eventoId))
      .subscribe(
        respuesta => {
          if (respuesta['Mensaje'] == "Exito") {
            console.log('Registro de evento exitoso');
          }
        }
        , error => {
          console.log('Error al registrar evento');
        }
      );
  }



}
