import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-ycondiciones',
  templateUrl: './terminos-ycondiciones.component.html',
  styleUrls: ['./terminos-ycondiciones.component.css']
})
export class TerminosYCondicionesComponent implements OnInit {

  claseTexto: string = "";
  terminosCondiciones: string = null;
  constructor(private ofertaService:OfertaService, private router:Router) { }

  ngOnInit() {
    if(!this.ofertaService.isAuthenticated()){
      this.router.navigate(['../error']);
    }else{
       this.getTerminos();
    }
    
  }

  aceptarTerminos(){
    this.ofertaService.terminosAceptados=true;
    this.router.navigate(['../detalle']);
  }

  seguirLeyendo() {
    if (this.claseTexto == "") {
      this.claseTexto = "seguirLeyendo";
    }
  }
  botonVisible() {
    if (this.claseTexto == "") {
      return true;
    }
    else {
      return false;
    }
  }

  getTerminos(){
   this.ofertaService.getTerminos()
   .subscribe(
     respuesta => {
      this.terminosCondiciones=respuesta["Texto"];
     }
     , error => {
       this.router.navigate(['../error']);
     }
   );
  }

}
