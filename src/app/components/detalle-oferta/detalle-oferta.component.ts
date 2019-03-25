import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.component.html',
  styleUrls: ['./detalle-oferta.component.css']
})
export class DetalleOfertaComponent implements OnInit {

  errorTerminos:boolean=false;
  terminosForm:FormGroup;
  constructor(private ofertaService: OfertaService, private router:Router) { }

  ngOnInit() {
    if(!this.ofertaService.isAuthenticated()){
      this.router.navigate(['../error']);
    }
    this.terminosForm = new FormGroup({
      'terminos': new FormControl(this.ofertaService.terminosAceptados),
    });
  }

  get f() { return this.terminosForm.controls; }

  cambiarPlan(){
    if(this.f.terminos.value){
      this.errorTerminos=false;
      this.router.navigate(['../cambioExitoso']);
    }else{
      this.errorTerminos=true;
      // let el=document.getElementById("error");
      // el.scrollIntoView();
    }

  }

  cambioTerminos(){
    this.errorTerminos=!this.f.terminos.value;
  }

}
