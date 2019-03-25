import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router, private ofertaService:OfertaService) { }

  ngOnInit() {
  }

  verBoton(){
    if(this.router.url.includes("/cambioExitoso",0) ||
    this.router.url.includes("/error",0)){
      return false;
    }
    else{
      return true;
    }
  }
  getNameWindow(){
    if(this.router.url.includes("/planes",0)){
      return "Oferta sugerida";
    }
    if(this.router.url.includes("/detalle",0)){
      return "Cambio de plan";
    }
    return null;
  }

  returnTo(){
    if(this.router.url.includes("/detalle",0)){
      this.router.navigate(['/planes/'+this.ofertaService.keyEncrypt+'/'+this.ofertaService.numberPhoneEncrypt]);
    }
    if(this.router.url.includes("/terminos",0)){
      this.router.navigate(['/detalle/']);
    }
  }

}
